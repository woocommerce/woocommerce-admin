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
		'right_join' => array(),
		'where'      => array(),
		'where_time' => array(),
		'group_by'   => array(),
		'having'     => array(),
		'limit'      => array(),
		'order_by'   => array(),
	);
	/**
	 * Data store context used to pass to filters.
	 *
	 * @var string
	 */
	protected static $context;

	/**
	 * Constructor.
	 *
	 * @param string $context Optional context passed to filters. Default empty string.
	 */
	public function __construct( $context = '' ) {
		self::$context = $context;
	}

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

		$context = self::$context;
		/**
		 * Filter SQL clauses by type and context.
		 *
		 * @param array  $clauses The original arguments for the request.
		 * @param string $context The data store context.
		 */
		$clauses = apply_filters( "wc_admin_clauses_{$type}", $this->sql_clauses[ $type ], $context );
		/**
		 * Filter SQL clauses by type and context.
		 *
		 * @param array  $clauses The original arguments for the request.
		 */
		$clauses = apply_filters( "wc_admin_clauses_{$type}_{$context}", $clauses );
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

	/**
	 * Replace strings within SQL clauses by type.
	 *
	 * @param string $type    Clause type (select|from|outer_from|where|where_time|order_by|limit).
	 * @param string $search  String to search for.
	 * @param string $replace Replacement string.
	 */
	protected function str_replace_clause( $type, $search, $replace ) {
		if ( isset( $this->sql_clauses[ $type ] ) ) {
			foreach ( $this->sql_clauses[ $type ] as $key => $sql ) {
				$this->sql_clauses[ $type ][ $key ] = str_replace( $search, $replace, $sql );
			}
		}
	}

	/**
	 * Get the full SQL statement.
	 *
	 * @return string
	 */
	protected function get_statement() {
		// Ensure the conditionally added clauses are always filtered.
		$group_by = $this->get_sql_clause( 'group_by' );
		$having   = $this->get_sql_clause( 'having' );
		$order_by = $this->get_sql_clause( 'order_by' );

		$statement = "
			SELECT
				{$this->get_sql_clause( 'select' )}
			FROM
				{$this->get_sql_clause( 'from' )}
				{$this->get_sql_clause( 'right_join' )}
				{$this->get_sql_clause( 'outer_from' )}
			WHERE
				1=1
				{$this->get_sql_clause( 'where_time' )}
				{$this->get_sql_clause( 'where' )}
		";

		if ( ! empty( $group_by ) ) {
			$statement .= "
				GROUP BY
					{$group_by}
			";
			if ( ! empty( $having ) ) {
				$statement .= "
					HAVING
						{$having}
				";
			}
		}

		if ( ! empty( $order_by ) ) {
			$statement .= "
				ORDER BY
					{$order_by}
			";
		}

		return $statement . $this->get_sql_clause( 'limit' );
	}
}
