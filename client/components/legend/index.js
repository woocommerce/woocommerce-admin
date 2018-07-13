/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { scaleOrdinal as d3ScaleOrdinal } from 'd3-scale';
import { interpolateViridis as d3InterpolateViridis } from 'd3-scale-chromatic';
import { range as d3Range } from 'd3-array';
import { formatCurrency } from 'lib/currency';

/**
 * Internal dependencies
 */
import './style.scss';

class Legend extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { data, handleLegendToggle } = this.props;
		const d3Color = d3ScaleOrdinal().range( d3Range( 0, 1.1, 100 / ( data.length - 1 ) / 100 ) );
		return (
			<ul>
				{ data.map( ( row, i ) => (
					<li key={ i }>
						<label className="container" htmlFor={ row.key }>
							{ row.key } - { formatCurrency( row.total ) }
							<input
								id={ row.key }
								type="checkbox"
								checked={ row.checked }
								onChange={ handleLegendToggle }
							/>
							<span
								class="checkmark"
								style={ { 'background-color': d3InterpolateViridis( d3Color( i ) ) } }
							/>
						</label>
					</li>
				) ) }
			</ul>
		);
	}
}

Legend.propTypes = {
	data: PropTypes.array.isRequired,
	handleLegendToggle: PropTypes.function,
};

export default Legend;
