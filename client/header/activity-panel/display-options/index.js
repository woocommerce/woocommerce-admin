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

/**
 * Internal dependencies
 */
import DisplayIcon from './icons/display';
import SingleColumnIcon from './icons/single-column';
import TwoColumnsIcon from './icons/two-columns';

const LAYOUTS = [
	{
		value: 'one',
		label: (
			<Fragment>
				<SingleColumnIcon />
				{ __( 'Single column', 'woocommerce-admin' ) }
			</Fragment>
		),
	},
	{
		value: 'two',
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
			} }
		>
			{ () => (
				<MenuGroup label={ __( 'Layout', 'woocommerce-admin' ) }>
					<MenuItemsChoice
						choices={ LAYOUTS }
						onSelect={ ( newLayout ) => {
							updateUserPreferences( {
								homepage_layout: newLayout,
							} );
						} }
						value={ layout || 'two' }
					/>
				</MenuGroup>
			) }
		</DropdownMenu>
	);
};

export default DisplayOptions;
