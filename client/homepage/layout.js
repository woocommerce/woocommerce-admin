/**
 * External dependencies
 */
import { Suspense, lazy, useState, useRef, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import classnames from 'classnames';
import { get } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Spinner } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import QuickLinks from '../quick-links';
import StatsOverview from './stats-overview';
import './style.scss';
import { isOnboardingEnabled } from 'dashboard/utils';
import withSelect from 'wc-api/with-select';

const TaskList = lazy( () =>
	import( /* webpackChunkName: "task-list" */ '../task-list' )
);

const Layout = ( props ) => {
	const [ showInbox, setShowInbox ] = useState( true );
	const [ isContentSticky, setIsContentSticky ] = useState( false );
	const content = useRef( null );
	const maybeStickContent = () => {
		if ( ! content.current ) {
			return;
		}
		const { bottom } = content.current.getBoundingClientRect();
		const shouldBeSticky = showInbox && bottom < window.innerHeight;

		setIsContentSticky( shouldBeSticky );
	};

	useEffect( () => {
		maybeStickContent();
		window.addEventListener( 'resize', maybeStickContent );

		return () => {
			window.removeEventListener( 'resize', maybeStickContent );
		};
	}, [] );

	const { query, requesting, taskListHidden } = props;
	const isTaskListEnabled = isOnboardingEnabled() && ! requesting && ! taskListHidden;

	return (
		<div
			className={ classnames( 'woocommerce-homepage', {
				hasInbox: showInbox,
			} ) }
		>
			{ showInbox && (
				<div className="woocommerce-homepage-column is-inbox">
					<div className="temp-content">
						<Button
							isPrimary
							onClick={ () => {
								setShowInbox( false );
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
				ref={ content }
				style={ {
					position: isContentSticky ? 'sticky' : 'static',
				} }
			>
				{ isTaskListEnabled && (
					<Suspense fallback={ <Spinner /> }>
						<TaskList
							query={ query }
							inline
						/>
					</Suspense>
				) }
				<StatsOverview />

				<QuickLinks />
			</div>
		</div>
	);
};

export { Layout as _Layout };

export default compose(
	withSelect( ( select ) => {
		const {
			getOptions,
			isGetOptionsRequesting,
		} = select( 'wc-api' );

		if ( isOnboardingEnabled() ) {
			const options = getOptions( [
				'woocommerce_task_list_hidden',
			] );
			
			return {
				requesting: isGetOptionsRequesting( [
					'woocommerce_task_list_hidden',
				] ),
				taskListHidden: get( options, [ 'woocommerce_task_list_hidden' ] ) === 'yes',
			};
		}

		return {
			requesting: false,
		};
	} )
)( Layout );
