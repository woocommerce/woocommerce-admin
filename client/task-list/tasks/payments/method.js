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
								markConfigured( method.key );
							} }
						/>
					),
				},
			] }
		/>
	);
};

const MethodConnectStep = ( { method, onFinish } ) => {
	const settingsLink = (
		<Link
			href={ `${ adminUrl }admin.php?page=wc-settings&tab=checkout&section=${ method.key }` }
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
			method.name
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
