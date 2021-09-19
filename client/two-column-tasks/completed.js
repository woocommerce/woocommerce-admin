/**
 * External dependencies
 */
import classnames from 'classnames';
import { Button, Card, CardHeader } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import '../task-list/task-list.scss';
import HeaderImage from './completed.svg';

export const TaskListCompleted = ( { twoColumns, hideTaskCard } ) => {
	return (
		<>
			<div
				className={ classnames(
					'woocommerce-task-dashboard__container two-column-experiment',
					{ 'two-columns': twoColumns !== false }
				) }
			>
				<Card
					size="large"
					className="woocommerce-task-card woocommerce-homescreen-card completed"
				>
					<CardHeader size="medium">
						<div className="wooocommerce-task-card__header">
							<img src={ HeaderImage } alt="Completed" />
							<h2>
								{ __(
									"You've completed store setup",
									'woocommerce-admin'
								) }
							</h2>
							<Button isSecondary>
								{ __( 'Keep list', 'woocommerce-admin' ) }
							</Button>
							<Button isPrimary onClick={ hideTaskCard }>
								{ __( 'Hide this list', 'woocommerce-admin' ) }
							</Button>
						</div>
					</CardHeader>
				</Card>
			</div>
		</>
	);
};

export default TaskListCompleted;
