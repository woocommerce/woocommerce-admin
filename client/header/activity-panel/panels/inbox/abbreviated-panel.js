/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Card, CardBody, Icon } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { Link, Pill } from '@woocommerce/components';
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
	const criticalPill = () => {
		if ( critical === 0 ) {
			return;
		}
		return (
			<Pill>
				{ sprintf(
					/* translators: Number of critical alerts */
					__( '%d critical alert', 'woocommerce-admin' ),
					critical
				) }
			</Pill>
		);
	};
	return (
		<Card className="woocommerce-abbreviated-panels__element">
			<CardBody size={ null }>
				<Link
					href={ href }
					onClick={ trackAbbreviatedPanelClick }
					type="wp-admin"
				>
					<div className="woocommerce-abbreviated-panels__icon">
						<Icon icon={ icon } />
					</div>
					<div className="woocommerce-abbreviated-panels__message">
						<Text
							as="h3"
							className="woocommerce-task-payment__title"
						>
							{ title }
						</Text>
						<div className="woocommerce-task-payment__content">
							<span>{ content }</span>
						</div>
						{ criticalPill() }
					</div>
				</Link>
			</CardBody>
		</Card>
	);
};
