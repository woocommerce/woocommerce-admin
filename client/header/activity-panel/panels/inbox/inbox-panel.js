/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Text } from '@woocommerce/experimental';

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

	const addCriticalAlert = ( critical ) => {
		/* translators: Number of critical alerts */
		const criticalAlertText =
			critical > 1
				? __( '%d critical alerts', 'woocommerce-admin' )
				: __( '%d critical alert', 'woocommerce-admin' );
		return (
			<span className={ 'woocommerce-abbreviated-card__critical-alert' }>
				{ sprintf( criticalAlertText, critical ) }
			</span>
		);
	};

	const getContentToShow = ( content, count, critical = 0 ) => {
		const text = sprintf( content, count );
		if ( critical ) {
			return (
				<div>
					<Text> { text } </Text>
					{ addCriticalAlert( critical ) }
				</div>
			);
		}
		return text;
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
								content={ getContentToShow(
									content,
									count,
									critical
								) }
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
