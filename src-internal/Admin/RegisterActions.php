<?php


namespace Automattic\WooCommerce\Internal\Admin;

use Automattic\WooCommerce\Admin\CategoryLookup;
use Automattic\WooCommerce\Admin\Events;
use Automattic\WooCommerce\Vendor\League\Container\Container;


class RegisterActions {
	private $actions;
	private $container;
	public function __construct( $actions ) {
		$this->actions = $actions;

		// Temp test code;
		$container = new Container();
		$container->add(
			CategoryLookup::class,
			function() {
				return CategoryLookup::instance();
			}
		);
		$container->add(
			Events::class,
			function() {
				return Events::instance();
			}
		);
		$this->container = $container;
	}

	public function register() {
		foreach ( $this->actions as $action_name => $callbacks ) {
			foreach ( $callbacks as $callback ) {
				add_action(
					$action_name,
					function() use ( $callback ) {
						$class_instance = $this->container->get( $callback[0] );
						call_user_func_array( [ $class_instance, $callback[1] ], func_get_args() );
					},
					$callback[2] ?? 10
				);
			}
		}
	}
}
