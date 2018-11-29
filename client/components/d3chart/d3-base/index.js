/** @format */

/**
 * External dependencies
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component, createRef } from '@wordpress/element';
import { isEqual } from 'lodash';
import { select as d3Select } from 'd3-selection';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Provides foundation to use D3 within React.
 *
 * React is responsible for determining when a chart should be updated (e.g. whenever data changes or the browser is
 * resized), while D3 is responsible for the actual rendering of the chart (which is performed via DOM operations that
 * happen outside of React's control).
 *
 * This component makes use of new lifecycle methods that come with React 16.3. Thus, while this component (i.e. the
 * container of the chart) is rendered during the 'render phase' the chart itself is only rendered during the 'commit
 * phase' (i.e. in 'componentDidMount' and 'componentDidUpdate' methods).
 */
export default class D3Base extends Component {
	chartRef = createRef();

	componentDidMount() {
		window.addEventListener( 'resize', this.getUpdatedParams );

		this.drawUpdatedChart();
	}

	shouldComponentUpdate( nextProps ) {
		return (
			this.props.className !== nextProps.className ||
			! isEqual( this.props.data, nextProps.data ) ||
			this.props.type !== nextProps.type ||
			this.props.width !== nextProps.width
		);
	}

	componentDidUpdate() {
		this.drawUpdatedChart();
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.getUpdatedParams );

		this.deleteChart();
	}

	deleteChart() {
		d3Select( this.chartRef.current )
			.selectAll( 'svg' )
			.remove();
	}

	/**
	 * Renders the chart, or triggers a rendering by updating the list of params.
	 */
	drawUpdatedChart() {
		const { drawChart } = this.props;
		const params = this.getUpdatedParams();

		const svg = this.getContainer( params );
		drawChart( svg, params, this.props.width );
	}

	getContainer( params ) {
		const { className } = this.props;
		const { height, width } = params;

		this.deleteChart();

		const svg = d3Select( this.chartRef.current )
			.append( 'svg' )
			.attr( 'viewBox', `0 0 ${ width } ${ height }` )
			.attr( 'height', height )
			.attr( 'width', width )
			.attr( 'preserveAspectRatio', 'xMidYMid meet' );

		if ( className ) {
			svg.attr( 'class', `${ className }__viewbox` );
		}

		return svg.append( 'g' );
	}

	getUpdatedParams() {
		const { getParams } = this.props;
		return getParams( this.chartRef.current );
	}

	render() {
		return (
			<div className={ classNames( 'd3-base', this.props.className ) } ref={ this.chartRef } />
		);
	}
}

D3Base.propTypes = {
	className: PropTypes.string,
	data: PropTypes.any, // required to detect changes in data
	drawChart: PropTypes.func.isRequired,
	getParams: PropTypes.func.isRequired,
	type: PropTypes.string,
};
