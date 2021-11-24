/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { EllipsisMenu, Link } from '@woocommerce/components';
import { VerticalCSSTransition } from '@woocommerce/experimental';
import { useState, useEffect } from '@wordpress/element';
import {
	PLUGINS_STORE_NAME,
	PAYMENT_GATEWAYS_STORE_NAME,
	WCDataSelector,
	PluginsStoreActions,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useDispatch, useSelect } from '@wordpress/data';
import { sanitize } from 'dompurify';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './payment-promotion-row.scss';

function sanitizeHTML( html: string ) {
	return {
		__html: sanitize( html, {
			ALLOWED_TAGS: [ 'a', 'img', 'br' ],
			ALLOWED_ATTR: [ 'href', 'src', 'class', 'alt', 'target' ],
		} ),
	};
}

type PaymentPromotionRowProps = {
	paymentMethod: {
		gatewayId: string;
		pluginSlug: string;
		url: string;
	};
	title: string;
	columns: {
		className: string;
		html: string;
		width: string;
	}[];
	subTitleContent?: string;
};

export const PaymentPromotionRow: React.FC< PaymentPromotionRowProps > = ( {
	paymentMethod,
	title,
	subTitleContent,
	columns,
} ) => {
	const { gatewayId, pluginSlug, url } = paymentMethod;
	const [ installing, setInstalling ] = useState( false );
	const [ isVisible, setIsVisible ] = useState( false );
	const { installAndActivatePlugins }: PluginsStoreActions = useDispatch(
		PLUGINS_STORE_NAME
	);
	const { createNotice } = useDispatch( 'core/notices' );
	const { updatePaymentGateway } = useDispatch( PAYMENT_GATEWAYS_STORE_NAME );
	const { gatewayIsActive, paymentGateway, promotionGateway } = useSelect(
		( select: WCDataSelector ) => {
			const { getPaymentGateway } = select( PAYMENT_GATEWAYS_STORE_NAME );
			const activePlugins: string[] = select(
				PLUGINS_STORE_NAME
			).getActivePlugins();
			const isActive =
				activePlugins && activePlugins.includes( pluginSlug );
			let paymentGatewayData;
			if ( isActive ) {
				paymentGatewayData = getPaymentGateway(
					pluginSlug.replace( /\-/g, '_' )
				);
			}

			return {
				gatewayIsActive: isActive,
				paymentGateway: paymentGatewayData,
				promotionGateway: getPaymentGateway( gatewayId ),
			};
		}
	);

	useEffect( () => {
		if (
			gatewayIsActive &&
			paymentGateway &&
			paymentGateway.settings_url
		) {
			window.location.href = paymentGateway.settings_url;
		}
	}, [ gatewayIsActive, paymentGateway ] );

	useEffect( () => {
		if ( promotionGateway?.settings?.is_dismissed?.value === 'no' ) {
			setIsVisible( true );
		}
	}, promotionGateway );

	const installPaymentGateway = () => {
		if ( installing ) {
			return;
		}
		setInstalling( true );
		recordEvent( 'settings_payments_recommendations_setup', {
			extension_selected: pluginSlug,
		} );
		installAndActivatePlugins( [ pluginSlug ] ).catch(
			( response: { message?: string } ) => {
				if ( response.message ) {
					createNotice( 'error', response.message );
				}
				setInstalling( false );
			}
		);
	};

	const onDismiss = () => {
		setIsVisible( false );
		updatePaymentGateway( gatewayId, {
			settings: {
				is_dismissed: 'yes',
			},
		} );
	};

	return (
		<>
			<VerticalCSSTransition timeout={ 500 } in={ isVisible }>
				{ columns.map( ( column ) => {
					if ( column.className.includes( 'name' ) ) {
						return (
							<td className="name" key={ column.className }>
								<div className="wc-payment-gateway-method__name">
									<Link
										target="_blank"
										type="external"
										rel="noreferrer"
										href={ url }
									>
										{ title }
									</Link>
									{ subTitleContent ? (
										<div
											className="pre-install-payment-gateway__subtitle"
											dangerouslySetInnerHTML={ sanitizeHTML(
												subTitleContent
											) }
										></div>
									) : null }
								</div>
							</td>
						);
					} else if ( column.className.includes( 'status' ) ) {
						return (
							<td
								className="pre-install-payment-gateway__status"
								key={ column.className }
							></td>
						);
					} else if ( column.className.includes( 'action' ) ) {
						return (
							<td className="action" key={ column.className }>
								<div className="pre-install-payment-gateway__actions">
									<EllipsisMenu
										label={ __(
											'Payment Promotion Options',
											'woocommerce-admin'
										) }
										className="pre-install-payment-gateway__actions-menu"
										onToggle={ (
											e:
												| React.MouseEvent
												| React.KeyboardEvent
										) => e.stopPropagation() }
										renderContent={ () => (
											<div className="pre-install-payment-gateway__actions-menu-options">
												<Button onClick={ onDismiss }>
													{ __(
														'Dismiss',
														'woocommerce-admin'
													) }
												</Button>
											</div>
										) }
									/>
									<Button
										className="button alignright"
										onClick={ () =>
											installPaymentGateway()
										}
										isSecondary
										isBusy={ installing }
										aria-disabled={ installing }
									>
										{ __( 'Install', 'woocommerce-admin' ) }
									</Button>
								</div>
							</td>
						);
					}
					return (
						<td
							key={ column.className }
							className={ column.className }
							width={ column.width }
							dangerouslySetInnerHTML={
								column.className.includes( 'sort' )
									? {
											__html: column.html,
									  }
									: sanitizeHTML( column.html )
							}
						></td>
					);
				} ) }
			</VerticalCSSTransition>
		</>
	);
};
