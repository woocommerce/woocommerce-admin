/**
 * External dependencies
 */
import { date, text } from '@storybook/addon-knobs';
import GridIcon from 'gridicons';

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
				datetime: itemDate(
					'event 1 date',
					new Date( 2020, 0, 20, 1, 30 )
				),
				body: [
					<p key={ '1' }>
						{ text( 'event 1, first event', 'foo happened' ) }
					</p>,
					<p key={ '2' }>
						{ text( 'event 1, second event', 'bar happened' ) }
					</p>,
				],
				headline: (
					<p>{ text( 'event 1, headline', '2 events in body' ) }</p>
				),
				icon: (
					<GridIcon
						className={ 'is-success' }
						icon={ text( 'event 1 gridicon', 'checkmark' ) }
						size={ 16 }
					/>
				),
			},
			{
				datetime: itemDate(
					'event 2 date',
					new Date( 2020, 0, 20, 23, 45 )
				),
				body: [],
				headline: <p>{ text( 'event 2, headline', 'empty body' ) }</p>,
				icon: (
					<GridIcon
						className={ 'is-warning' }
						icon={ text( 'event 2 gridicon', 'refresh' ) }
						size={ 16 }
					/>
				),
				hideTimestamp: true,
			},
			{
				datetime: itemDate(
					'event 3 date',
					new Date( 2020, 0, 22, 15, 13 )
				),
				body: [
					<p key={ '1' }>
						{ text( 'event 3, second event', 'baz happened' ) }
					</p>,
				],
				headline: (
					<p>{ text( 'event 3, headline', '1 event in body' ) }</p>
				),
				icon: (
					<GridIcon
						className={ 'is-error' }
						icon={ text( 'event 3 gridicon', 'cross' ) }
						size={ 16 }
					/>
				),
			},
		] }
	/>
);
