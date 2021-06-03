/**
 * Internal dependencies
 */
import './inbox.scss';
import NotesPanel from '../../../../inbox-panel';
import { AbbreviatedNotificationsPanel } from './abbreviated-notifications-panel';

export const InboxPanel = ( { hasAbbreviatedNotifications, query } ) => {
	return (
		<div className="woocommerce-notification-panels">
			{ hasAbbreviatedNotifications && (
				<AbbreviatedNotificationsPanel query={ query } />
			) }
			<NotesPanel />
		</div>
	);
};

export default InboxPanel;
