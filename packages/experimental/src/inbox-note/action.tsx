/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ADMIN_URL as adminUrl } from '@woocommerce/wc-admin-settings';

type InboxNoteActionProps = {
	onClick: () => void;
	label: string;
	href?: string;
};

/**
 * Renders a secondary button that can also be a link. If href is provided it will
 * automatically open it in a new tab/window.
 */
const InboxNoteAction: React.FC< InboxNoteActionProps > = ( {
	label,
	onClick,
	href,
} ) => {
	const [ inAction, setInAction ] = useState( false );

	const handleActionClick: React.MouseEventHandler = ( event ) => {
		const target: EventTarget = event.target;
		const href = target instanceof HTMLBaseElement ? target.href : '';
		let inAction = true;

		if ( href.length && ! href.startsWith( adminUrl ) ) {
			event.preventDefault();
			inAction = false; // link buttons shouldn't be "busy".
			window.open( href, '_blank' );
		}

		setInAction( inAction );
		onClick();
	};

	return (
		<Button
			isSecondary
			isBusy={ inAction }
			disabled={ inAction }
			href={ href }
			onClick={ handleActionClick }
		>
			{ label }
		</Button>
	);
};

export default InboxNoteAction;
