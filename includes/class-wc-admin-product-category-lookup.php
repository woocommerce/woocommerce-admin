<?php
/**
 * Keeps the product category lookup table in sync with live data.
 *
 * @package WooCommerce Admin/Classes
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Product_Category_Lookup class.
 */
class WC_Admin_Product_Category_Lookup {

	/**
	 * The single instance of the class.
	 *
	 * @var object
	 */
	protected static $instance = null;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	protected function __construct() {}

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	final public static function instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Init hooks.
	 */
	public function init() {
		add_action( 'regenerate_product_category_lookup', array( $this, 'regenerate' ) );
		add_action( 'edited_product_cat', array( $this, 'on_edit' ), 99 );
	}

	/**
	 * Regenerate all lookup table data.
	 */
	public function regenerate() {
		global $wpdb;

		// Delete existing data and ensure schema is current.
		$wpdb->query( "TRUNCATE TABLE $wpdb->wc_product_category_lookup" );
		WC_Admin_Install::create_tables();

		$terms = get_terms(
			'product_cat',
			array(
				'hide_empty' => false,
				'fields'     => 'id=>parent',
			)
		);

		$hierarchy = array();
		$inserts   = array();

		$this->unflatten_terms( $hierarchy, $terms, 0 );
		$this->get_term_insert_values( $inserts, $hierarchy );

		if ( ! $inserts ) {
			return;
		}

		$insert_string = implode(
			'),(',
			array_map(
				function( $item ) {
					return implode( ',', $item );
				},
				$inserts
			)
		);

		$wpdb->query( "INSERT IGNORE INTO $wpdb->wc_product_category_lookup (category_id,descendant_id,depth) VALUES ({$insert_string})" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Used to construct insert query recursively.
	 *
	 * @param  array $inserts Array of data to insert.
	 * @param  array $terms   Terms to insert.
	 * @param  array $parents Parent IDs the terms belong to.
	 */
	protected function get_term_insert_values( &$inserts, $terms, $parents = array() ) {
		foreach ( $terms as $term ) {
			$insert_parents = array_merge( array( $term['term_id'] ), $parents );

			foreach ( $insert_parents as $parent ) {
				$inserts[] = array(
					$parent,
					$term['term_id'],
					$term['depth'],
				);
			}

			$this->get_term_insert_values( $inserts, $term['descendants'], $insert_parents );
		}
	}

	/**
	 * Convert flat terms array into nested array.
	 *
	 * @param array   $hierarchy Array to put terms into.
	 * @param array   $terms Array of terms (id=>parent).
	 * @param integer $parent Parent ID.
	 * @param integer $depth Current depth.
	 */
	protected function unflatten_terms( &$hierarchy, &$terms, $parent = 0, $depth = 0 ) {
		foreach ( $terms as $term_id => $parent_id ) {
			if ( (int) $parent_id === $parent ) {
				$hierarchy[ $term_id ] = array(
					'term_id'     => $term_id,
					'depth'       => $depth,
					'descendants' => array(),
				);
				unset( $terms[ $term_id ] );
			}
		}
		foreach ( $hierarchy as $term_id => $terms_array ) {
			$this->unflatten_terms( $hierarchy[ $term_id ]['descendants'], $terms, $term_id, ( $depth + 1 ) );
		}
	}

	/**
	 * When a product category gets edited, see if we need to sync the table.
	 *
	 * @param int $category_id Term ID being edited.
	 */
	public function on_edit( $category_id ) {
		$category        = $this->get_category( $category_id );
		$category_object = get_term( $category_id, 'product_cat' );
		$current_parent  = is_null( $category ) ? null : $category->parent_id;
		$new_parent      = $category->parent;

		// Only continue if the parent was changed or the row does not exist.
		if ( ! is_null( $current_parent ) && $current_parent === $new_parent ) {
			return;
		}

		// The PARENT has changed for this category. It's descendents won't change, but it's ancestors will!
		$descendants        = $this->get_descendants( $category_id );
		$new_ancestors      = $this->get_ancestors( $new_parent );
		$previous_ancestors = $this->get_ancestors( $category_id );

		$this->update_descendants( $new_parent, $descendants );

		foreach ( $new_ancestors as $ancestor_id ) {
			$this->update_descendants( $ancestor_id, $descendants );
		}

		foreach ( $previous_ancestors as $ancestor_id ) {
			$this->delete_descendants( $ancestor_id, $descendants );
		}
	}

	/**
	 * Update a categories descendents.
	 *
	 * @param int   $category_id Target category.
	 * @param array $descendants Array of descendants.
	 */
	protected function update_descendants( $category_id, $descendants ) {
		$descendants = wp_parse_id_list( $descendants );
		$inserts     = array();

		foreach ( $descendants as $descendant ) {
			$inserts[] = "({$category_id},{$descendant})";
		}

		$insert_string = implode( ',', $inserts );

		$wpdb->query( "INSERT IGNORE INTO $wpdb->wc_product_category_lookup (category_id,descendant_id) VALUES {$insert_string}" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Delete a categories descendents.
	 *
	 * @param int   $category_id Target category.
	 * @param array $descendants Array of descendants, or NULL to delete all without mercy.
	 */
	protected function delete_descendants( $category_id, $descendants = null ) {
		global $wpdb;

		$where = ' 1=1 ';

		if ( is_array( $descendants ) ) {
			$id_list = implode( ',', array_map( 'intval', array_unique( array_filter( $descendants ) ) ) );
			$where  .= " AND descendant_id IN ({$id_list}) ";
		}

		$wpdb->query( $wpdb->prepare( "DELETE FROM $wpdb->wc_product_category_lookup WHERE category_id = %d AND {$where}", $category_id ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Get category descendants.
	 *
	 * @param int $category_id The category ID to lookup.
	 * @return array
	 */
	protected function get_descendants( $category_id ) {
		global $wpdb;

		return wp_parse_id_list(
			$wpdb->get_col(
				$wpdb->prepare(
					"SELECT descendant_id FROM $wpdb->wc_product_category_lookup WHERE category_id = %d",
					$category_id
				)
			)
		);
	}

	/**
	 * Return all ancestor category ids for a category.
	 *
	 * @param int $category_id The category ID to lookup.
	 * @return array
	 */
	protected function get_ancestors( $category_id ) {
		global $wpdb;

		return wp_parse_id_list(
			$wpdb->get_col(
				$wpdb->prepare(
					"SELECT category_id FROM $wpdb->wc_product_category_lookup WHERE descendant_id = %d",
					$category_id
				)
			)
		);
	}
}

WC_Admin_Product_Category_Lookup::instance()->init();
