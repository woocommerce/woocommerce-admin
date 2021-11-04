/**
 * External dependencies
 */
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DissmissAllModal = ( { onClose, dismissAllNotes } ) => {
	return (
		<>
			<Modal
				title={ __( 'Dismiss all messages', 'woocommerce-admin' ) }
				className="woocommerce-inbox-dismiss-all-modal"
				onRequestClose={ onClose }
			>
				<div className="woocommerce-inbox-dismiss-all-modal__wrapper">
					<div className="woocommerce-usage-modal__message">
						{ __(
							'Are you sure? Inbox messages will be dismissed forever.',
							'woocommerce-admin'
						) }
					</div>
					<div className="woocommerce-usage-modal__actions">
						<Button onClick={ onClose }>
							{ __( 'Cancel', 'woocommerce-admin' ) }
						</Button>
						<Button
							isPrimary
							onClick={ () => {
								dismissAllNotes();
								onClose();
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
