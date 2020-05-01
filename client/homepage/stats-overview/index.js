/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';

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

const { performanceIndicators } = getSetting( 'dataEndpoints', {
	performanceIndicators: [],
} );
const trimmedIndicators = performanceIndicators.filter( ( indicator ) => {
	const stats = applyFilters( 'woocommerce_homepage_default_stats', [
		'revenue/total_sales',
		'revenue/net_revenue',
		'orders/orders_count',
		'products/items_sold',
	] );
	return stats.includes( indicator.stat );
} );

const StatsOverview = () => {
	const defaultHiddenStats = [ 'revenue/net_revenue', 'products/items_sold' ];
	const userHiddenStats = []; // todo: get this from currentUserData
	const hiddenStats = userHiddenStats.length
		? userHiddenStats
		: defaultHiddenStats;

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
							{ trimmedIndicators.map( ( indicator, i ) => {
								const checked = ! hiddenStats.includes(
									indicator.stat
								);

								return (
									<MenuItem
										checked={ checked }
										isCheckbox
										isClickable
										key={ i }
										onInvoke={ () => {} }
									>
										{ indicator.label }
									</MenuItem>
								);
							} ) }
						</>
					) }
				/>
			}
		>
			<TabPanel
				tabs={ [
					{
						title: __( 'Today', 'woocommerce-admin' ),
						name: 'today',
					},
					{
						title: __( 'Week to date', 'woocommerce-admin' ),
						name: 'week',
					},
					{
						title: __( 'Month to date', 'woocommerce-admin' ),
						name: 'month',
					},
				] }
			>
				{ ( tab ) => <p>{ tab.name }</p> }
			</TabPanel>
		</Card>
	);
};

export default StatsOverview;
