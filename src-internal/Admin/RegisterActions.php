<?php


namespace Automattic\WooCommerce\Internal\Admin;

use Automattic\WooCommerce\Admin\CategoryLookup;
use Automattic\WooCommerce\Admin\Events;
use Automattic\WooCommerce\Vendor\League\Container\Container;


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

/**
 * Register actions with a custom callback that utilizes DI container
 * to resolve the callback and call it.
 */
class RegisterActions {
	private $actions;
	private $container;
	public function __construct( $actions, Container $container ) {
		$this->actions = $actions;
		$this->container = $container;
	}

	public function register() {
		// Loop through each action.
		foreach ( $this->actions as $action_name => $callbacks ) {
			// and register action's callbacks.
			foreach ( $callbacks as $callback ) {
				add_action(
					$action_name,
					function() use ( $callback ) {
						$class_instance = $this->container->get( $callback[0] );
						call_user_func_array( [ $class_instance, $callback[1] ], func_get_args() );
					},
					$callback[2] ?? 10,
					$callback[3] ?? 1
				);
			}
		}
	}
}
