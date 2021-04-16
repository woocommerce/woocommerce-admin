/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { ListItem } from '@woocommerce/components';
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import './task-item.scss';
import sanitizeHTML from '../lib/sanitize-html';

type ListItemProps = {
	title: string;
	completed: boolean;
	onClick: () => void;
	isDismissable?: boolean;
	onDismiss?: () => void;
	additionalInfo?: string;
	time: string;
};

export const TaskItem: React.FC< ListItemProps > = ( {
	completed,
	title,
	isDismissable,
	onDismiss,
	onClick,
	additionalInfo,
	time,
} ) => {
	return (
		<ListItem
			disableGutters={ false }
			className="woocommerce-task-list__item"
			onClick={ onClick }
		>
			<div className="woocommerce-task-list__item-before">
				<div className="woocommerce-task__icon">
					{ completed && <Icon icon={ check } /> }
				</div>
			</div>
			<div className="woocommerce-task-list__item-text">
				<span className="woocommerce-task-list__item-title">
					<Text
						as="div"
						variant={ completed ? 'body.small' : 'button' }
					>
						{ title }
						{ additionalInfo && (
							<div
								className="woocommerce-task__additional-info"
								dangerouslySetInnerHTML={ sanitizeHTML(
									additionalInfo
								) }
							></div>
						) }
						{ time && ! completed && (
							<div className="woocommerce-task__estimated-time">
								{ time }
							</div>
						) }
					</Text>
					{ title }
				</span>
				<span className="woocommerce-task-list__item-content"></span>
			</div>
			{ onDismiss && isDismissable && ! completed && (
				<div className="woocommerce-task-list__item-after">
					<Button
						data-testid={ `dismiss-button` }
						isTertiary
						onClick={ ( event: React.MouseEvent ) => {
							event.stopPropagation();
							onDismiss();
						} }
					>
						{ __( 'Dismiss', 'woocommerce-admin' ) }
					</Button>
				</div>
			) }
		</ListItem>
	);
};
