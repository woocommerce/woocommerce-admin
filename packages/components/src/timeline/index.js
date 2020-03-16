/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

const Timeline = ( { className, items } ) => {
	const timelineClassName = classnames( 'woocommerce-timeline', className );

	// Sort all the items reverse chronologically
	items.sort( function( a, b ) {
		return a.datetime - b.datetime;
	} );

	// Group the items into local day collections
	const days = [];

	items.forEach( function( item ) {
		const itemLocalDatetime = moment.unix( item.datetime );
		const dayNum = parseInt( itemLocalDatetime.format( 'YYYYMMDD' ), 10 );
		if ( ! ( dayNum in days ) ) {
			days[ dayNum ] = [];
		}
		days[ dayNum ].push( item );
	} );

	if ( 0 === items.count ) {
		return (
			<div className={ timelineClassName }>
				<p class="timeline_no_events">
					{ __( 'No events to display' ) }
				</p>
			</div>
		);
	}

	return (
		<div className={ timelineClassName }>
			<ul>
				{ days.map( function( day, dayNum ) {
					const dayString = moment( dayNum ).format( 'MMMM D, YYYY' );
					return (
						<li key={ dayNum }>
							{ dayString }
							<ul>
								{ day.map( function( item ) {
									const timeString = moment( item.datetime ).format( 'h:mma' );
									return (
										<li>
											{ item.headline } <span>{ timeString }</span>
											{ item.body.map( function( line ) {
												return (
													<p>
														{ line }
													</p>
												);
											} ) }
										</li>
									);
								} ) }
							</ul>
						</li>
					);
				} ) }
			</ul>
		</div>
	);
};

Timeline.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * An array of list items.
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape( {
			/**
			 * Timestamp (in seconds) for the timeline item.
			 */
			datetime: PropTypes.number.isRequired,
			/**
			 * GridIcon for the Timeline item.
			 */
			gridicon: PropTypes.string.isRequired,
			/**
			 * Headline displayed for the list item.
			 */
			headline: PropTypes.string.isRequired,
			/**
			 * Body displayed for the list item.
			 */
			body: PropTypes.arrayOf(
				PropTypes.string
			),
		} )
	).isRequired,
};

export default Timeline;
