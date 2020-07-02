/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { __experimentalText as Text } from '@wordpress/components';
import { Icon, chevronRight, page } from '@wordpress/icons';
// import { partial } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';
import { List, Section } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { recordEvent } from 'lib/tracks';
// import './style.scss';

function getProductItems() {
	return [
		{
			title: __( 'Adding and Managing Products', 'woocommerce-admin' ),
			link: 'https://docs.woocommerce.com/document/managing-products/?utm_source=help_panel',
		},
		{
			title: __( 'Import products using the CSV Importer and Exporter', 'woocommerce-admin' ),
			link: 'https://docs.woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel',
		},
		{
			title: __( 'Migrate products using Cart2Cart', 'woocommerce-admin' ),
			link: 'https://woocommerce.com/products/cart2cart/?utm_source=help_panel',
		},
		{
			title: __( 'Learn more about setting up products', 'woocommerce-admin' ),
			link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel',
		},
	];
}

function getItems( taskName ) {
	switch ( taskName ) {
		case 'products':
		default:
			return getProductItems();
	}
}

// function handleOnItemClick( props, event ) {
// 	const a = event.currentTarget;

// 	props.recordEvent( 'help_panel_click', {
// 		task_name: 'GET TASK NAME HERE',
// 		link: a.href,
// 	} );

// 	if ( typeof props.onItemClick !== 'function' ) {
// 		return;
// 	}

// 	if ( ! props.onItemClick( listItemTag ) ) {
// 		event.preventDefault();
// 		return false;
// 	}
// }

function getListItems( props ) {
	const { taskName } = props;

	return getItems( taskName ).map( ( item ) => ( {
		title: <Text as="div" variant="button">{ item.title }</Text>,
		before: <Icon icon={ page } />,
		after: <Icon icon={ chevronRight } />,
		linkType: 'external',
		target: '_blank',
		href: item.link,
		// onClick: partial( handleOnItemClick, props ),
	} ) );
}

const HelpPanel = ( props ) => {
	const listItems = getListItems( props );

	return (
		<Section>
			<List
				items={ listItems }
				className="woocommerce-quick-links__list"
			/>
		</Section>
	);
};

HelpPanel.defaultProps = {
	getSetting,
	recordEvent,
	taskName: 'products',
};

export default HelpPanel;
