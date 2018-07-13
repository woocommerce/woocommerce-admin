/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import D3Chart from 'components/d3/charts';
import dummyOrders from 'components/d3/charts/test/fixtures/dummy';
import Legend from 'components/legend';

class WidgetCharts extends Component {
	constructor() {
		super( ...arguments );
		this.getLegendData = this.getLegendData.bind( this );
		this.handleLegendToggle = this.handleLegendToggle.bind( this );
		this.state = {
			legend: this.getLegendData( dummyOrders ).map( d => ( { ...d, checked: true } ) ),
		};
	}

	getLegendData( data ) {
		const uniqueKeys = [
			...new Set(
				data.reduce( ( accum, curr ) => {
					Object.keys( curr ).forEach( key => key !== 'date' && accum.push( key ) );
					return accum;
				}, [] )
			),
		];
		return uniqueKeys
			.map( key => ( {
				key,
				total: data.reduce( ( a, c ) => a + c[ key ], 0 ),
			} ) )
			.sort( ( a, b ) => b.total - a.total );
	}

	handleLegendToggle( event ) {
		this.setState( {
			legend: this.state.legend.map( d => ( {
				...d,
				checked: d.key === event.target.id ? ! d.checked : d.checked,
			} ) ),
		} );
	}

	render() {
		return (
			<Card title={ __( 'Store Charts', 'wc-admin' ) }>
				<Legend data={ this.state.legend } handleLegendToggle={ this.handleLegendToggle } />
				<div className="woocommerce-dashboard__widget">
					<D3Chart
						className="woocommerce-dashboard__widget-bar-chart"
						data={ dummyOrders }
						height={ 300 }
						legend={ this.state.legend }
						type={ 'line' }
						width={ 1042 }
					/>
				</div>
				<div className="woocommerce-dashboard__widget">
					<D3Chart
						className="woocommerce-dashboard__widget-bar-chart"
						data={ dummyOrders }
						height={ 300 }
						legend={ this.state.legend }
						type={ 'bar' }
						width={ 1042 }
					/>
				</div>
			</Card>
		);
	}
}

export default WidgetCharts;
