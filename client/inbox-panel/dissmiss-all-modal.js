/**
 * External dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DissmissAllModal = ( { setShowDismissAllModal } ) => {
	const title = __( 'Dismiss all messages', 'woocommerce-admin' );
	const message = __(
		'Are you sure? Inbox messages will be dismissed forever.',
		'woocommerce-admin'
	);
	const dismissActionText = __( 'Cancel', 'woocommerce-admin' );
	const acceptActionText = __( 'Yes, dismiss all', 'woocommerce-admin' );
	return (
		<>
			<Modal
				title={ title }
				className="woocommerce-inbox-dismiss-all-modal"
				onRequestClose={ () => {
					setShowDismissAllModal( false );
				} }
			>
				<div className="woocommerce-inbox-dismiss-all-modal__wrapper">
					<div className="woocommerce-usage-modal__message">
						{ message }
					</div>
					<div className="woocommerce-usage-modal__actions">
						<Button
							onClick={ () => setShowDismissAllModal( false ) }
						>
							{ dismissActionText }
						</Button>
						<Button
							isPrimary
							onClick={ () => {
								setShowDismissAllModal( false );
							} }
						>
							{ acceptActionText }
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DissmissAllModal;
