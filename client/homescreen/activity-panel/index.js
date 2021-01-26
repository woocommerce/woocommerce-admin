/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { Badge } from '@woocommerce/components';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
} from '@wordpress/components';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss';
import {
	getLowStockCount,
	getOrderStatuses,
	getUnreadOrders,
} from './orders/utils';
import { getAllPanels } from './panels';
import { getUnapprovedReviews } from './reviews/utils';

export const ActivityPanel = () => {
	const settingsData = useSelect( () => {
		const manageStock = getSetting( 'manageStock', 'no' );
		const publishedProductCount = getSetting( 'publishedProductCount', 0 );
		const reviewsEnabled = getSetting( 'reviewsEnabled', 'no' );
		const totalOrderCount = getSetting( 'orderCount', 0 );
		return {
			manageStock,
			publishedProductCount,
			reviewsEnabled,
			totalOrderCount,
		};
	} );

	const ordersData = useSelect( ( select ) => {
		const orderStatuses = getOrderStatuses( select );
		const countLowStockProducts = getLowStockCount( select );
		const countUnreadOrders = getUnreadOrders( select, orderStatuses );
		return {
			countLowStockProducts,
			countUnreadOrders,
			orderStatuses,
		};
	} );

	const reviewsData = useSelect( ( select ) => {
		const countUnapprovedReviews = getUnapprovedReviews( select );
		return {
			countUnapprovedReviews,
		};
	} );

	const taskListData = useSelect( ( select ) => {
		const { getOption } = select( OPTIONS_STORE_NAME );
		return {
			isTaskListHidden: getOption( 'woocommerce_task_list_hidden' ),
		};
	} );

	const panels = getAllPanels( {
		...ordersData,
		...reviewsData,
		...settingsData,
		...taskListData,
	} );

	if ( panels.length === 0 ) {
		return null;
	}

	return (
		<Panel className="woocommerce-activity-panel">
			{ panels.map( ( panelData ) => {
				const {
					className,
					count,
					id,
					initialOpen,
					panel,
					title,
					collapsible,
				} = panelData;
				return collapsible ? (
					<PanelBody
						title={ [
							<Text key={ title } variant="title.small">
								{ title }
							</Text>,
							count !== null && (
								<Badge
									key={ `${ title }-badge` }
									count={ count }
								/>
							),
						] }
						key={ id }
						className={ className }
						initialOpen={ initialOpen }
						collapsible={ collapsible }
						disabled={ ! collapsible }
					>
						<PanelRow>{ panel }</PanelRow>
					</PanelBody>
				) : (
					<div className="components-panel__body" key={ id }>
						<h2 className="components-panel__body-title">
							<Button
								className="components-panel__body-toggle"
								aria-expanded={ false }
								disabled={ true }
							>
								<Text variant="title.small">{ title }</Text>
								{ count !== null && <Badge count={ count } /> }
							</Button>
						</h2>
					</div>
				);
			} ) }
		</Panel>
	);
};
