<?php
/**
 * Product Attributes REST API Test
 *
 * @package WooCommerce\Admin\Tests\API
 */

/**
 * Class WC_Tests_API_Product_Attributes
 */
class WC_Tests_API_Product_Attributes extends WC_REST_Unit_Test_Case {

	/**
	 * Endpoints.
	 *
	 * @var string
	 */
	protected $endpoint = '/wc-analytics/products/attributes';

	/**
	 * Setup test user.
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
	 * Setup test product attributes data.
	 */
	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();

		// Use the test helper to populate some global attributes.
		$product    = \WC_Helper_Product::create_variation_product();
		$attributes = $product->get_attributes();

		// Add a custom attribute.
		$custom_attr = new WC_Product_Attribute();
		$custom_attr->set_name( 'Numeric Size' );
		$custom_attr->set_options( array( '1', '2', '3', '4', '5' ) );
		$custom_attr->set_visible( true );
		$custom_attr->set_variation( true );
		$attributes[] = $custom_attr;

		$product->set_attributes( $attributes );
		$product->save();
	}

	/**
	 * Test route registration.
	 */
	public function test_register_routes() {
		$routes = $this->server->get_routes();

		$this->assertArrayHasKey( $this->endpoint, $routes );
	}

	/**
	 * Test request without valid permissions.
	 */
	public function test_get_reports_without_permission() {
		wp_set_current_user( 0 );
		$response = $this->server->dispatch( new WP_REST_Request( 'GET', $this->endpoint ) );
		$this->assertEquals( 401, $response->get_status() );
	}

	/**
	 * Test schema.
	 */
	public function test_reports_schema() {
		wp_set_current_user( $this->user );

		$request    = new WP_REST_Request( 'OPTIONS', $this->endpoint );
		$response   = $this->server->dispatch( $request );
		$data       = $response->get_data();
		$properties = $data['schema']['properties'];

		$this->assertEquals( 6, count( $properties ) );
		$this->assertArrayHasKey( 'id', $properties );
		$this->assertEquals( array( 'integer', 'string' ), $properties['id']['type'] );
		$this->assertArrayHasKey( 'name', $properties );
		$this->assertArrayHasKey( 'slug', $properties );
		$this->assertArrayHasKey( 'type', $properties );
		$this->assertArrayHasKey( 'order_by', $properties );
		$this->assertArrayHasKey( 'has_archives', $properties );
	}

	/**
	 * Test our passthrough case to the wc/v3 endpoint.
	 */
	public function test_without_search() {
		wp_set_current_user( $this->user );

		$request    = new WP_REST_Request( 'GET', $this->endpoint );
		$response   = $this->server->dispatch( $request );
		$attributes = $response->get_data();

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 3, count( $attributes ) );

		// Ensure our custom attribute is not in the results (proof of core endpoint).
		$names = wp_list_pluck( $attributes, 'name' );
		$this->assertNotContains( 'Numeric Size', $names );
	}

	/**
	 * Test our search functionality.
	 */
	public function test_with_search() {
		wp_set_current_user( $this->user );

		$request = new WP_REST_Request( 'GET', $this->endpoint );
		$request->set_query_params(
			array(
				'search' => 'num',
			)
		);
		$response   = $this->server->dispatch( $request );
		$attributes = $response->get_data();

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 2, count( $attributes ) );

		// Results should include "number" and "Numeric Size".
		$names = wp_list_pluck( $attributes, 'name' );
		$this->assertContains( 'number', $names );
		$this->assertContains( 'Numeric Size', $names );
	}
}
