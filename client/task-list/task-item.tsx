/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import { Button, Tooltip } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';
import { __experimentalListItem as ListItem } from '@woocommerce/components';
import NoticeOutline from 'gridicons/dist/notice-outline';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './task-item.scss';
import sanitizeHTML from '../lib/sanitize-html';

type TaskItemProps = {
	title: string;
	completed: boolean;
	onClick: () => void;
	isDismissable?: boolean;
	onDismiss?: () => void;
	additionalInfo?: string;
	time?: string;
	content?: string;
	expanded?: boolean;
	level?: 'l1' | 'l2' | 'l3';
};

export const TaskItem: React.FC< TaskItemProps > = ( {
	completed,
	title,
	isDismissable,
	onDismiss,
	onClick,
	additionalInfo,
	time,
	content,
	expanded = false,
	level = 'l1',
} ) => {
	const className = classnames( 'woocommerce-task-list__item', {
		'is-complete': completed,
		'is-l2': level === 'l2' && ! completed,
		'is-l3': level === 'l3' && ! completed,
	} );
	let tooltip = '';
	if ( level === 'l2' ) {
		tooltip = __(
			'This task is required to set up your extension',
			'woocommerce-admin'
		);
	} else if ( level === 'l3' ) {
		tooltip = __(
			'This task is required to keep your store running',
			'woocommerce-admin'
		);
	}
	return (
		<ListItem
			disableGutters={ true }
			className={ className }
			onClick={ onClick }
			animation="slide-right"
		>
			<Tooltip text={ tooltip }>
				<div className="woocommerce-task-list__item-before">
					{ level === 'l3' && ! completed ? (
						<NoticeOutline size={ 36 } />
					) : (
						<div className="woocommerce-task__icon">
							{ completed && <Icon icon={ check } /> }
						</div>
					) }
				</div>
			</Tooltip>
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
						{ expanded && content && (
							<div className="woocommerce-task-list__item-content">
								{ content }
							</div>
						) }
						{ time && ! completed && (
							<div className="woocommerce-task__estimated-time">
								{ time }
							</div>
						) }
					</Text>
				</span>
			</div>
			{ onDismiss && isDismissable && ! completed && (
				<div className="woocommerce-task-list__item-after">
					<Button
						data-testid={ `dismiss-button` }
						isTertiary
						onClick={ (
							event: React.MouseEvent | React.KeyboardEvent
						) => {
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
