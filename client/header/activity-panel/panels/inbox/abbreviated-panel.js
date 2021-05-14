/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Card, CardBody, Icon } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { Link } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';

export const AbbreviatedPanel = ( {
	content,
	critical,
	icon,
	href,
	name,
	title,
} ) => {
	const trackAbbreviatedPanelClick = () => {
		recordEvent( 'activity_panel_click', {
			task: name,
		} );
	};
	const addCriticalAlert = () => {
		if ( critical === 0 ) {
			return;
		}
		return (
			<div>
				<span
					className={
						'woocommerce-abbreviated-panel__critical-alert'
					}
				>
					{ sprintf(
						/* translators: Number of critical alerts */
						__( '%d critical alert', 'woocommerce-admin' ),
						critical
					) }
				</span>
			</div>
		);
	};
	return (
		<Card className="woocommerce-abbreviated-panel">
			<CardBody size={ null }>
				<Link
					href={ href }
					onClick={ trackAbbreviatedPanelClick }
					type="wp-admin"
				>
					<div className="woocommerce-abbreviated-panel__icon">
						<Icon icon={ icon } />
					</div>
					<div className="woocommerce-abbreviated-panel__message">
						<Text as="h3">{ title }</Text>
						<Text>{ content }</Text>
						{ critical > 0 && addCriticalAlert() }
					</div>
				</Link>
			</CardBody>
		</Card>
	);
};
