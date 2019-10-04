/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { filter, get } from 'lodash';
import { compose } from '@wordpress/compose';
import classNames from 'classnames';
import { Snackbar, Icon, Button } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { Card, List, MenuItem, EllipsisMenu } from '@woocommerce/components';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal depdencies
 */
import './style.scss';
import withSelect from 'wc-api/with-select';
import { recordEvent } from 'lib/tracks';
import { getTasks } from './tasks';

class TaskDashboard extends Component {
	componentDidMount() {
		document.body.classList.add( 'woocommerce-onboarding' );
		document.body.classList.add( 'woocommerce-task-dashboard__body' );

		this.recordEvent();
	}

	componentWillUnmount() {
		document.body.classList.remove( 'woocommerce-onboarding' );
		document.body.classList.remove( 'woocommerce-task-dashboard__body' );
	}

	recordEvent() {
		if ( this.getCurrentTask() ) {
			return;
		}
		const { profileItems } = this.props;
		const tasks = filter( this.props.tasks, task => task.visible );
		recordEvent( 'tasklist_view', {
			number_tasks: tasks.length,
			store_connected: profileItems.wccom_connected,
		} );
	}

	getCurrentTask() {
		const { task } = this.props.query;
		const currentTask = this.props.tasks.find( s => s.key === task );

		if ( ! currentTask ) {
			return null;
		}

		return currentTask;
	}

	renderPrompt() {
		if ( this.props.promptShown ) {
			return null;
		}

		return (
			<Snackbar className="woocommerce-task-card__prompt">
				<span>{ __( 'Is this card useful?', 'woocommerce-admin' ) }</span>

				<div className="woocommerce-task-card__prompt-actions">
					<Button isLink onClick={ this.clearQuery }>
						{ __( 'No, hide it', 'woocommerce-admin' ) }
					</Button>

					<Button isLink onClick={ this.clearQuery }>
						{ __( 'Yes, keep it', 'woocommerce-admin' ) }
					</Button>
				</div>
			</Snackbar>
		);
	}

	renderMenu() {
		return (
			<EllipsisMenu
				label={ __( 'Task List Options', 'woocommerce-admin' ) }
				renderContent={ ( { onToggle } ) => (
					<MenuItem isClickable onInvoke={ onToggle }>
						<Icon icon={ 'trash' } label={ __( 'Remove block' ) } />
						{ __( 'Remove section', 'woocommerce-admin' ) }
					</MenuItem>
				) }
			/>
		);
	}

	render() {
		const currentTask = this.getCurrentTask();
		const tasks = filter( this.props.tasks, task => task.visible ).map( task => {
			task.className = classNames( task.completed ? 'is-complete' : null, task.className );
			task.before = task.completed ? (
				<i className="material-icons-outlined">check_circle</i>
			) : (
				<i className="material-icons-outlined">{ task.icon }</i>
			);
			task.after = <i className="material-icons-outlined">chevron_right</i>;
			task.onClick = () => updateQueryString( { task: task.key } );
			return task;
		} );

		return (
			<Fragment>
				<div className="woocommerce-task-dashboard__container">
					{ currentTask ? (
						currentTask.container
					) : (
						<Fragment>
							<Card
								className="woocommerce-task-card"
								title={ __( 'Set up your store and start selling', 'woocommerce-admin' ) }
								description={ __(
									'Below you’ll find a list of the most important steps to get your store up and running.',
									'woocommerce-admin'
								) }
								menu={ this.props.inline && this.renderMenu() }
							>
								<List items={ tasks } />
							</Card>
							{ this.props.inline && this.renderPrompt() }
						</Fragment>
					) }
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { getProfileItems, getOptions } = select( 'wc-api' );
		const profileItems = getProfileItems();

		const promptShown = get(
			getOptions( [ 'woocommerce_task_list_prompt_shown' ] ),
			[ 'woocommerce_task_list_prompt_shown' ],
			false
		);

		const tasks = getTasks( {
			profileItems,
			options: getOptions( [ 'woocommerce_onboarding_payments' ] ),
			query: props.query,
		} );

		return {
			profileItems,
			promptShown,
			tasks,
		};
	} )
)( TaskDashboard );
