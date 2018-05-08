<?php
// Set of helpers to generate various JS primitives/components on the back end

/*
Example:

$card   = new WooCommerce_Component_Card( 'My Test Card' );
$button = new WooCommerce_Component_Button( 'http://woocommerce.com', 'WooCommerce' );
$card->add( $button );

// Pass to a hook
$card->output();
*/
class WooCommerce_Component_Base {
	protected $type;
	protected $props = array();
	protected $children = array();

	public function add( $child ) {
		$this->children[] = $child->get_struc();
	}

	private function get_struc() {
		return array(
			'type'     => $this->type,
			'props'    => $this->props,
			'children' => $this->children,
		);
	}

	public function output() {
		return( array(
			'component' => $this->get_struc(),
		) );
	}
}