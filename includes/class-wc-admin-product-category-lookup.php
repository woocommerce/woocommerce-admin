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

		$inserts      = array();
		$parent_terms = get_terms(
			'product_cat',
			array(
				'parent'     => 0,
				'hide_empty' => false,
				'fields'     => 'ids',
			)
		);

		foreach ( $parent_terms as $parent_term ) {
			$inserts[] = "({$parent_term}, {$parent_term}, 0)";
		}

		$terms = _get_term_hierarchy( 'product_cat' );

		foreach ( $terms as $parent_id => $descendants ) {
			foreach ( $descendants as $descendant ) {
				$inserts[] = "({$parent_id},{$descendant},0)";
				$inserts[] = "({$descendant},{$descendant},0)";
			}
		}

		$insert_string = implode( ',', $inserts );

		$wpdb->query( "INSERT IGNORE INTO $wpdb->wc_product_category_lookup (category_id,descendant_id,depth) VALUES {$insert_string}" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
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
		$ancestor_descendants   = $category->descendants;
		$ancestor_descendants[] = $category_id;
		$ancestors              = $this->get_ancestors( $category_id );

		foreach ( $ancestors as $ancestor ) {
			$this->delete_descendants( $ancestor, $ancestor_descendants );
		}

		// Add decendents to the new parent and it's ancestors.
		$ancestors   = $this->get_ancestors( $new_parent );
		$ancestors[] = $new_parent;

		foreach ( $ancestors as $ancestor ) {
			$this->update_descendants( $ancestor, $ancestor_descendants );
		}

		// Finally, update category depth and parent.
		$this->update_category( $new_parent, count( $ancestors ) );
	}

	/**
	 * Update a category parent and depth.
	 *
	 * @param int $category_id Target category.
	 * @param int $parent_id New parent.
	 * @param int $depth New depth.
	 */
	protected function update_category( $category_id, $parent_id, $depth ) {
		global $wpdb;

		$wpdb->replace(
			$wpdb->wc_product_category_parent_lookup,
			array(
				'category_id' => $category_id,
				'parent_id'   => $parent_id,
				'depth'       => $depth,
			)
		);
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
			$inserts[] = "({$category_id}, {$descendant})";
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
			$where  .= " AND category_id IN ({$id_list}) ";
		}

		$wpdb->query( "DELETE FROM $wpdb->wc_product_category_lookup WHERE {$where}" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared
	}

	/**
	 * Get a category row from the lookup table.
	 *
	 * TODO: add caching. should the parent_id and depth be normalised to another table? It is the same for all rows.
	 *
	 * @param int $category_id Target category.
	 * @return object|null Null if the row does not exist.
	 */
	protected function get_category( $category_id ) {
		global $wpdb;

		$row = $wpdb->get_row( $wpdb->prepare( "SELECT parent_id, depth, depth FROM $wpdb->wc_product_category_parent_lookup WHERE category_id = %d", $category_id ) );

		if ( ! $row ) {
			return null;
		}

		$row->descendants = $this->get_descendants( $category_id );

		return $row;
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

		$category = $this->get_category( $category_id );

		// If depth is 0 or there is no parent ID, there are no ancestors.
		if ( is_null( $category ) || ! $category->depth || ! $category->parent_id ) {
			return array();
		}

		// Generate query.
		$ancestors = $wpdb->get_row( $this->get_ancestors_query( $category->parent_id, $category->depth ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.PreparedSQL.NotPrepared

		return wp_parse_id_list( $ancestors );
	}

	/**
	 * Joins the lookup table to itself based on depth so the full hierarchy can be found.
	 *
	 * @param int     $category_id The category ID to lookup.
	 * @param integer $depth Depth of the term.
	 * @return string
	 */
	protected function get_ancestors_query( $category_id, $depth = 0 ) {
		global $wpdb;

		$select = array(
			'lookup.category_id',
		);
		$joins  = array();

		for ( $i = 1; $i <= $depth; $i ++ ) {
			$alias      = 'lookup' . $i;
			$prev_alias = 'lookup' . ( $i > 1 ? $i - 1 : '' );
			$select[]   = "{$alias}.category_id";
			$joins[]    = "LEFT JOIN $wpdb->wc_product_category_parent_lookup {$alias} ON {$prev_alias}.parent_id = {$alias}.category_id";
		}

		$select_string = implode( ',', $select );
		$join_string   = implode( ' ', $joins );

		// phpcs:disable WordPress.DB.PreparedSQL.NotPrepared
		return $wpdb->prepare(
			"
			SELECT {$select_string} FROM $wpdb->wc_product_category_parent_lookup lookup {$join_string} WHERE lookup.category_id = %d
			",
			$category->parent_id
		);
		// phpcs:enable WordPress.DB.PreparedSQL.NotPrepared
	}
}

WC_Admin_Product_Category_Lookup::instance()->init();
