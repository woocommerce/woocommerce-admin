/**
 * External dependencies
 */
import {
	Suspense,
	lazy,
	useState,
	useRef,
	useEffect,
} from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
	useUserPreferences,
	NOTES_STORE_NAME,
	OPTIONS_STORE_NAME,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import StatsOverview from './stats-overview';
import TaskListPlaceholder from '../task-list/placeholder';
import InboxPanel from '../inbox-panel';
import { WelcomeModal } from './welcome-modal';

import './style.scss';
import '../dashboard/style.scss';
import { StoreManagementLinks } from '../store-management-links';

const TaskList = lazy( () =>
	import( /* webpackChunkName: "task-list" */ '../task-list' )
);

export const Layout = ( {
	defaultHomescreenLayout,
	isBatchUpdating,
	query,
	requestingTaskList,
	taskListComplete,
	taskListHidden,
	shouldShowWelcomeModal,
	updateOptions,
} ) => {
	const userPrefs = useUserPreferences();
	const twoColumns =
		( userPrefs.homepage_layout || defaultHomescreenLayout ) ===
		'two_columns';
	const [ showInbox, setShowInbox ] = useState( true );
	const [ isContentSticky, setIsContentSticky ] = useState( false );
	const content = useRef( null );
	const maybeStickContent = () => {
		if ( ! content.current ) {
			return;
		}
		const { bottom } = content.current.getBoundingClientRect();
		const shouldBeSticky = twoColumns && bottom < window.innerHeight;

		setIsContentSticky( shouldBeSticky );
	};

	useEffect( () => {
		maybeStickContent();
		window.addEventListener( 'resize', maybeStickContent );

		return () => {
			window.removeEventListener( 'resize', maybeStickContent );
		};
	}, [ twoColumns ] );

	const isTaskListEnabled = taskListHidden === false && ! taskListComplete;
	const isDashboardShown = ! isTaskListEnabled || ! query.task;

	if ( isBatchUpdating && ! showInbox ) {
		setShowInbox( true );
	}

	const renderColumns = () => {
		return (
			<>
				<div
					className="woocommerce-homescreen-column"
					ref={ content }
					style={ {
						position: isContentSticky ? 'sticky' : 'static',
					} }
				>
					{ isTaskListEnabled && renderTaskList() }
					{ ! isTaskListEnabled && <StoreManagementLinks /> }
				</div>
				<div className="woocommerce-homescreen-column">
					<StatsOverview />
					<InboxPanel />
				</div>
			</>
		);
	};

	const renderTaskList = () => {
		if ( requestingTaskList ) {
			return <TaskListPlaceholder />;
		}

		return (
			<Suspense fallback={ <TaskListPlaceholder /> }>
				<TaskList query={ query } />
			</Suspense>
		);
	};

	return (
		<div
			className={ classnames( 'woocommerce-homescreen', {
				'two-columns': twoColumns,
			} ) }
		>
			{ isDashboardShown
				? renderColumns()
				: isTaskListEnabled && renderTaskList() }
			{ shouldShowWelcomeModal && (
				<WelcomeModal
					onClose={ () => {
						updateOptions( {
							woocommerce_task_list_welcome_modal_dismissed:
								'yes',
						} );
					} }
				/>
			) }
		</div>
	);
};

Layout.propTypes = {
	/**
	 * If the task list option is being fetched.
	 */
	requestingTaskList: PropTypes.bool.isRequired,
	/**
	 * If the task list has been completed.
	 */
	taskListComplete: PropTypes.bool,
	/**
	 * If the task list is hidden.
	 */
	taskListHidden: PropTypes.bool,
	/**
	 * Page query, used to determine the current task if any.
	 */
	query: PropTypes.object.isRequired,
	/**
	 * If the welcome modal should display
	 */
	shouldShowWelcomeModal: PropTypes.bool,
	/**
	 * Dispatch an action to update an option
	 */
	updateOptions: PropTypes.func.isRequired,
};

export default compose(
	withSelect( ( select ) => {
		const { isNotesRequesting } = select( NOTES_STORE_NAME );
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );

		const welcomeModalDismissed =
			getOption( 'woocommerce_task_list_welcome_modal_dismissed' ) ===
			'yes';

		const welcomeModalDismissedIsResolving = isResolving( 'getOption', [
			'woocommerce_task_list_welcome_modal_dismissed',
		] );

		const shouldShowWelcomeModal =
			! welcomeModalDismissedIsResolving && ! welcomeModalDismissed;

		const defaultHomescreenLayout =
			getOption( 'woocommerce_default_homepage_layout' ) ||
			'single_column';

		return {
			defaultHomescreenLayout,
			isBatchUpdating: isNotesRequesting( 'batchUpdateNotes' ),
			shouldShowWelcomeModal,
			taskListComplete:
				getOption( 'woocommerce_task_list_complete' ) === 'yes',
			taskListHidden:
				getOption( 'woocommerce_task_list_hidden' ) === 'yes',
			requestingTaskList:
				isResolving( 'getOption', [
					'woocommerce_task_list_complete',
				] ) ||
				isResolving( 'getOption', [ 'woocommerce_task_list_hidden' ] ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateOptions: dispatch( OPTIONS_STORE_NAME ).updateOptions,
	} ) )
)( Layout );
