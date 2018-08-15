/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import Gridicon from 'gridicons';
import { ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { IconMenu, MenuItem, MenuTitle } from 'components/icon-menu';

export default class ScreenSettings extends Component {
	render() {
		const { blocks, blockStates, onScreenSettingToggle } = this.props;
		return (
			<div className="woocommerce-dashboard__screen-settings">
				<IconMenu
					className="woocommerce-dashboard__screen-settings-menu"
					icon={ <Gridicon icon="computer" /> }
					label={ __( 'Screen settings', 'wc-admin' ) }
					showLabel
					position="top center"
				>
					<MenuTitle>{ __( 'Choose which overviews to display:', 'wc-admin' ) }</MenuTitle>
					{ blocks.map( block => {
						return (
							<Fragment key={ block.id }>
								<MenuItem onInvoke={ onScreenSettingToggle( block.id ) }>
									<ToggleControl
										label={ block.label }
										checked={ blockStates[ block.id ] }
										onChange={ onScreenSettingToggle( block.id ) }
									/>
								</MenuItem>
							</Fragment>
						);
					} ) }
				</IconMenu>
			</div>
		);
	}
}
