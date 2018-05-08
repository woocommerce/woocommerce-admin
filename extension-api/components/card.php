<?php
/**
 * Simple card component for rendering a new widget.
 */
class WooCommerce_Component_Card extends WooCommerce_Component_Base {
	public function __construct( $title, $options = array() ) {
		$this->type = 'card';
		$this->props = array_merge( array(
			'title' => $title,
		), $options );
	}
}
