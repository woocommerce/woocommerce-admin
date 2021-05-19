/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './inbox.scss';
import NotesPanel from '../../../../inbox-panel';
import { AbbreviatedCard } from './abbreviated-card';
import { panels } from './panels';

export const InboxPanel = ( { notifications } ) => {
	const getCardByName = ( name ) => {
		return panels.find( ( panel ) => panel.name === name );
	};

	return (
		<div className="woocommerce-notification-panels">
			{ notifications.length > 0 && (
				<div className="woocommerce-abbreviated-panels">
					{ notifications.map( ( { count, critical, name } ) => {
						const panel = getCardByName( name );
						if ( ! panel ) {
							return null;
						}
						const { content, href, icon, title } = panel;
						return (
							<AbbreviatedCard
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
