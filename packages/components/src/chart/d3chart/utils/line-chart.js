/** @format */

/**
 * External dependencies
 */
import { event as d3Event, select as d3Select } from 'd3-selection';
import { smallBreak, wideBreak } from './breakpoints';
import moment from 'moment';

/**
 * Internal dependencies
 */
import { getColor } from './color';
import { calculateTooltipPosition, hideTooltip, showTooltip } from './tooltip';

const handleMouseOverLineChart = ( date, parentNode, node, data, params, position ) => {
	d3Select( parentNode )
		.select( '.focus-grid' )
		.attr( 'opacity', '1' );
	showTooltip( params, data.find( e => e.date === date ), position );
};

const formatDateData = ( d, i, row, data ) => {
	const filteredData = data.filter( ( dataItem ) => dataItem.date === row.date )[ 0 ];
	const keys = Object.keys( filteredData ).filter( key => key !== 'date' );
	const values = keys.map( ( key ) => {
		return {
			axisDate: row.date,
			date: filteredData[ key ].labelDate,
			key,
			value: filteredData[ key ].value,
		};
	} );
	return {
		...row,
		i,
		visible: d.visible,
		key: d.key,
		values,
	};
};

export const drawLines = ( node, data, params ) => {
	const series = node
		.append( 'g' )
		.attr( 'class', 'lines' )
		.selectAll( '.line-g' )
		.data( params.lineData.filter( d => d.visible ).reverse() )
		.enter()
		.append( 'g' )
		.attr( 'class', 'line-g' )
		.attr( 'role', 'region' )
		.attr( 'aria-label', d => d.key );

	let lineStroke = params.width <= wideBreak || params.uniqueDates.length > 50 ? 2 : 3;
	lineStroke = params.width <= smallBreak ? 1.25 : lineStroke;
	const dotRadius = params.width <= wideBreak ? 4 : 6;

	series
		.append( 'path' )
		.attr( 'fill', 'none' )
		.attr( 'stroke-width', lineStroke )
		.attr( 'stroke-linejoin', 'round' )
		.attr( 'stroke-linecap', 'round' )
		.attr( 'stroke', d => getColor( d.key, params.orderedKeys, params.colorScheme ) )
		.style( 'opacity', d => {
			const opacity = d.focus ? 1 : 0.1;
			return d.visible ? opacity : 0;
		} )
		.attr( 'd', d => params.line( d.values ) );

	const minDataPointSpacing = 36;

	const dates = series
		.selectAll( 'g' )
		.data( ( d ) => d.values.map( ( row, i ) => formatDateData( d, i, row, data ) ) )
		.enter()
		.append( 'g' );

	params.width / params.uniqueDates.length > minDataPointSpacing &&
		dates
			.append( 'circle' )
			.attr( 'r', dotRadius )
			.attr( 'fill', d => getColor( d.key, params.orderedKeys, params.colorScheme ) )
			.attr( 'stroke', '#fff' )
			.attr( 'stroke-width', lineStroke + 1 )
			.style( 'opacity', d => {
				const opacity = d.focus ? 1 : 0.1;
				return d.visible ? opacity : 0;
			} )
			.attr( 'cx', d => params.xScale( moment( d.date ).toDate() ) + params.widthPerDate / 2 )
			.attr( 'cy', d => params.yScale( d.value ) )
			.attr( 'tabindex', '0' )
			.attr( 'aria-label', d => {
				const label = d.label
					? d.label
					: params.tooltipLabelFormat( d.date instanceof Date ? d.date : moment( d.date ).toDate() );
				return `${ label } ${ params.tooltipValueFormat( d.value ) }`;
			} )
			.on( 'focus', ( d, i, nodes ) => {
				const position = calculateTooltipPosition(
					d3Event.target,
					node.node(),
					params.tooltipPosition
				);
				handleMouseOverLineChart( d.date, nodes[ i ].parentNode, node, data, params, position );
			} )
			.on( 'blur', ( d, i, nodes ) => hideTooltip( nodes[ i ].parentNode, params.tooltip ) );

	const focus = dates
		.append( 'g' )
		.attr( 'class', 'focus' );

	const focusGrid = focus
		.append( 'g' )
		.attr( 'class', 'focus-grid' )
		.attr( 'opacity', '0' );

	focusGrid
		.append( 'line' )
		.attr( 'x1', d => params.xScale( moment( d.date ).toDate() ) + params.widthPerDate / 2 )
		.attr( 'y1', 0 )
		.attr( 'x2', d => params.xScale( moment( d.date ).toDate() ) + params.widthPerDate / 2 )
		.attr( 'y2', params.height );

	focusGrid
		.selectAll( 'circle' )
		.data( d => d.values.reverse() )
		.enter()
		.append( 'circle' )
		.attr( 'r', dotRadius + 2 )
		.attr( 'fill', d => getColor( d.key, params.orderedKeys, params.colorScheme ) )
		.attr( 'stroke', '#fff' )
		.attr( 'stroke-width', lineStroke + 2 )
		.attr( 'cx', d => params.xScale( moment( d.axisDate ).toDate() ) + params.widthPerDate / 2 )
		.attr( 'cy', d => params.yScale( d.value ) );

	focus
		.append( 'rect' )
		.attr( 'class', 'focus-g' )
		.attr( 'x', d => params.xScale( moment( d.date ).toDate() ) )
		.attr( 'y', 0 )
		.attr( 'width', params.widthPerDate )
		.attr( 'height', params.height )
		.attr( 'opacity', 0 )
		.on( 'mouseover', ( d, i, nodes ) => {
			const position = calculateTooltipPosition(
				d3Event.target,
				node.node(),
				params.tooltipPosition,
				0.5
			);
			handleMouseOverLineChart( d.date, nodes[ i ].parentNode, node, data, params, position );
		} )
		.on( 'mouseout', ( d, i, nodes ) => hideTooltip( nodes[ i ].parentNode, params.tooltip ) );
};
