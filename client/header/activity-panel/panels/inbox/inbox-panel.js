/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
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

	const addCriticalAlert = ( critical ) => {
		/* translators: Number of critical alerts */
		const criticalAlertText =
			critical > 1
				? __( '%d critical alerts', 'woocommerce-admin' )
				: __( '%d critical alert', 'woocommerce-admin' );
		return (
			<span
				className={
					'woocommerce-abbreviated-notification__critical-alert'
				}
			>
				{ sprintf( criticalAlertText, critical ) }
			</span>
		);
	};

	return (
		<div className="woocommerce-notification-panels">
			{ notifications.length > 0 && (
				<div className="woocommerce-abbreviated-notifications">
					{ notifications.map( ( { count, critical, name } ) => {
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
								{ critical && addCriticalAlert( critical ) }
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
