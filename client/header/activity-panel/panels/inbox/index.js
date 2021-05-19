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

	return (
		<div className="woocommerce-notification-panels">
			{ notifications.length > 0 && (
				<div className="woocommerce-abbreviated-panels">
					{ notifications.map( ( { count, critical, name } ) => {
						const panel = getPanelByName( name );
						if ( ! panel ) {
							return null;
						}
						const { content, href, icon, title } = panel;
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
