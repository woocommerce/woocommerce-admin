/** @format */

/**
 * External dependencies
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component, createRef } from '@wordpress/element';
import { isEqual, throttle } from 'lodash';
import { select as d3Select } from 'd3-selection';

/**
 * Internal dependencies
 */
import { drawAxis } from '../utils/axis';
import { drawBars } from '../utils/bar-chart';
import { drawLines } from '../utils/line-chart';
import { hideTooltip } from '../utils/tooltip';

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
	constructor( props ) {
		super( props );

		this.chartRef = createRef();

		this.delayedScroll = throttle( () => {
			hideTooltip( this.chartRef.current, props.tooltipRef.current );
		}, 300 );
	}

	componentDidMount() {
		this.drawChart();
	}

	shouldComponentUpdate( nextProps ) {
		return (
			this.props.className !== nextProps.className ||
			! isEqual( this.props.data, nextProps.data ) ||
			! isEqual( this.props.orderedKeys, nextProps.orderedKeys ) ||
			this.props.height !== nextProps.height ||
			this.props.type !== nextProps.type ||
			this.props.width !== nextProps.width
		);
	}

	componentDidUpdate() {
		this.drawChart();
	}

	componentWillUnmount() {
		this.deleteChart();
	}

	deleteChart() {
		d3Select( this.chartRef.current )
			.selectAll( 'svg' )
			.remove();
	}

	drawChart() {
		const node = this.getContainer();
		const { data, getParams, tooltipRef, type } = this.props;
		const params = getParams();
		const adjParams = Object.assign( {}, params, {
			height: params.adjHeight,
			width: params.adjWidth,
			tooltip: tooltipRef.current,
			valueType: params.valueType,
		} );

		const g = node
			.attr( 'id', 'chart' )
			.append( 'g' )
			.attr( 'transform', `translate(${ params.margin.left },${ params.margin.top })` );

		drawAxis( g, adjParams );
		type === 'line' && drawLines( g, data, adjParams );
		type === 'bar' && drawBars( g, data, adjParams );
	}

	getContainer() {
		const { className, height, width } = this.props;

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

	render() {
		return (
			<div className={ classNames( 'd3-base', this.props.className ) } ref={ this.chartRef } onScroll={ this.delayedScroll } />
		);
	}
}

D3Base.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
	orderedKeys: PropTypes.array, // required to detect changes in data
	type: PropTypes.string,
};
