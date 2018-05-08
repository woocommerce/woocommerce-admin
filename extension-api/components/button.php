<?php
/**
 * Simple button component for rendering a button on the dashboard.
 */
class WooCommerce_Component_Button extends WooCommerce_Component_Base {
	public function __construct( $href, $label, $options = array() ) {
		$this->type = 'button';
		$this->props = array_merge( array(
			'href'  => $href,
			'label' => $label,
		), $options );
	}
}
