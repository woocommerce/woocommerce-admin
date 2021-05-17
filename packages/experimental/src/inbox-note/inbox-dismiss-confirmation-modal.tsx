/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

type ConfirmationModalProps = {
	onClose: () => void;
	onDismiss: () => void;
	label?: string;
};

const InboxDismissConfirmationModal: React.FC< ConfirmationModalProps > = ( {
	onClose,
	onDismiss,
	label = __( "Yes, I'm sure", 'woocommerce-admin' ),
} ) => {
	const [ inAction, setInAction ] = useState( false );

	return (
		<Modal
			title={ __( 'Are you sure?', 'woocommerce-admin' ) }
			onRequestClose={ () => onClose() }
			className="woocommerce-inbox-dismiss-confirmation_modal"
		>
			<div className="woocommerce-inbox-dismiss-confirmation_wrapper">
				<p>
					{ __(
						'Dismissed messages cannot be viewed again',
						'woocommerce-admin'
					) }
				</p>
				<div className="woocommerce-inbox-dismiss-confirmation_buttons">
					<Button isSecondary onClick={ () => onClose() }>
						{ __( 'Cancel', 'woocommerce-admin' ) }
					</Button>
					<Button
						isSecondary
						isBusy={ inAction }
						disabled={ inAction }
						onClick={ () => {
							setInAction( true );
							onDismiss();
						} }
					>
						{ label }
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export { InboxDismissConfirmationModal };
