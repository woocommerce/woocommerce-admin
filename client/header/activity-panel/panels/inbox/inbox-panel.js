/**
 * Internal dependencies
 */
import './inbox.scss';
import NotesPanel from '../../../../inbox-panel';
import { AbbreviatedNotificationsPanel } from './abbreviated-notifications-panel';

export const InboxPanel = ( {
	hasAbbreviatedNotifications,
	hasExtraFills,
	thingsToDoNextCount,
} ) => {
	return (
		<div className="woocommerce-notification-panels">
			{ ( hasAbbreviatedNotifications || hasExtraFills ) && (
				<AbbreviatedNotificationsPanel
					hasExtraFills={ hasExtraFills }
					thingsToDoNextCount={ thingsToDoNextCount }
				/>
			) }
			<NotesPanel />
		</div>
	);
};

export default InboxPanel;
