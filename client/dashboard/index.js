/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment, createElement } from '@wordpress/element';
import { forEach, filter } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'layout/header';
import StorePerformance from './store-performance';
import TopSellingProducts from './top-selling-products';
import Chart from 'components/chart/example';
import Card from 'components/card';
import ScreenSettings from './screen-settings';

export default class Dashboard extends Component {
	constructor() {
		super( ...arguments );
		this.state = {};

		this.onScreenSettingToggle = this.onScreenSettingToggle.bind( this );
	}

	// TODO Persist this data from user preferences instead of defaulting to true.
	componentDidMount() {
		const blocks = this.getDashboardBlocks();
		forEach( blocks, block => {
			this.setState( { [ block.id ]: true } );
		} );
	}

	getDashBoardSections() {
		return [ 'main', 'columns' ];
	}

	getDashboardBlocks() {
		return [
			{
				id: 'performance',
				label: __( 'Performance', 'wc-admin' ),
				component: StorePerformance,
				section: 'main',
			},
			{
				id: 'chart',
				label: __( 'Chart', 'wc-admin' ),
				component: Chart,
				section: 'main',
			},
			{
				id: 'top-selling-products',
				label: __( 'Top Selling Products', 'wc-admin' ),
				component: TopSellingProducts,
				section: 'columns',
			},
			{
				id: 'test-card',
				label: __( 'Column 2/1 Orders', 'wc-admin' ),
				component: Card,
				props: {
					title: __( 'Column 2/1 Orders', 'wc-admin' ),
				},
				section: 'columns',
			},
		];
	}

	renderDashboardBlocks() {
		const dashboardSections = this.getDashBoardSections();
		const dashboardBlocks = this.getDashboardBlocks();

		return dashboardSections.map( function( section ) {
			const blocks = filter( dashboardBlocks, { section } );
			return (
				<div className={ 'woocommerce-dashboard__' + section } key={ section }>
					{ blocks.map( function( block ) {
						const props = block.props ? { ...block.props, key: block.id } : { key: block.id };
						return this.state[ block.id ] ? createElement( block.component, props ) : null;
					}, this ) }
				</div>
			);
		}, this );
	}

	onScreenSettingToggle( blockId ) {
		return () => {
			this.setState( state => ( { [ blockId ]: ! state[ blockId ] } ) );
		};
	}

	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'wc-admin' ) ] } />
				<ScreenSettings
					blocks={ this.getDashboardBlocks() }
					blockStates={ this.state }
					onScreenSettingToggle={ this.onScreenSettingToggle }
				/>
				<div className="woocommerce-dashboard__blocks">{ this.renderDashboardBlocks() }</div>
			</Fragment>
		);
	}
}
