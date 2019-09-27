<?php
/**
 * Admin\API\Reports\SqlQuery class file.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\API\Reports;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Admin\API\Reports\SqlQuery: Common parent for manipulating SQL query clauses.
 */
class SqlQuery {
	/**
	 * List of SQL clauses.
	 *
	 * @var array
	 */
	private $sql_clauses = array(
		'select'     => array(),
		'from'       => array(),
		'outer_from' => array(),
		'where'      => array(),
		'where_time' => array(),
		'limit'      => array(),
		'order_by'   => array(),
	);
	/**
	 * Data store context used to pass to filters.
	 *
	 * @var string
	 */
	private $context = '';

	/**
	 * Add a SQL clause to be included when get_data is called.
	 *
	 * @param string $type   (select|from|outer_from|where|where_time|order_by|limit).
	 * @param string $clause SQL clause.
	 */
	protected function add_sql_clause( $type, $clause ) {
		if ( isset( $this->sql_clauses[ $type ] ) && ! empty( $clause ) ) {
			$this->sql_clauses[ $type ][] = $clause;
		}
	}

	/**
	 * Get SQL clause by type.
	 *
	 * @param string $type Clause type (select|from|outer_from|where|where_time|order_by|limit).
	 *
	 * @return string SQL clause.
	 */
	protected function get_sql_clause( $type ) {
		if ( ! isset( $this->sql_clauses[ $type ] ) ) {
			return '';
		}

		/**
		 * Filter SQL clauses by type and context.
		 *
		 * @param array  $clauses The original arguments for the request.
		 * @param string $context The data store context.
		 */
		$clauses = apply_filters( "wc_admin_clauses_{$type}", $this->sql_clauses[ $type ], $this->context );
		/**
		 * Filter SQL clauses by type and context.
		 *
		 * @param array  $clauses The original arguments for the request.
		 */
		$clauses = apply_filters( "wc_admin_clauses_{$type}_{$this->context}", $clauses );
		return implode( ' ', $clauses );
	}

	/**
	 * Clear SQL clauses by type.
	 *
	 * @param string|array $types Clause type (select|from|outer_from|where|where_time|order_by|limit).
	 */
	protected function clear_sql_clause( $types ) {
		foreach ( (array) $types as $type ) {
			if ( isset( $this->sql_clauses[ $type ] ) ) {
				$this->sql_clauses[ $type ] = array();
			}
		}
	}
}