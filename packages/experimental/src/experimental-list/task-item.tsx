/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import { Button, Tooltip } from '@wordpress/components';
import NoticeOutline from 'gridicons/dist/notice-outline';
import { EllipsisMenu } from '@woocommerce/components';
import classnames from 'classnames';
import { sanitize } from 'dompurify';

/**
 * Internal dependencies
 */
import { Text, ListItem } from '../';
import { VerticalCSSTransition } from '../vertical-css-transition';

const ALLOWED_TAGS = [ 'a', 'b', 'em', 'i', 'strong', 'p', 'br' ];
const ALLOWED_ATTR = [ 'target', 'href', 'rel', 'name', 'download' ];

const sanitizeHTML = ( html: string ) => {
	return {
		__html: sanitize( html, { ALLOWED_TAGS, ALLOWED_ATTR } ),
	};
};

type TaskLevel = 1 | 2 | 3;

type ActionArgs = {
	isExpanded?: boolean;
};

type TaskItemProps = {
	title: string;
	completed: boolean;
	onClick: () => void;
	onDelete?: () => void;
	onDismiss?: () => void;
	remindMeLater?: () => void;
	additionalInfo?: string;
	time?: string;
	content: string;
	expandable?: boolean;
	expanded?: boolean;
	showActionButton?: boolean;
	level?: TaskLevel;
	action: (
		event?: React.MouseEvent | React.KeyboardEvent,
		args?: ActionArgs
	) => void;
	actionLabel?: string;
};

const OptionalTaskTooltip: React.FC< {
	level: TaskLevel;
	completed: boolean;
	children: JSX.Element;
} > = ( { level, completed, children } ) => {
	let tooltip = '';
	if ( level === 1 && ! completed ) {
		tooltip = __(
			'This task is required to keep your store running',
			'woocommerce-admin'
		);
	} else if ( level === 2 && ! completed ) {
		tooltip = __(
			'This task is required to set up your extension',
			'woocommerce-admin'
		);
	}
	if ( tooltip === '' ) {
		return children;
	}
	return <Tooltip text={ tooltip }>{ children }</Tooltip>;
};

const OptionalExpansionWrapper: React.FC< {
	expandable: boolean;
	expanded: boolean;
} > = ( { children, expandable, expanded } ) => {
	if ( ! expandable ) {
		return <>{ children }</>;
	}
	return (
		<VerticalCSSTransition
			timeout={ 500 }
			in={ expanded }
			classNames="woocommerce-task-list__item-content"
			defaultStyle={ {
				transitionProperty: 'max-height, opacity',
			} }
		>
			{ children }
		</VerticalCSSTransition>
	);
};

export const TaskItem: React.FC< TaskItemProps > = ( {
	completed,
	title,
	onDelete,
	onDismiss,
	remindMeLater,
	onClick,
	additionalInfo,
	time,
	content,
	expandable = false,
	expanded = false,
	showActionButton,
	level = 3,
	action,
	actionLabel,
} ) => {
	const className = classnames( 'woocommerce-task-list__item', {
		complete: completed,
		expanded,
		'level-2': level === 2 && ! completed,
		'level-1': level === 1 && ! completed,
	} );
	if ( showActionButton === undefined ) {
		showActionButton = expandable;
	}

	const showEllipsisMenu =
		( ( onDismiss || remindMeLater ) && ! completed ) ||
		( onDelete && completed );

	return (
		<ListItem disableGutters className={ className } onClick={ onClick }>
			<OptionalTaskTooltip level={ level } completed={ completed }>
				<div className="woocommerce-task-list__item-before">
					{ level === 1 && ! completed ? (
						<NoticeOutline size={ 36 } />
					) : (
						<div className="woocommerce-task__icon">
							{ completed && <Icon icon={ check } /> }
						</div>
					) }
				</div>
			</OptionalTaskTooltip>
			<div className="woocommerce-task-list__item-text">
				<Text
					as="div"
					size="14"
					lineHeight={ completed ? '18px' : '20px' }
					weight={ completed ? 'normal' : '600' }
					variant={ completed ? 'body.small' : 'button' }
				>
					<span className="woocommerce-task-list__item-title">
						{ title }
					</span>
					<OptionalExpansionWrapper
						expandable={ expandable }
						expanded={ expanded }
					>
						<div className="woocommerce-task-list__item-content">
							{ content }
							{ expandable && ! completed && additionalInfo && (
								<div
									className="woocommerce-task__additional-info"
									dangerouslySetInnerHTML={ sanitizeHTML(
										additionalInfo
									) }
								></div>
							) }
							{ ! completed && showActionButton && (
								<Button
									className="woocommerce-task-list__item-action"
									isPrimary
									onClick={ (
										event:
											| React.MouseEvent
											| React.KeyboardEvent
									) => {
										event.stopPropagation();
										action( event, { isExpanded: true } );
									} }
								>
									{ actionLabel || title }
								</Button>
							) }
						</div>
					</OptionalExpansionWrapper>

					{ ! expandable && ! completed && additionalInfo && (
						<div
							className="woocommerce-task__additional-info"
							dangerouslySetInnerHTML={ sanitizeHTML(
								additionalInfo
							) }
						></div>
					) }
					{ time && (
						<div className="woocommerce-task__estimated-time">
							{ time }
						</div>
					) }
				</Text>
			</div>
			{ showEllipsisMenu && (
				<EllipsisMenu
					label={ __( 'Task Options', 'woocommerce-admin' ) }
					className="woocommerce-task-list__item-after"
					onToggle={ ( e: React.MouseEvent | React.KeyboardEvent ) =>
						e.stopPropagation()
					}
					renderContent={ () => (
						<div className="woocommerce-task-card__section-controls">
							{ onDismiss && ! completed && (
								<Button
									onClick={ (
										e:
											| React.MouseEvent
											| React.KeyboardEvent
									) => {
										e.stopPropagation();
										onDismiss();
									} }
								>
									{ __( 'Dismiss', 'woocommerce-admin' ) }
								</Button>
							) }
							{ remindMeLater && ! completed && (
								<Button
									onClick={ ( e: React.MouseEvent ) => {
										e.stopPropagation();
										remindMeLater();
									} }
								>
									{ __(
										'Remind me later',
										'woocommerce-admin'
									) }
								</Button>
							) }
							{ onDelete && completed && (
								<Button
									onClick={ (
										e:
											| React.MouseEvent
											| React.KeyboardEvent
									) => {
										e.stopPropagation();
										onDelete();
									} }
								>
									{ __( 'Delete', 'woocommerce-admin' ) }
								</Button>
							) }
						</div>
					) }
				/>
			) }
		</ListItem>
	);
};
