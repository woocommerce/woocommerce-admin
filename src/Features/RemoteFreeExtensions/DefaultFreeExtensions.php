<?php
/**
 * Gets a list of fallback methods if remote fetching is disabled.
 */

namespace Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks;

/**
 * Default Free Extensions
 */
class DefaultFreeExtensions {

	/**
	 * Get default specs.
	 *
	 * @return array Default specs.
	 */
	public static function get_all() {
		return [
			[
				'key'     => 'basics',
				'title'   => __( 'Get the basics', 'woocommerce-admin' ),
				'plugins' => [
					[
						'key'         => 'woocommerce-payments',
						'description' => sprintf(
							/* translators: %s = product URL */
							__( 'Accept credit cards with <a href="%s" target="_blank">WooCommerce Payments</a>', 'woocommerce-admin' ),
							'https://woocommerce.com/products/woocommerce-payments'
						),
						'is_visible'  => [
							[
								'type'     => 'or',
								'operands' => [
									[
										'type'      => 'base_location_country',
										'value'     => 'US',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'PR',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'AU',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'CA',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'DE',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'ES',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'FR',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'GB',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'IE',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'IT',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'NZ',
										'operation' => '=',
									],
								],
							],
							[
								'type'         => 'option',
								'transformers' => [
									[
										'use'       => 'dot_notation',
										'arguments' => [
											'path' => 'industry',
										],
									],
									[
										'use'       => 'array_column',
										'arguments' => [
											'key' => 'slug',
										],
									],
									[
										'use'       => 'array_search',
										'arguments' => [
											'value' => 'cbd-other-hemp-derived-products',
										],
									],
								],
								'option_name'  => 'woocommerce_onboarding_profile',
								'value'        => 'cbd-other-hemp-derived-products',
								'default'      => '',
								'operation'    => '!=',
							],
						],
					],
					[
						'key'         => 'woocommerce-services:shipping',
						'description' => sprintf(
							/* translators: %s = product URL */
							__( 'Print shipping labels with <a href="%s" target="_blank">WooCommerce Shipping</a>', 'woocommerce-admin' ),
							'https://woocommerce.com/products/shipping'
						),
						'is_visible'  => [
							[
								'type'      => 'base_location_country',
								'value'     => 'US',
								'operation' => '=',
							],
							[
								'type'    => 'not',
								'operand' => [
									[
										'type'    => 'plugins_activated',
										'plugins' => [ 'woocommerce-services' ],
									],
								],
							],
							[
								'type'     => 'or',
								'operands' => [
									[
										[
											'type'         => 'option',
											'transformers' => [
												[
													'use' => 'dot_notation',
													'arguments' => [
														'path' => 'product_types',
													],
												],
												[
													'use' => 'count',
												],
											],
											'option_name'  => 'woocommerce_onboarding_profile',
											'value'        => 1,
											'default'      => '',
											'operation'    => '!=',
										],
									],
									[
										[
											'type'         => 'option',
											'transformers' => [
												[
													'use' => 'dot_notation',
													'arguments' => [
														'path' => 'product_types.0',
													],
												],
											],
											'option_name'  => 'woocommerce_onboarding_profile',
											'value'        => 'downloads',
											'default'      => '',
											'operation'    => '!=',
										],
									],
								],
							],
						],
					],
					[
						'key'         => 'woocommerce-services:tax',
						'description' => sprintf(
							/* translators: %s = product URL */
							__( 'Get automated sales tax with <a href="%s" target="_blank">WooCommerce Tax</a>', 'woocommerce-admin' ),
							'https://woocommerce.com/products/tax'
						),
						'is_visible'  => [
							[
								'type'     => 'or',
								'operands' => [
									[
										'type'      => 'base_location_country',
										'value'     => 'US',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'FR',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'GB',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'DE',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'CA',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'AU',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'GR',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'BE',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'PT',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'DK',
										'operation' => '=',
									],
									[
										'type'      => 'base_location_country',
										'value'     => 'SE',
										'operation' => '=',
									],
								],
							],
							[
								'type'    => 'not',
								'operand' => [
									[
										'type'    => 'plugins_activated',
										'plugins' => [ 'woocommerce-services' ],
									],
								],
							],
						],
					],
					[
						'key'         => 'jetpack',
						'description' => sprintf(
							/* translators: %s = product URL */
							__( 'Enhance speed and security with <a href="%s" target="_blank">Jetpack</a>', 'woocommerce-admin' ),
							'https://woocommerce.com/products/jetpack'
						),
						'is_visible'  => [
							[
								'type'    => 'not',
								'operand' => [
									[
										'type'    => 'plugins_activated',
										'plugins' => [ 'jetpack' ],
									],
								],
							],
						],
					],
					[
						'key'         => 'mailpoet',
						'name'        => __( 'MailPoet', 'woocommerce-admin' ),
						'description' => __( 'Level up your email marketing with {{link}}MailPoet{{/link}}', 'woocommerce-admin' ),
						'description' => sprintf(
							/* translators: %s = product URL */
							__( 'Level up your email marketing with <a href="%s" target="_blank">MailPoet</a>', 'woocommerce-admin' ),
							'https://woocommerce.com/products/mailpoet'
						),
						'image_url'   => plugins_url( 'images/mailpoet.png', WCCOM_OBW_FREE_EXTENSIONS_PLUGIN_FILE ),
						'manage_url'  => 'admin.php?page=mailpoet-newsletters',
					],
				],
			],
		];
	}
}
