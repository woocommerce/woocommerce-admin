/**
 * External dependencies
 */
import { date, text } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import Timeline from '../';

export default {
	title: 'WooCommerce Admin/components/Timeline',
	component: Timeline,
};

export const Empty = () => <Timeline />;

const itemDate = ( label, value ) => {
	const d = date( label, value );
	return parseInt( d, 10 ) / 1000;
};

export const Filled = () => (
	<Timeline
		items={ [
			{
				datetime: itemDate( 'event 1 date', new Date( 'Jan 20 2020' ) ),
				body: [
					text( 'event 1, first event', 'foo happened' ),
					text( 'event 1, second event', 'bar happened' ),
				],
				headline: text( 'event 1, headline', 'headline' ),
				gridicon: text( 'event 1 gridicon', 'plus' ),
			},
			{
				datetime: itemDate( 'event 2 date', new Date( 'Jan 22 2020' ) ),
				body: [
					text( 'event 2, first event', 'foo happened' ),
					text( 'event 2, second event', 'bar happened' ),
				],
				headline: text( 'event 2, headline', 'headline' ),
				gridicon: text( 'event 2 gridicon', 'plus' ),
			},
		] }
	/>
);
