import { useEffect } from '@wordpress/element';

export const useOutsideClick = ( ref, callback ) => {
	const handleClick = ( e ) => {
		if ( ref.current && ! ref.current.contains( e.target ) ) {
			callback();
		}
	};

	useEffect( () => {
		document.addEventListener( 'click', handleClick );

		return () => {
			document.removeEventListener( 'click', handleClick );
		};
	} );
};
