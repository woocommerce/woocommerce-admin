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
		// @todo This should be defered or moved.
		add_action( 'wc_admin_updated', array( $this, 'move_term_relationships' ) );
		add_action( 'edit_product_cat', array( $this, 'edit_product_cat' ), 99 );
		add_action( 'edited_product_cat', array( $this, 'edited_product_cat' ), 99 );
		add_action( 'save_post', array( $this, 'sync_products' ), 99, 2 );
	}

	/**
	 * Clear all data in the lookup table.
	 *
	 * @param array|null $term_ids If set, clear only relationships for these term ids.
	 * @param array|null $product_ids If set, clear only relationships for these product ids.
	 */
	protected function delete_relationships( $term_ids = null, $product_ids = null ) {
		global $wpdb;

		$where = ' 1=1 ';

		if ( is_array( $term_ids ) ) {
			$id_list = implode( ',', array_map( 'intval', array_unique( array_filter( $term_ids ) ) ) );

			$where .= " AND category_id IN ({$id_list}) ";
		}

		if ( is_array( $product_ids ) ) {
			$id_list = implode( ',', array_map( 'intval', array_unique( array_filter( $product_ids ) ) ) );

			$where .= " AND product_id IN ({$id_list}) ";
		}

		$wpdb->query( "DELETE FROM {$wpdb->prefix}wc_product_category_lookup WHERE {$where}" );  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Perform population of lookup table.
	 *
	 * @param array|null $term_ids If set, generate relationships for these term ids.
	 */
	public function move_term_relationships( $term_ids = null ) {
		global $wpdb;

		// How deep do we need to join to get full hierarchy?
		$children       = _get_term_hierarchy( 'product_cat' );
		$max_depth      = $children ? max( array_map( 'sizeof', $children ) ) : 1;
		$term_ids_where = '';

		if ( is_array( $term_ids ) ) {
			$id_list        = implode( ',', array_map( 'intval', array_unique( array_filter( $term_ids ) ) ) );
			$term_ids_where = " AND tt.term_taxonomy_id IN ({$id_list}) "; // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
		}

		// Build query.
		$relationship_query = "
			INSERT IGNORE INTO {$wpdb->prefix}wc_product_category_lookup
				SELECT tr.object_id as product_id, tr.term_taxonomy_id as category_id
				FROM {$wpdb->term_relationships} as tr
				LEFT JOIN {$wpdb->term_taxonomy} as tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
				WHERE tt.taxonomy = 'product_cat'
				{$term_ids_where}
			UNION
			SELECT tr.object_id as product_id, tt.parent as category_id
				FROM {$wpdb->term_relationships} as tr
				LEFT JOIN {$wpdb->term_taxonomy} as tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
				WHERE tt.taxonomy = 'product_cat'
				AND tt.parent > 0
				{$term_ids_where}
		";

		if ( $max_depth > 1 ) {
			$joins = "LEFT JOIN {$wpdb->term_taxonomy} as tt ON tr.term_taxonomy_id = tt.term_taxonomy_id";

			for ( $i = 1; $i <= $max_depth; $i ++ ) {
				$prev_tt = 'tt' . ( $i > 1 ? $i - 1 : '' );
				$this_tt = 'tt' . $i;

				$joins .= " LEFT JOIN {$wpdb->term_taxonomy} as {$this_tt} ON {$prev_tt}.parent = {$this_tt}.term_taxonomy_id ";

				$relationship_query .= "
					UNION
					SELECT tr.object_id, {$this_tt}.parent as category_id
						FROM {$wpdb->term_relationships} as tr
						{$joins}
						WHERE tt.taxonomy = 'product_cat'
						AND {$this_tt}.parent > 0
						{$term_ids_where}
				";
			}
		}
		$wpdb->query( $relationship_query ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Update relationships for a product.
	 *
	 * @param int $product_id Product to update.
	 */
	protected function update_product_relationships( $product_id ) {
		global $wpdb;

		if ( ! $product_id ) {
			return;
		}
		$category_ids = array();
		$term_ids     = wp_get_object_terms( $product_id, 'product_cat', array( 'fields' => 'ids' ) );

		foreach ( $term_ids as $term_id ) {
			$category_ids[] = $term_id;
			$category_ids   = array_merge( $category_ids, get_ancestors( $term_id, 'product_cat', 'taxonomy' ) );
		}

		$category_ids = array_map( 'intval', array_unique( array_filter( $category_ids ) ) );
		$inserts      = array();

		foreach ( $category_ids as $category_id ) {
			$inserts[] = $wpdb->prepare( '(%d,%d)', $product_id, $category_id );
		}

		$insert_query = implode( ',', $inserts );

		$wpdb->query( "INSERT IGNORE INTO {$wpdb->prefix}wc_product_category_lookup (product_id,category_id) VALUES {$insert_query}" );  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Store edits to categories.
	 *
	 * @param int $category_id Term ID being edited.
	 */
	public function edit_product_cat( $category_id ) {
		$category = get_term( $category_id, 'product_cat' );

		// Store the parent before the category is updated.
		$this->edited_product_cats[ $category_id ] = $category->parent;
	}

	/**
	 * Modify relationships for a product cat when it's parent is modified.
	 *
	 * @param int $category_id Term ID being edited.
	 */
	public function edited_product_cat( $category_id ) {
		global $wpdb;

		if ( ! isset( $this->edited_product_cats[ $category_id ] ) ) {
			return;
		}

		$category    = get_term( $category_id, 'product_cat' );
		$prev_parent = $this->edited_product_cats[ $category_id ];
		$new_parent  = $category->parent;

		// No edits - no need to modify relationships.
		if ( $prev_parent === $new_parent ) {
			unset( $this->edited_product_cats[ $category_id ] );
			return;
		}

		// Delete relationships for previous parent and current parent ancestors.
		$term_ids = array( $prev_parent, $new_parent );

		if ( $prev_parent > 0 ) {
			$term_ids = $term_ids + get_ancestors( $prev_parent, 'product_cat', 'taxonomy' );
		}

		if ( $new_parent > 0 ) {
			$term_ids = $term_ids + get_ancestors( $new_parent, 'product_cat', 'taxonomy' );
		}

		$term_ids = array_unique( array_filter( $term_ids ) );

		$this->delete_relationships( $term_ids );

		// Now the hierarchy was deleted, we need to re-insert relationships for the previous parent and current parent ancestors and descendents.
		$children   = _get_term_hierarchy( 'product_cat' );
		$insert_ids = $term_ids;

		foreach ( $term_ids as $term_id ) {
			if ( isset( $children[ $term_id ] ) ) {
				$insert_ids = array_merge( $insert_ids, $children[ $term_id ] );
			}
		}
		$this->move_term_relationships( $insert_ids );

		unset( $this->edited_product_cats[ $category_id ] );
	}

	/**
	 * Sync product on save.
	 *
	 * @param  int    $post_id Post ID being saved.
	 * @param  object $post Post object.
	 */
	public function sync_products( $post_id, $post ) {
		if ( ! in_array( $post->post_type, array( 'product', 'product_variation' ) ) ) {
			return;
		}
		$this->delete_relationships( null, array( $post_id ) );
		$this->update_product_relationships( $post_id );
	}
}

WC_Admin_Product_Category_Lookup::instance()->init();
