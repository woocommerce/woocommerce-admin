/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import TimelineItem from './timeline-item';

const TimelineGroup = ( props ) => {
	const { group, className } = props;
	const groupClassName = classnames(
		'woocommerce-timeline-group',
		className
	);

	const timelineItems = group.items.map( ( item, itemIndex ) => {
		const itemKey = group.title + '-' + itemIndex;
		return <TimelineItem key={ itemKey } item={ item } />;
	} );

	return (
		<li className={ groupClassName }>
			<p className={ 'woocommerce-timeline-group__title' }>
				{ group.title }
			</p>
			<ul>{ timelineItems }</ul>
			<hr />
		</li>
	);
};

TimelineGroup.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * The group to render.
	 */
	group: PropTypes.shape( {
		/**
		 * The group title.
		 */
		title: PropTypes.string,
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
				 * Icon for the Timeline item.
				 */
				icon: PropTypes.element.isRequired,
				/**
				 * Headline displayed for the list item.
				 */
				headline: PropTypes.string.isRequired,
				/**
				 * Body displayed for the list item.
				 */
				body: PropTypes.arrayOf( PropTypes.element ),
			} )
		).isRequired,
	} ).isRequired,
};

TimelineGroup.defaultProps = {
	className: '',
	group: {
		title: '',
		items: [],
	},
};

export default TimelineGroup;
