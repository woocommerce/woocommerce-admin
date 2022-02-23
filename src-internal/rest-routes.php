<?php

register_rest_route(
	$this->namespace,
	'products/attributes/(?P<slug>[a-z0-9_\-]+)',
	array(
		'args'   => array(
			'slug' => array(
				'description' => __( 'Slug identifier for the resource.', 'woocommerce-admin' ),
				'type'        => 'string',
			),
		),
		array(
			'methods'             => \WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_item_by_slug' ),
			'permission_callback' => array( $this, 'get_items_permissions_check' ),
		),
		'schema' => array( $this, 'get_public_item_schema' ),
	)
);
