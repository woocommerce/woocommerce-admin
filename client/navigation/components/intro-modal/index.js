/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Guide } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { Text } from '@woocommerce/experimental';
import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './style.scss';

const introModalOption = 'woocommerce_navigation_intro_modal_dismissed';
const trackingOption = 'woocommerce_allow_tracking';

export const IntroModal = () => {
	const [ isOpen, setOpen ] = useState( true );

	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	const { allowTracking, isDismissed, isResolving } = useSelect(
		( select ) => {
			const { getOption, isResolving: isOptionResolving } = select(
				OPTIONS_STORE_NAME
			);
			const dismissedOption = getOption( introModalOption );

			return {
				allowTracking: getOption( trackingOption ) === 'yes',
				isDismissed: dismissedOption === 'yes',
				isResolving:
					typeof dismissedOption === 'undefined' ||
					isOptionResolving( 'getOption', [ introModalOption ] ) ||
					isOptionResolving( 'getOption', [ trackingOption ] ),
			};
		}
	);

	const dismissModal = () => {
		updateOptions( {
			[ introModalOption ]: 'yes',
		} );
		recordEvent( 'navigation_intro_modal_close', {} );
		setOpen( false );
	};

	if ( ! isOpen || isDismissed || isResolving || ! allowTracking ) {
		return null;
	}

	const getPage = ( title, description, imageUrl ) => {
		return {
			content: (
				<div className="woocommerce-navigation-intro-modal__page-wrapper">
					<div className="woocommerce-navigation-intro-modal__page-text">
						<Text variant="title.large" as="h2">
							{ title }
						</Text>
						<Text variant="body.large">{ description }</Text>
					</div>
					<div className="woocommerce-navigation-intro-modal__image-wrapper">
						<img alt={ title } src={ imageUrl } />
					</div>
				</div>
			),
		};
	};

	return (
		<Guide
			className="woocommerce-navigation-intro-modal"
			onFinish={ dismissModal }
			pages={ [
				getPage(
					__(
						'A new navigation for WooCommerce',
						'woocommerce-admin'
					),
					__(
						'All of your store management features in one place',
						'woocommerce-admin'
					),
					'https://woocommerce.com/wp-content/uploads/2021/02/nav-intro-video-1-32.gif'
				),
				getPage(
					__( 'Focus on managing your store', 'woocommerce-admin' ),
					__(
						'Give your attention to key areas of WooCommerce with little distraction',
						'woocommerce-admin'
					),
					'https://woocommerce.com/wp-content/uploads/2021/02/nav-intro-video-2-32.gif'
				),
				getPage(
					__(
						'Easily find and favorite your extensions',
						'woocommerce-admin'
					),
					__(
						"They'll appear in the top level of the navigation for quick access",
						'woocommerce-admin'
					),
					'https://woocommerce.com/wp-content/uploads/2021/02/nav-intro-video-3-32.gif'
				),
			] }
		/>
	);
};
