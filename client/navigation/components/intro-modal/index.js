/**
 * External dependencies
 */
import { Guide } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './style.scss';

const introModalOption = 'navigation_intro_modal_dismissed';

export const IntroModal = () => {
	const [ isOpen, setOpen ] = useState( true );

	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	const { isDismissed, isResolving } = useSelect( ( select ) => {
		const dismissedOption = select( OPTIONS_STORE_NAME ).getOption(
			introModalOption
		);
		return {
			isDismissed: dismissedOption === 'yes',
			isResolving:
				typeof dismissedOption === 'undefined' ||
				select( OPTIONS_STORE_NAME ).isResolving( 'getOption', [
					introModalOption,
				] ),
		};
	} );

	const dismissModal = () => {
		updateOptions( {
			[ introModalOption ]: 'yes',
		} );
		recordEvent( 'navigation_intro_modal_close', {} );
		setOpen( false );
	};

	if ( ! isOpen || isDismissed || isResolving ) {
		return null;
	}

	return (
		<Guide
			className="woocommerce-navigation-intro-modal"
			onFinish={ dismissModal }
			pages={ [
				{
					content: (
						<iframe
							title="Rick Roll"
							width="420"
							height="315"
							src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						></iframe>
					),
				},
				{
					content: 'Number 2',
				},
			] }
		/>
	);
};
