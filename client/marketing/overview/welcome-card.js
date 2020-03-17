/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

class WelcomeCard extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isHidden: false,
		};

		this.hide = this.hide.bind( this );
	}

	hide() {
		this.setState( { isHidden: true } );
	}

	render() {
		const { isHidden } = this.state;

		if ( isHidden ) {
			return '';
		}

		return (
			<Card
				className="woocommerce-marketing-overview-welcome-card"
			>
				<IconButton
					icon="no-alt"
					label={ __( 'Hide', 'woocommerce-admin' ) }
					onClick={ this.hide }
					className="woocommerce-marketing-overview-welcome-card__hide-button"
				/>
				<h3>{ __( 'Grow your customer base and increase your sales with marketing tools built for WooCommerce.', 'woocommerce-admin' ) }</h3>

			</Card>
		)
	}
}

export default WelcomeCard;
