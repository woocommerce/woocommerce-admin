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
	const getCardByName = ( name ) => {
		return cards.find( ( card ) => card.name === name );
	};
	const hasNotifications = notifications.length > 0;

	return (
		<div>
			{ hasNotifications && (
				<div className="woocommerce-abbreviated-cards">
					{ notifications.map( ( { count, critical, name } ) => {
						const { content, href, icon, title } = getCardByName(
							name
						);
						return (
							<AbbreviatedCard
								content={ sprintf( content, count ) }
								critical={ critical ?? 0 }
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
