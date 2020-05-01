/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { xor } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import {
	Card,
	EllipsisMenu,
	MenuItem,
	MenuTitle,
} from '@woocommerce/components';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { DEFAULT_STATS, DEFAULT_HIDDEN_STATS } from './defaults';

const { performanceIndicators } = getSetting( 'dataEndpoints', {
	performanceIndicators: [],
} );
const stats = performanceIndicators.filter( ( indicator ) => {
	return DEFAULT_STATS.includes( indicator.stat );
} );

const StatsOverview = ( { userPrefs, updateCurrentUserData } ) => {
	const userHiddenStats = userPrefs.hiddenStats;
	const hiddenStats = userHiddenStats
		? userHiddenStats
		: DEFAULT_HIDDEN_STATS;

	const toggleStat = ( stat ) => {
		const nextHiddenStats = xor( hiddenStats, [ stat ] );
		updateCurrentUserData( {
			homepage_stats: { hiddenStats: nextHiddenStats },
		} );
	};

	return (
		<Card
			className="woocommerce-analytics__card"
			title={ __( 'Stats overview', 'woocommerce-admin' ) }
			s
			menu={
				<EllipsisMenu
					label={ __(
						'Choose which values to display',
						'woocommerce-admin'
					) }
					renderContent={ () => (
						<>
							<MenuTitle>
								{ __( 'Display stats:', 'woocommerce-admin' ) }
							</MenuTitle>
							{ stats.map( ( stat ) => {
								const checked = ! hiddenStats.includes(
									stat.stat
								);

								return (
									<MenuItem
										checked={ checked }
										isCheckbox
										isClickable
										key={ stat.stat }
										onInvoke={ () =>
											toggleStat( stat.stat )
										}
									>
										{ stat.label }
									</MenuItem>
								);
							} ) }
						</>
					) }
				/>
			}
		>
			Content Here
		</Card>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getCurrentUserData } = select( 'wc-api' );

		return {
			userPrefs: getCurrentUserData().homepage_stats || {},
		};
    } ),
    withDispatch( ( dispatch ) => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( StatsOverview );
