/**
 * External dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DissmissAllModal = ( { setShowDismissAllModal, dismissAllNotes } ) => {
	return (
		<>
			<Modal
				title={ __( 'Dismiss all messages', 'woocommerce-admin' ) }
				className="woocommerce-inbox-dismiss-all-modal"
				onRequestClose={ () => {
					setShowDismissAllModal( false );
				} }
			>
				<div className="woocommerce-inbox-dismiss-all-modal__wrapper">
					<div className="woocommerce-usage-modal__message">
						{ __(
							'Are you sure? Inbox messages will be dismissed forever.',
							'woocommerce-admin'
						) }
					</div>
					<div className="woocommerce-usage-modal__actions">
						<Button
							onClick={ () => setShowDismissAllModal( false ) }
						>
							{ __( 'Cancel', 'woocommerce-admin' ) }
						</Button>
						<Button
							isPrimary
							onClick={ () => {
								dismissAllNotes();
								setShowDismissAllModal( false );
							} }
						>
							{ __( 'Yes, dismiss all', 'woocommerce-admin' ) }
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default DissmissAllModal;
