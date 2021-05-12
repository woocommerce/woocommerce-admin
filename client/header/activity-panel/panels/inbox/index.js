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
import { cards } from './cards';

export const InboxPanel = ( { notifications } ) => {
	const getNotificationDataByName = ( name ) => {
		return notifications.find(
			( notificationData ) => notificationData.card === name
		);
	};

	const hasAnyAbbreviatedCards = () => {
		return notifications.find( ( { warnings } ) => warnings > 0 );
	};

	return (
		<div>
			{ hasAnyAbbreviatedCards() && (
				<div className="woocommerce-abbreviated-cards">
					{ cards.map( ( { content, href, icon, name, title } ) => {
						const {
							critical,
							warnings,
						} = getNotificationDataByName( name );
						if ( warnings === 0 ) {
							return null;
						}
						return (
							<AbbreviatedCard
								content={ sprintf( content, warnings ) }
								critical={ critical }
								icon={ icon }
								href={ href }
								key={ name }
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
