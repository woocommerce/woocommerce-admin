/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { Button, Card, CardHeader } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { EllipsisMenu } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';

export const DismissableListHeading: React.FC< {
	dismissOptionName: string;
} > = ( { children, dismissOptionName } ) => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	const handleDismissClick = () => {
		updateOptions( {
			[ dismissOptionName ]: 'yes',
		} );
	};

	return (
		<CardHeader>
			<div className="woocommerce-recommended-shipping-extensions__header">
				{ children }
			</div>
			<div className="woocommerce-card__menu woocommerce-card__header-item">
				<EllipsisMenu
					label={ __( 'Task List Options', 'woocommerce-admin' ) }
					renderContent={ () => (
						<div className="woocommerce-review-activity-card__section-controls">
							<Button onClick={ handleDismissClick }>
								{ __( 'Hide this', 'woocommerce-admin' ) }
							</Button>
						</div>
					) }
				/>
			</div>
		</CardHeader>
	);
};

export const DismissableList: React.FC< { dismissOptionName: string } > = ( {
	children,
	dismissOptionName,
} ) => {
	const isDismissed = useSelect( ( select ) => {
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );

		const isRequestingOptions = isResolving( 'getOption', [
			dismissOptionName,
		] );

		return isRequestingOptions || getOption( dismissOptionName ) === 'yes';
	} );

	if ( isDismissed ) {
		return null;
	}

	return (
		<Card
			size="medium"
			className="woocommerce-recommended-shipping-extensions"
		>
			{ children }
		</Card>
	);
};
