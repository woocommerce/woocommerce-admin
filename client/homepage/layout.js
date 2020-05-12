/**
 * External dependencies
 */
import { Component, Fragment, createRef } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { get } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';
import TaskList from '../task-list';

class Layout extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showInbox: true,
			isContentSticky: false,
		};

		this.maybeStickContent = this.maybeStickContent.bind( this );
		this.content = createRef();
	}

	componentDidMount() {
		this.maybeStickContent();
		window.addEventListener( 'resize', this.maybeStickContent );
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.maybeStickContent );
	}

	maybeStickContent() {
		const { isContentSticky, showInbox } = this.state;
		const content = this.content.current;

		if ( content === null ) {
			return;
		}

		const { bottom } = content.getBoundingClientRect();
		const shouldBeSticky = showInbox && bottom < window.innerHeight;

		// Only rerender if needed.
		if ( isContentSticky !== shouldBeSticky ) {
			this.setState( {
				isContentSticky: shouldBeSticky,
			} );
		}
	}

	renderColumns() {
		const { query, taskListHidden } = this.props;
		const { showInbox, isContentSticky } = this.state;
		const isTaskListEnabled = isOnboardingEnabled() && ! taskListHidden;

		return (
			<Fragment>
				{ showInbox && (
					<div className="woocommerce-homepage-column is-inbox">
						<div className="temp-content">
							<Button
								isPrimary
								onClick={ () => {
									this.setState( { showInbox: false } );
								} }
							>
								Dismiss All
							</Button>
						</div>
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
					</div>
				) }
				<div
					className="woocommerce-homepage-column"
					ref={ this.content }
					style={ {
						position: isContentSticky ? 'sticky' : 'static',
					} }
				>
					{ isTaskListEnabled && (
						<TaskList
							query={ query }
							inline
						/>
					) }
					<div className="temp-content" />
					<div className="temp-content" />
				</div>
			</Fragment>
		);
	}

	renderTaskList() {
		const { query } = this.props;

		return (
			<TaskList query={ query } />
		);
	}

	render() {
		const { query, taskListHidden } = this.props;
		const { showInbox } = this.state;
		const isTaskListEnabled = isOnboardingEnabled() && ! taskListHidden;

		const isDashboardShown = ! isTaskListEnabled || ! query.task;

		return (
			<div
				className={ classnames( 'woocommerce-homepage', {
					hasInbox: showInbox,
				} ) }
			>
				{ isDashboardShown ? this.renderColumns() : isTaskListEnabled && this.renderTaskList() }
			</div>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getOptions } = select( 'wc-api' );

		if ( isOnboardingEnabled() ) {
			const options = getOptions( [
				'woocommerce_task_list_complete',
				'woocommerce_task_list_hidden',
			] );

			return {
				taskListHidden: get( options, [ 'woocommerce_task_list_hidden' ] ) === 'yes',
				taskListComplete: get( options, [ 'woocommerce_task_list_complete' ], false ),
			};
		}

		return {};
	} )
)( Layout );
