/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

export const Products = () => {
	const [ markup, setMarkup ] = useState( null );

	useEffect( () => {
		const hiddenDiv = document.querySelector( '.woo-new-products-hidden' );

		setMarkup(
			[ ...hiddenDiv.children ].map( ( child ) => ( {
				actionName: child.className.replace( 'action_', '' ),
				content: child.innerHTML,
			} ) )
		);
	}, [] );

	return (
		<div className="woo-new-products">
			<h3>Product Page Hooks</h3>
			{ markup &&
				markup.map( ( action ) => (
					<>
						<h4>{ action.actionName }</h4>
						<div
							dangerouslySetInnerHTML={ {
								__html: action.content,
							} }
						/>
					</>
				) ) }
		</div>
	);
};
