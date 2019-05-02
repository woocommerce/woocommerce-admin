/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { applyFilters } from '@wordpress/hooks';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { H, ReportFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import Section from './section';
import withSelect from 'wc-api/with-select';

class CustomizableDashboard extends Component {
	constructor( props ) {
		super( props );

		const defaultSections = [
			{
				key: 'store-performance',
				title: __( 'Store Performance', 'woocommerce-admin' ),
				hiddenBlocks: [
					'coupons/amount',
					'coupons/orders_count',
					'downloads/download_count',
					'taxes/order_tax',
					'taxes/total_tax',
					'taxes/shipping_tax',
					'revenue/shipping',
				],
			},
			{
				key: 'charts',
				title: __( 'Charts', 'woocommerce-admin' ),
				hiddenBlocks: [
					'avg_order_value',
					'avg_items_per_order',
					'items_sold',
					'gross_revenue',
					'refunds',
					'coupons',
					'taxes',
					'shipping',
					'amount',
					'total_tax',
					'order_tax',
					'shipping_tax',
				],
			},
			{
				key: 'leaderboards',
				title: __( 'Leaderboards', 'woocommerce-admin' ),
				hiddenBlocks: [ 'coupons', 'customers' ],
			},
		];

		this.state = {
			sections: applyFilters(
				'woocommerce_dashboard_sections',
				props.userPrefSections || defaultSections
			),
		};

		this.updateSections = this.updateSections.bind( this );
	}

	updateSections( sections ) {
		this.setState( { sections } );
		this.props.updateCurrentUserData( { dashboard_sections: sections } );
	}

	onChangeHiddenBlocks( updatedKey ) {
		return updatedHiddenBlocks => {
			const newSections = this.state.sections.map( section => {
				if ( section.key === updatedKey ) {
					return {
						...section,
						hiddenBlocks: updatedHiddenBlocks,
					};
				}
				return section;
			} );
			this.updateSections( newSections );
		};
	}

	onSectionTitleUpdate( updatedKey ) {
		return updatedTitle => {
			const newSections = this.state.sections.map( section => {
				if ( section.key === updatedKey ) {
					return {
						...section,
						title: updatedTitle,
					};
				}
				return section;
			} );
			this.updateSections( newSections );
		};
	}

	render() {
		const { query, path } = this.props;
		const { sections } = this.state;

		return (
			<Fragment>
				<H>{ __( 'Customizable Dashboard', 'woocommerce-admin' ) }</H>
				<ReportFilters query={ query } path={ path } />
				{ sections.map( section => {
					return (
						<Section
							component={ section.component }
							hiddenBlocks={ section.hiddenBlocks }
							key={ section.key }
							onChangeHiddenBlocks={ this.onChangeHiddenBlocks( section.key ) }
							onTitleUpdate={ this.onSectionTitleUpdate( section.key ) }
							path={ path }
							query={ query }
							title={ section.title }
							type={ section.key }
						/>
					);
				} ) }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getCurrentUserData } = select( 'wc-api' );
		const userData = getCurrentUserData();

		return {
			userPrefSections: userData.dashboard_sections,
		};
	} ),
	withDispatch( dispatch => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( CustomizableDashboard );
