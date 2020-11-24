/**
 * External dependencies
 */
import { Button, CheckboxControl, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import interpolateComponents from 'interpolate-components';
import { recordEvent } from '@woocommerce/tracks';
// This is an a/b test flow where we bundle all the extensions
// under a single checkbox.

// Segmentation for this flow is: US, ! CBD, TODO there was some other condition
export const ExtensionsBundle = ( { getInputProps } ) => {
	const [ isPopoverVisible, setPopoverIsVisible ] = useState( false );

	return (
		<div className="woocommerce-business-extensions">
			<label htmlFor="woocommerce-business-extensions__checkbox">
				<CheckboxControl
					id="woocommerce-business-extensions__checkbox"
					{ ...getInputProps( 'install_extensions' ) }
				/>
				<span className="woocommerce-business-extensions__label-text">
					{ interpolateComponents( {
						mixedString: __(
							'Install recommended {{strong}}free{{/strong}} business features',
							'woocommerce-admin'
						),
						components: {
							strong: <strong />,
						},
					} ) }
					<span className="woocommerce-business-extensions__label-subtext">
						{ __( 'Requires an account', 'woocommerce-admin' ) }
					</span>
				</span>
			</label>

			<div className="woocommerce-business-extensions__popover-wrapper">
				<Button
					isTertiary
					label={ __(
						'Learn more about recommended free business features',
						'woocommerce-admin'
					) }
					onClick={ () => {
						recordEvent(
							'storeprofiler_store_business_details_popover'
						);
						setPopoverIsVisible( true );
					} }
				>
					<i className="material-icons-outlined" aria-hidden="true">
						info
					</i>
				</Button>
				{ isPopoverVisible && (
					<Popover
						className="woocommerce-business-extensions__popover"
						focusOnMount="container"
						position="top center"
						onClose={ () => setPopoverIsVisible( false ) }
					>
						<div className="woocommerce-business-extensions__benefits">
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Manage your store on the go with the WooCommerce mobile app',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Accept credit cards with WooCommerce Payments',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Speed & security enhancements',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Automatic sales taxes',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Market on Facebook',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Contact customers with Mailchimp',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Drive sales with Google Ads',
									'woocommerce-admin'
								) }
							</div>
							<div className="woocommerce-business-extensions__benefit">
								<i
									className="material-icons-outlined"
									aria-hidden="true"
								>
									check
								</i>
								{ __(
									'Print shipping labels at home',
									'woocommerce-admin'
								) }
							</div>
						</div>
					</Popover>
				) }
			</div>
		</div>
	);
};
