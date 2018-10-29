<?php
/**
 * Reports Revenue Stats REST API Test
 *
 * @package WooCommerce\Tests\API
 * @since 3.5.0
 */
class WC_Tests_API_Reports_Revenue_Stats extends WC_REST_Unit_Test_Case {

	/**
	 * Endpoints.
	 *
	 * @var string
	 */
	protected $endpoint = '/wc/v3/reports/revenue/stats';

	protected $orders = array();

	/**
	 * Setup test reports revenue data.
	 *
	 * @since 3.5.0
	 */
	public function setUp() {
		parent::setUp();

		$this->user = $this->factory->user->create(
			array(
				'role' => 'administrator',
			)
		);
	}

	/**
	 * Test route registration.
	 *
	 * @since 3.5.0
	 */
	public function test_register_routes() {
		$routes = $this->server->get_routes();

		$this->assertArrayHasKey( $this->endpoint, $routes );
	}

	/**
	 * Test getting reports.
	 *
	 * @since 3.5.0
	 */
	public function test_get_reports() {
		wp_set_current_user( $this->user );

		$request  = new WP_REST_Request( 'GET', $this->endpoint );
		$response = $this->server->dispatch( $request );
		$data     = $response->get_data();

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 2, count( $data ) );

		$now        = new DateTime();
		$start_date = WC_Admin_Reports_Interval::next_week_start( $now, true );
		$ts         = $start_date->format( 'U' );
		$ts++;
		$start_date->setTimestamp( $ts );

		// These two fields are based on now(), so don't guess those.
		unset( $data['intervals'][0]['date_end'] );
		unset( $data['intervals'][0]['date_end_gmt'] );

		$this->assertEquals(
			array(
				'totals'    => array(
					'orders_count'   => 0,
					'num_items_sold' => 0,
					'gross_revenue'  => 0.0,
					'coupons'        => 0.0,
					'refunds'        => 0.0,
					'taxes'          => 0.0,
					'shipping'       => 0.0,
					'net_revenue'    => 0.0,
				),
				'intervals' => array(
					array(
						'interval'       => $now->format( 'o-W' ),
						'date_start'     => $start_date->format( WC_Admin_Reports_Interval::$sql_datetime_format ),
						'date_start_gmt' => $start_date->format( WC_Admin_Reports_Interval::$sql_datetime_format ),
						'subtotals'      => (object) array(
							'orders_count'   => 0,
							'num_items_sold' => 0,
							'gross_revenue'  => 0.0,
							'coupons'        => 0.0,
							'refunds'        => 0.0,
							'taxes'          => 0.0,
							'shipping'       => 0.0,
							'net_revenue'    => 0.0,
						),
					),
				),
			),
			$data
		);
	}

	/**
	 * Test getting reports without valid permissions.
	 *
	 * @since 3.5.0
	 */
	public function test_get_reports_without_permission() {
		wp_set_current_user( 0 );
		$response = $this->server->dispatch( new WP_REST_Request( 'GET', $this->endpoint ) );
		$this->assertEquals( 401, $response->get_status() );
	}

	/**
	 * Test reports schema.
	 *
	 * @since 3.5.0
	 */
	public function test_reports_schema() {
		wp_set_current_user( $this->user );

		$request    = new WP_REST_Request( 'OPTIONS', $this->endpoint );
		$response   = $this->server->dispatch( $request );
		$data       = $response->get_data();
		$properties = $data['schema']['properties'];

		$this->assertEquals( 2, count( $properties ) );
		$this->assertArrayHasKey( 'totals', $properties );
		$this->assertArrayHasKey( 'intervals', $properties );

		$totals = $properties['totals']['properties'];
		$this->assertEquals( 7, count( $totals ) );
		$this->assertArrayHasKey( 'gross_revenue', $totals );
		$this->assertArrayHasKey( 'net_revenue', $totals );
		$this->assertArrayHasKey( 'coupons', $totals );
		$this->assertArrayHasKey( 'shipping', $totals );
		$this->assertArrayHasKey( 'taxes', $totals );
		$this->assertArrayHasKey( 'refunds', $totals );
		$this->assertArrayHasKey( 'orders_count', $totals );

		$intervals = $properties['intervals']['items']['properties'];
		$this->assertEquals( 6, count( $intervals ) );
		$this->assertArrayHasKey( 'interval', $intervals );
		$this->assertArrayHasKey( 'date_start', $intervals );
		$this->assertArrayHasKey( 'date_start_gmt', $intervals );
		$this->assertArrayHasKey( 'date_end', $intervals );
		$this->assertArrayHasKey( 'date_end_gmt', $intervals );
		$this->assertArrayHasKey( 'subtotals', $intervals );

		$subtotals = $properties['intervals']['items']['properties']['subtotals']['properties'];
		$this->assertEquals( 7, count( $subtotals ) );
		$this->assertArrayHasKey( 'gross_revenue', $subtotals );
		$this->assertArrayHasKey( 'net_revenue', $subtotals );
		$this->assertArrayHasKey( 'coupons', $subtotals );
		$this->assertArrayHasKey( 'shipping', $subtotals );
		$this->assertArrayHasKey( 'taxes', $subtotals );
		$this->assertArrayHasKey( 'refunds', $subtotals );
		$this->assertArrayHasKey( 'orders_count', $subtotals );
	}
}
