/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { SplitButton } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import Header from 'header';

export default class Onboarding extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Onboarding', 'woocommerce-admin' ) ] } />
				<SplitButton
					isPrimary
					mainLabel={ __( 'Primary Button', 'woocommerce-admin' ) }
					menuLabel={ __( 'Select an action', 'woocommerce-admin' ) }
					onClick={ () => alert( __( 'Primary Main Action clicked', 'woocommerce-admin' ) ) }
					controls={ [
						{
							label: __( 'Up', 'woocommerce-admin' ),
							onClick: () => alert( __( 'Primary Up clicked', 'woocommerce-admin' ) ),
						},
						{
							label: __( 'Right', 'woocommerce-admin' ),
							onClick: () => alert( __( 'Primary Right clicked', 'woocommerce-admin' ) ),
						},
						{
							label: __( 'Down', 'woocommerce-admin' ),
							onClick: () => alert( __( 'Primary Down clicked', 'woocommerce-admin' ) ),
						},
						{
							label: __( 'Left', 'woocommerce-admin' ),
							onClick: () => alert( __( 'Primary Left clicked', 'woocommerce-admin' ) ),
						},
					] }
				/>
			</Fragment>
		);
	}
}
