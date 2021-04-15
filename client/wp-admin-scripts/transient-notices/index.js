/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';

/* global notices */

notices.forEach( ( notice ) => {
	dispatch( 'core/notices' ).createNotice(
		notice.status,
		notice.content,
		notice.options || {}
	);
} );
