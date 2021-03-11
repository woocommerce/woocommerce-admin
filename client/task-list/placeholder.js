/**
 * External dependencies
 */
import {
	Card,
	CardBody,
	CardMedia,
	CardFooter,
	Spinner,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';

const TaskListPlaceholder = ( props ) => {
	const { numTasks = 5 } = props;
	return (
		<div className="woocommerce-task-dashboard__container">
			<div
				className="woocommerce-card woocommerce-task-card is-loading"
				aria-hidden
			>
				<div className="woocommerce-card__header">
					<div className="woocommerce-card__title-wrapper">
						<div className="woocommerce-card__title woocommerce-card__header-item">
							<span className="is-placeholder" />
						</div>
					</div>
				</div>
				<div className="woocommerce-card__body">
					<div className="woocommerce-list">
						{ Array.from( new Array( numTasks ) ).map( ( v, i ) => (
							<div
								key={ i }
								className="woocommerce-list__item has-action"
							>
								<div className="woocommerce-list__item-inner">
									<div className="woocommerce-list__item-before">
										<span className="is-placeholder" />
									</div>
									<div className="woocommerce-list__item-text">
										<div className="woocommerce-list__item-title">
											<span className="is-placeholder" />
										</div>
									</div>
									<div className="woocommerce-list__item-after">
										<span className="is-placeholder" />
									</div>
								</div>
							</div>
						) ) }
					</div>
				</div>
			</div>
		</div>
	);
};

export const PaymentMethodPlaceholder = () => (
	<Card className="woocommerce-task-card woocommerce-task-payment">
		<CardMedia isBorderless>
			<span className="is-placeholder" />
		</CardMedia>
		<CardBody>
			<div className="woocommerce-task-payment__title">
				<span className="is-placeholder" />
			</div>
			<span className="is-placeholder" />
			<span className="is-placeholder" />
		</CardBody>
		<CardFooter isBorderless>
			<Spinner />
		</CardFooter>
	</Card>
);

export default TaskListPlaceholder;
