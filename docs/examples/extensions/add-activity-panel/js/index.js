/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import {
	ActivityPanelContent,
	ActivityPanelTab,
	H,
	Section,
} from '@woocommerce/components';

const AddActivityPanel = () => (
	<Fragment>
		<ActivityPanelTab name="example" title={ __( 'Hello!' ) } icon="status" unread />
		<ActivityPanelContent name="example" title={ __( 'Hello!' ) }>
			{ () => [
				<div className="woocommerce-layout__activity-panel-header">
					<H className="woocommerce-layout__activity-panel-header-title">{ __( 'Hello!' ) }</H>
				</div>,
				<Section>
					{ __( 'Use your plugin to render panel content here.' ) }
				</Section>,
			] }
		</ActivityPanelContent>
	</Fragment>
);

registerPlugin( 'add-activity-panel', { render: AddActivityPanel } );
