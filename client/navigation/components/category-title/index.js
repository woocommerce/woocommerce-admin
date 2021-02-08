/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { NAVIGATION_STORE_NAME } from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */

export const CategoryTitle = ( { category } ) => {
	const { id, title } = category;

	const { favorites } = useSelect( ( select ) => {
		return {
			favorites: select( NAVIGATION_STORE_NAME ).getFavorites(),
		};
	} );

	const { addFavorite, removeFavorite } = useDispatch(
		NAVIGATION_STORE_NAME
	);

	const isFavorite = favorites.includes( id );
	const className = 'woocommerce-navigation-category-title';

	if ( category.menuId === 'plugins' ) {
		return (
			<span className={ className }>
				<span className={ `${ className }__text` }>{ title }</span>
				<Button
					className={ `${ className }__favorite-button` }
					isTertiary
					onClick={ () =>
						isFavorite ? removeFavorite( id ) : addFavorite( id )
					}
					icon={ isFavorite ? 'star-filled' : 'star-empty' }
					aria-label={ 'Add this extension to your favorites.' }
				/>
			</span>
		);
	}

	return <span className={ className }>{ title }</span>;
};

export default CategoryTitle;
