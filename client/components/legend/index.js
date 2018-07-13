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
		const { data, handleLegendHover, handleLegendToggle } = this.props;
		const d3Color = d3ScaleOrdinal().range( d3Range( 0, 1.1, 100 / ( data.length - 1 ) / 100 ) );
		const width = data.length <= 2 ? 240 : 320;
		return (
			<ul>
				{ data.map( ( row, i ) => (
					<li
						id={ row.key }
						onMouseOver={ handleLegendHover }
						onMouseOut={ handleLegendHover }
						onBlur={ handleLegendHover }
						onFocus={ handleLegendHover }
					>
						<label className="container" htmlFor={ row.key } id={ row.key }>
							<div className="legend" style={ { width: `${ width }px` } } id={ row.key }>
								<span className="key" id={ row.key }>
									{ row.key }
								</span>
								<span className="total" id={ row.key }>
									{ formatCurrency( row.total ) }
								</span>
							</div>
							<input
								id={ row.key }
								type="checkbox"
								checked={ row.visible }
								onChange={ handleLegendToggle }
							/>
							<span
								class="checkmark"
								id={ row.key }
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
	handleLegendHover: PropTypes.function,
};

export default Legend;
