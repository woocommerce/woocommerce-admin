/**
 * External dependencies
 */
import { Card, CardBody, Icon } from '@wordpress/components';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Link from '../link';

export type AbbreviatedCardProps = {
	type: 'wp-admin' | 'wc-admin' | 'external';
	icon: Icon.IconType< {} >;
	href?: string;
} & React.HTMLAttributes< HTMLAnchorElement >;

const AbbreviatedCard: React.FC< AbbreviatedCardProps > = ( {
	children,
	className,
	href,
	icon,
	onClick,
	type,
} ) => {
	return (
		<Card
			className={ classnames(
				'woocommerce-abbreviated-card',
				className
			) }
		>
			<CardBody>
				<Link href={ href } onClick={ onClick } type={ type }>
					<div className="woocommerce-abbreviated-card__icon">
						<Icon icon={ icon } />
					</div>
					<div className="woocommerce-abbreviated-card__content">
						{ children }
					</div>
				</Link>
			</CardBody>
		</Card>
	);
};

export default AbbreviatedCard;
