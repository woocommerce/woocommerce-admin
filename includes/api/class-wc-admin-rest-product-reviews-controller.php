<?php
/**
 * REST API Product Reviews Controller
 *
 * Handles requests to /products/reviews.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Product reviews controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Product_Reviews_Controller
 */
class WC_Admin_REST_Product_Reviews_Controller extends WC_REST_Product_Reviews_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Prepare links for the request.
	 *
	 * @param WP_Comment $review Product review object.
	 * @return array Links for the given product review.
	 */
	protected function prepare_links( $review ) {
		$links = array(
			'self'       => array(
				'href' => rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $review->comment_ID ) ),
			),
			'collection' => array(
				'href' => rest_url( sprintf( '/%s/%s', $this->namespace, $this->rest_base ) ),
			),
		);
		if ( 0 !== (int) $review->comment_post_ID ) {
			$links['up'] = array(
				'href'       => rest_url( sprintf( '/%s/products/%d', $this->namespace, $review->comment_post_ID ) ),
				'embeddable' => true,
			);
		}
		if ( 0 !== (int) $review->user_id ) {
			$links['reviewer'] = array(
				'href'       => rest_url( 'wp/v2/users/' . $review->user_id ),
				'embeddable' => true,
			);
		}
		return $links;
	}

	/**
	 * Delete a product review.
	 *
	 * @param WP_REST_Request $request Full details about the request
	 *
	 * @return bool|WP_Error|WP_REST_Response
	 */
	public function delete_item( $request ) {
		$product_review_id = absint( is_array( $request['id'] ) ? $request['id']['id'] : $request['id'] );
		$force             = isset( $request['force'] ) ? (bool) $request['force']     : false;

		$product_review = get_comment( $product_review_id );
		if ( empty( $product_review_id ) || empty( $product_review->comment_ID ) || empty( $product_review->comment_post_ID ) ) {
			return new WP_Error( 'woocommerce_rest_product_review_invalid_id', __( 'Invalid product review ID.', 'woocommerce' ), array( 'status' => 404 ) );
		}

		/**
		 * Filter whether a product review is trashable.
		 *
		 * Return false to disable trash support for the product review.
		 *
		 * @param boolean $supports_trash        Whether the object supports trashing.
		 * @param WP_Post $product_review        The object being considered for trashing support.
		 */
		$supports_trash = apply_filters( 'rest_product_review_trashable', ( EMPTY_TRASH_DAYS > 0 ), $product_review );

		$request->set_param( 'context', 'edit' );

		if ( $force ) {
			$previous = $this->prepare_item_for_response( $product_review, $request );
			$result   = wp_delete_comment( $product_review_id, true );
			$response = new WP_REST_Response();
			$response->set_data(
				array(
					'deleted'  => true,
					'previous' => $previous->get_data(),
				)
			);
		} else {
			if ( ! $supports_trash ) {
				return new WP_Error( 'rest_trash_not_supported', __( 'The product review does not support trashing.', 'woocommerce' ), array( 'status' => 501 ) );
			}

			if ( 'trash' === $product_review->comment_approved ) {
				return new WP_Error( 'rest_already_trashed', __( 'The comment has already been trashed.', 'woocommerce' ), array( 'status' => 410 ) );
			}

			$result         = wp_trash_comment( $product_review->comment_ID );
			$product_review = get_comment( $product_review_id );
			$response       = $this->prepare_item_for_response( $product_review, $request );
		}

		if ( ! $result ) {
			return new WP_Error( 'rest_cannot_delete', __( 'The product review cannot be deleted.', 'woocommerce' ), array( 'status' => 500 ) );
		}

		/**
		 * Fires after a product review is deleted via the REST API.
		 *
		 * @param object           $product_review  The deleted item.
		 * @param WP_REST_Response $response        The response data.
		 * @param WP_REST_Request  $request         The request sent to the API.
		 */
		do_action( 'rest_delete_product_review', $product_review, $response, $request );

		return $response;
	}
}
