/**
 * External dependencies
 */
import { Guide } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

export const IntroModal = () => {
	const [ isOpen, setOpen ] = useState( true );

	const dismissModal = () => {
		setOpen( false );
	};

	if ( ! isOpen ) {
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
