/**
 * External dependencies
 */
import { Button } from '@wordpress/components';

export const PartnerCard: React.FC< {
	name: string;
	logo: string;
	description: string;
	benefits: string[];
	terms: string;
	actionText: string;
	onClick: () => void;
	isPending: boolean;
} > = ( {
	logo,
	description,
	benefits,
	terms,
	actionText,
	onClick,
	isPending,
} ) => {
	return (
		<div className="woocommerce-tax-partner-card">
			<img
				className="woocommerce-tax-partner-card__logo"
				src={ logo }
				alt={ name }
			/>
			<div className="woocommerce-tax-partner-card__description">
				{ description }
			</div>
			<ul className="woocommerce-tax-partner-card__benefits">
				{ benefits.map( ( benefit, i ) => {
					return (
						<li
							className="woocommerce-tax-partner-card__benefit"
							key={ i }
						>
							{ benefit }
						</li>
					);
				} ) }
			</ul>

			<div className="woocommerce-tax-partner-card__action">
				<span className="woocommerce-tax-partner-card__terms">
					{ terms }
				</span>
				<Button
					isSecondary
					onClick={ onClick }
					isBusy={ isPending }
					disabled={ isPending }
				>
					{ actionText }
				</Button>
			</div>
		</div>
	);
};
