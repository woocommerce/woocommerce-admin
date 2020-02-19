/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
import interpolateComponents from 'interpolate-components';

/**
 * WooCommerce dependencies
 */
import { Link } from '@woocommerce/components';
import { ADMIN_URL } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { recordEvent } from 'lib/tracks';

export default class PayFast extends Component {
  constructor( props ) {
    super( props );
  }

  continue = () => {
    recordEvent( 'tasklist_payment_connect_method', {
      payment_method: 'payfast'
    } )
  }

  render() {
    const link = <Link
      href={ `${ ADMIN_URL }/admin.php?page=wc-settings&tab=checkout&section=wc_gateway_payfast` }
      target="_blank"
      type="external"
    />;
    const helpLink = <Link
      href="https://docs.woocommerce.com/document/payfast-payment-gateway/"
      target="_blank"
      type="external"
    />;
    const configureText = interpolateComponents( {
      mixedString: __(
        'PayFast can be configured under your {{link}}store settings{{/link}}. Figure out {{helpLink}}what you need{{/helpLink}}.',
        'woocommerce-admin'
      ),
      components: {
        link,
        helpLink,
      },
    } );

    return (
      <Fragment>
        <p>{ configureText }</p>
        <Button isPrimary isDefault onClick={ this.continue }>
					{ __( 'Continue', 'woocommerce-admin' ) }
				</Button>
      </Fragment>
    );
  }
}
