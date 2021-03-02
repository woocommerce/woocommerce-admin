/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { ADMIN_URL as adminUrl } from '@woocommerce/wc-admin-settings';
import { Stepper, Link } from '@woocommerce/components';
import { Button } from '@wordpress/components';
import interpolateComponents from 'interpolate-components';

export const Method = ( { installStep, markConfigured, method } ) => {
	return (
		<Stepper
			isVertical
			isPending={ ! installStep.isComplete }
			currentStep={ installStep.isComplete ? 'connect' : 'install' }
			steps={ [
				installStep,
				{
					key: 'connect',
					label: sprintf(
						__( 'Connect your %s account', 'woocommerce-admin' ),
						method.name
					),
					content: (
						<MethodConnectStep
							method={ method }
							onFinish={ () => {
								markConfigured( 'test-payment-method' );
							} }
						/>
					),
				},
			] }
		/>
	);
};

const MethodConnectStep = ( { method, onFinish } ) => {
	const { key, name } = method;

	const settingsLink = (
		<Link
			href={ `${ adminUrl }admin.php?page=wc-settings&tab=${ key }` }
			target="_blank"
			type="external"
		/>
	);

	const configureText = interpolateComponents( {
		mixedString: sprintf(
			__(
				'Finish configuration in {{settingsLink}}%s settings.{{/settingsLink}}',
				'woocommerce-admin'
			),
			name
		),
		components: {
			settingsLink,
		},
	} );

	return (
		<>
			<p>{ configureText }</p>
			<Button isPrimary onClick={ onFinish }>
				{ __( 'Continue', 'woocommerce-admin' ) }
			</Button>
		</>
	);
};
