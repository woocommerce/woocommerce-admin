/**
 * External dependencies
 */
import { Card, CardBody, Icon } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { Link } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';

export const AbbreviatedCard = ( { content, icon, href, name, title } ) => {
	const trackAbbreviatedCardClick = () => {
		recordEvent( 'activity_panel_click', {
			task: name,
		} );
	};

	const isTextContent = typeof content === 'string';
	return (
		<Card className="woocommerce-abbreviated-card">
			<CardBody size={ null }>
				<Link
					href={ href }
					onClick={ trackAbbreviatedCardClick }
					type="wp-admin"
				>
					<div className="woocommerce-abbreviated-card__icon">
						<Icon icon={ icon } />
					</div>
					<div className="woocommerce-abbreviated-card__message">
						<Text as="h3">{ title }</Text>
						{ isTextContent ? <Text>{ content }</Text> : content }
					</div>
				</Link>
			</CardBody>
		</Card>
	);
};
