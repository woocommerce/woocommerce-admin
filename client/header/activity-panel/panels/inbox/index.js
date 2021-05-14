/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './inbox.scss';
import NotesPanel from '../../../../inbox-panel';
import { AbbreviatedPanel } from './abbreviated-panel';
import { panels } from './panels';

export const InboxPanel = ( { notifications } ) => {
	const getPanelByName = ( name ) => {
		return panels.find( ( panel ) => panel.name === name );
	};
	const hasNotifications = notifications.length > 0;

	return (
		<div>
			{ hasNotifications && (
				<div className="woocommerce-abbreviated-panels">
					{ notifications.map( ( { count, critical, name } ) => {
						const { content, href, icon, title } = getPanelByName(
							name
						);
						return (
							<AbbreviatedPanel
								content={ sprintf( content, count ) }
								critical={ critical ?? 0 }
								icon={ icon }
								href={ href }
								key={ name }
								name={ name }
								title={ title }
							/>
						);
					} ) }
				</div>
			) }
			<NotesPanel />
		</div>
	);
};

export default InboxPanel;
