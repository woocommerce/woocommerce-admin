/**
 * External dependencies
 */
import {
	DropdownMenu,
	MenuGroup,
	MenuItemsChoice,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useUserPreferences } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import DisplayIcon from './icons/display';
import SingleColumnIcon from './icons/single-column';
import TwoColumnsIcon from './icons/two-columns';

const LAYOUTS = [
	{
		value: 'single_column',
		label: (
			<Fragment>
				<SingleColumnIcon />
				{ __( 'Single column', 'woocommerce-admin' ) }
			</Fragment>
		),
	},
	{
		value: 'two_columns',
		label: (
			<Fragment>
				<TwoColumnsIcon />
				{ __( 'Two columns', 'woocommerce-admin' ) }
			</Fragment>
		),
	},
];

const DisplayOptions = () => {
	const {
		updateUserPreferences,
		homepage_layout: layout,
	} = useUserPreferences();
	return (
		<DropdownMenu
			className="woocommerce-layout__activity-panel-tabs"
			icon={ <DisplayIcon /> }
			/* translators: button label text should, if possible, be under 16 characters. */
			label={ __( 'Display', 'woocommerce-admin' ) }
			toggleProps={ {
				className: 'woocommerce-layout__activity-panel-tab',
				onClick: () => recordEvent( 'homescreen_display_click' ),
			} }
			popoverProps={ {
				className: 'woocommerce-layout__activity-panel-popover',
			} }
		>
			{ () => (
				<MenuGroup
					className="woocommerce-layout__homescreen-display-options"
					label={ __( 'Layout', 'woocommerce-admin' ) }
				>
					<MenuItemsChoice
						choices={ LAYOUTS }
						onSelect={ ( newLayout ) => {
							updateUserPreferences( {
								homepage_layout: newLayout,
							} );
							recordEvent( 'homescreen_display_option', {
								display_option: newLayout,
							} );
						} }
						value={ layout || 'two_columns' }
					/>
				</MenuGroup>
			) }
		</DropdownMenu>
	);
};

export default DisplayOptions;
