/**
 * External dependencies
 */
import GridIcon from 'gridicons';

export default [
	{
		datetime: new Date( 2020, 0, 20, 1, 30 ).getTime() / 1000,
		body: [ <p key={ '1' }>{ 'p element in body' }</p>, 'string in body' ],
		headline: <p>{ 'p tag in headline' }</p>,
		icon: (
			<GridIcon
				className={ 'is-success' }
				icon={ 'checkmark' }
				size={ 16 }
			/>
		),
		hideTimestamp: true,
	},
	{
		datetime: new Date( 2020, 0, 20, 23, 45 ).getTime() / 1000,
		body: [],
		headline: <span>{ 'span in headline' }</span>,
		icon: (
			<GridIcon
				className={ 'is-warning' }
				icon={ 'refresh' }
				size={ 16 }
			/>
		),
	},
	{
		datetime: new Date( 2020, 0, 22, 15, 13 ).getTime() / 1000,
		body: [ <span key={ '1' }>{ 'span in body' }</span> ],
		headline: 'string in headline',
		icon: (
			<GridIcon className={ 'is-error' } icon={ 'cross' } size={ 16 } />
		),
	},
	{
		datetime: new Date( 2020, 0, 17, 1, 45 ).getTime() / 1000,
		headline: 'undefined body and string headline',
		icon: <GridIcon icon={ 'cross' } size={ 16 } />,
	},
];
