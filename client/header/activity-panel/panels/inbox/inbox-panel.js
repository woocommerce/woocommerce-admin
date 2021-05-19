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

	return (
		<div className="woocommerce-notification-panels">
			{ notifications.length > 0 && (
				<div className="woocommerce-abbreviated-cards">
					{ notifications.map( ( { count, critical, name } ) => {
						const card = getCardByName( name );
						if ( ! card ) {
							return null;
						}
						const { content, href, icon, title } = card;
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
