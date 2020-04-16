/**
 * External dependencies
 */
import { Component, Suspense, lazy } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';
import { withSettingsHydration, withPluginsHydration } from '@woocommerce/data';
import { Spinner } from '@woocommerce/components';

const CustomizableDashboard = lazy( () =>
	import( /* webpackChunkName: "customizable-dashboard" */ './customizable' )
);

const ProfileWizard = lazy( () =>
	import( /* webpackChunkName: "profile-wizard" */ './profile-wizard' )
);

const TaskList = lazy( () =>
	import( /* webpackChunkName: "task-list" */ './task-list' )
);

let PossiblyHydratedProfileWizard = ProfileWizard;
let PossiblyHydratedTaskList = TaskList;

if (
	window.wcSettings.preloadSettings &&
	window.wcSettings.preloadSettings.general
) {
	PossiblyHydratedProfileWizard = withSettingsHydration( 'general', {
		general: window.wcSettings.preloadSettings.general,
	} )( PossiblyHydratedProfileWizard );
}

if ( window.wcSettings.plugins ) {
	PossiblyHydratedProfileWizard = withPluginsHydration(
		{
			...window.wcSettings.plugins,
			jetpackStatus: window.wcSettings.dataEndpoints.jetpackStatus,
		}
	)( PossiblyHydratedProfileWizard );

	PossiblyHydratedTaskList = withPluginsHydration(
		{
			...window.wcSettings.plugins,
			jetpackStatus: window.wcSettings.dataEndpoints.jetpackStatus,
		}
	)( TaskList );
}

class Dashboard extends Component {
	render() {
		const {
			path,
			profileItems,
			taskListHidden,
			taskListComplete,
			query,
		} = this.props;

		const isTaskListEnabled = isOnboardingEnabled() && ! taskListHidden;

		const isDashboardShown =
			! isTaskListEnabled || ( ! query.task && taskListComplete );

		if ( isOnboardingEnabled() && ! profileItems.completed ) {
			return (
				<Suspense fallback={ <Spinner /> }>
					<PossiblyHydratedProfileWizard query={ query } />
				</Suspense>
			);
		}

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return (
				<Suspense fallback={ <Spinner /> }>
					{ isTaskListEnabled && (
						<PossiblyHydratedTaskList query={ query } inline={ isDashboardShown } />
					) }
					{ isDashboardShown && (
						<CustomizableDashboard query={ query } path={ path } />
					) }
				</Suspense>
			);
		}

		return null;
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getOptions, getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		const options = getOptions( [
			'woocommerce_task_list_complete',
			'woocommerce_task_list_hidden',
		] );
		const taskListHidden =
			get( options, [ 'woocommerce_task_list_hidden' ], 'no' ) ===
			'yes';
		
		const taskListComplete = get(
			options,
			[ 'woocommerce_task_list_complete' ],
			false
		);

		return {
			taskListComplete,
			taskListHidden,
			profileItems,
		};
	} )
)( Dashboard );
