/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';
import { Text } from '@woocommerce/experimental';
import { recordEvent } from '@woocommerce/tracks';
import { AbbreviatedCard } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './inbox.scss';
import NotesPanel from '../../../../inbox-panel';
import { cards } from './cards';

export const InboxPanel = ( { notifications } ) => {
	const trackAbbreviatedCardClick = ( name ) => {
		recordEvent( 'activity_panel_click', {
			task: name,
		} );
	};
	const getCardByName = ( name ) => {
		return cards.find( ( card ) => card.name === name );
	};

	return (
		<div className="woocommerce-notification-panels">
			{ notifications.length > 0 && (
				<div className="woocommerce-abbreviated-notifications">
					{ notifications.map( ( { count, name } ) => {
						const card = getCardByName( name );
						if ( ! card ) {
							return null;
						}
						const { content, href, icon, title } = card;
						return (
							<AbbreviatedCard
								className="woocommerce-abbreviated-notification"
								icon={ icon }
								href={ href }
								key={ name }
								onClick={ () =>
									trackAbbreviatedCardClick( name )
								}
							>
								<Text as="h3">{ title }</Text>
								<Text>{ sprintf( content, count ) }</Text>
							</AbbreviatedCard>
						);
					} ) }
				</div>
			) }
			<NotesPanel />
		</div>
	);
};

export default InboxPanel;
