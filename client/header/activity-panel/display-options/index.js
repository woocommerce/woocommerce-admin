/**
 * External dependencies
 */
import {
	DropdownMenu,
	MenuGroup,
	MenuItem,
	MenuItemsChoice,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { check } from '@wordpress/icons';
import { useUserPreferences, OPTIONS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { DisplayIcon } from './icons/display';
import { SingleColumnIcon } from './icons/single-column';
import { TwoColumnsIcon } from './icons/two-columns';

const LAYOUTS = [
	{
		value: 'single_column',
		label: (
			<>
				<SingleColumnIcon />
				{ __( 'Single column', 'woocommerce-admin' ) }
			</>
		),
	},
	{
		value: 'two_columns',
		label: (
			<>
				<TwoColumnsIcon />
				{ __( 'Two columns', 'woocommerce-admin' ) }
			</>
		),
	},
];

export const DisplayOptions = () => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const displayOptions = useSelect( ( select ) => {
		const { getOption } = select( OPTIONS_STORE_NAME );
		return {
			defaultHomescreenLayout:
				getOption( 'woocommerce_default_homepage_layout' ) ||
				'single_column',
			showExtensionTaskList:
				getOption( 'woocommerce_extended_task_list_hidden' ) === 'no',
		};
	} );
	const { defaultHomescreenLayout, showExtensionTaskList } = displayOptions;
	const {
		updateUserPreferences,
		homepage_layout: layout,
	} = useUserPreferences();

	const toggleExtensionTaskList = () => {
		const newValue = ! showExtensionTaskList;

		recordEvent(
			newValue
				? 'wcadmin_extended_tasklist_show'
				: 'wcadmin_extended_tasklist_hide'
		);
		updateOptions( {
			woocommerce_extended_task_list_hidden: newValue ? 'no' : 'yes',
		} );
	};

	return (
		<DropdownMenu
			icon={ <DisplayIcon /> }
			/* translators: button label text should, if possible, be under 16 characters. */
			label={ __( 'Display options', 'woocommerce-admin' ) }
			toggleProps={ {
				className:
					'woocommerce-layout__activity-panel-tab display-options',
				onClick: () => recordEvent( 'homescreen_display_click' ),
			} }
			popoverProps={ {
				className: 'woocommerce-layout__activity-panel-popover',
			} }
		>
			{ ( { onClose } ) => (
				<>
					<MenuGroup
						className="woocommerce-layout__homescreen-display-options"
						label={ __( 'Display', 'woocommerce-admin' ) }
					>
						<MenuItem
							icon={ showExtensionTaskList && check }
							isSelected={ showExtensionTaskList }
							role="menuitemcheckbox"
							onClick={ toggleExtensionTaskList }
						>
							{ __(
								'Show things to do next',
								'woocommerce-admin'
							) }
						</MenuItem>
					</MenuGroup>
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
								onClose();
								recordEvent( 'homescreen_display_option', {
									display_option: newLayout,
								} );
							} }
							value={ layout || defaultHomescreenLayout }
						/>
					</MenuGroup>
				</>
			) }
		</DropdownMenu>
	);
};
