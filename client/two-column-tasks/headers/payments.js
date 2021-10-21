/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TimerImage from './timer.svg';
import GetPaidImage from './illustrations/get_paid.svg';

const PaymentsHeader = ( { task, goToTask } ) => {
	return (
		<div
			className="woocommerce-task-header__contents-container header-product"
			style={ {
				backgroundImage: `url(${ GetPaidImage })`,
				backgroundSize: '370px',
				backgroundPosition: '92% 15%',
			} }
		>
			<div className="woocommerce-task-header__contents">
				<h1>{ __( 'Choose payment methods', 'woocommerce-admin' ) }</h1>
				<p>
					{ __(
						'Choose payment providers and enable payment methods at checkout',
						'woocommerce-admin'
					) }
				</p>
				<Button
					isSecondary={ task.isComplete }
					isPrimary={ ! task.isComplete }
					onClick={ goToTask }
				>
					{ __( 'Set up payments', 'woocommerce-admin' ) }
				</Button>
				<p className="woocommerce-task-header__timer">
					<img src={ TimerImage } alt="Timer" />{ ' ' }
					<span>{ __( '2 minutes' ) }</span>
				</p>
			</div>
		</div>
	);
};

export default PaymentsHeader;
