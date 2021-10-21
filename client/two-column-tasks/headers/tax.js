/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TimerImage from './timer.svg';
import AddTaxRatesImage from './illustrations/add_tax_rates.svg';

const TaxHeader = ( { task, goToTask } ) => {
	return (
		<div
			className="woocommerce-task-header__contents-container header-product"
			style={ {
				backgroundImage: `url(${ AddTaxRatesImage })`,
				backgroundSize: '370px',
				backgroundPosition: '92% 15%',
			} }
		>
			<div className="woocommerce-task-header__contents">
				<h1>
					{ __( 'Next up, add your tax rates', 'woocommerce-admin' ) }
				</h1>
				<p>{ task.content }</p>
				<Button
					isSecondary={ task.isComplete }
					isPrimary={ ! task.isComplete }
					onClick={ goToTask }
				>
					{ task.actionLabel }
				</Button>
				<p className="woocommerce-task-header__timer">
					<img src={ TimerImage } alt="Timer" />{ ' ' }
					<span>{ task.time }</span>
				</p>
			</div>
		</div>
	);
};

export default TaxHeader;
