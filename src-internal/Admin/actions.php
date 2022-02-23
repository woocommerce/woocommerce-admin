<?php

use Automattic\WooCommerce\Admin\CategoryLookup;
use Automattic\WooCommerce\Admin\Events;

return [
	'edit_product_cat' => [
		[CategoryLookup::class, 'before_edit', 99]
	],
	'generate_category_lookup_table' => [
		[CategoryLookup::class, 'regenerate']
	],
	'edited_product_cat' => [
		[CategoryLookup::class, 'on_edit', 99]
	],
	'created_product_cat' => [
		[CategoryLookup::class, 'on_create', 99]
	],
	'wc_admin_daily' => [
		[ Events::class, 'do_wc_admin_daily']
	]
];
