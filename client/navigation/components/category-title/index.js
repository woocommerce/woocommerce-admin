/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { NAVIGATION_STORE_NAME, OPTIONS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './style.scss';
import { HighlightTooltip } from '../../../header/activity-panel/highlight-tooltip';

const tooltipHiddenOption = 'woocommerce_navigation_favorite_tooltip_hidden';

export const CategoryTitle = ( { category } ) => {
	const { id, title } = category;

	const {
		favorites,
		isOptionResolving,
		isResolving,
		isTooltipHidden,
	} = useSelect( ( select ) => {
		return {
			favorites: select( NAVIGATION_STORE_NAME ).getFavorites(),
			isOptionResolving: select(
				OPTIONS_STORE_NAME
			).isResolving( 'getOption', [ tooltipHiddenOption ] ),
			isResolving: select( NAVIGATION_STORE_NAME ).isResolving(
				'getFavorites'
			),
			isTooltipHidden:
				select( OPTIONS_STORE_NAME ).getOption(
					tooltipHiddenOption
				) === 'yes',
		};
	} );

	const { addFavorite, removeFavorite } = useDispatch(
		NAVIGATION_STORE_NAME
	);
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	const isFavorited = ( favorites || [] ).includes( id );
	const className = 'woocommerce-navigation-category-title';

	const toggleFavorite = () => {
		const toggle = isFavorited ? removeFavorite : addFavorite;
		toggle( id );
		recordEvent( 'navigation_favorite', {
			id,
			action: isFavorited ? 'unfavorite' : 'favorite',
		} );
	};

	if ( [ 'plugins', 'favorites' ].includes( category.menuId ) ) {
		return (
			<span className={ className }>
				<span className={ `${ className }__text` }>{ title }</span>
				{ ! isResolving && (
					<>
						<Button
							className={ `${ className }__favorite-button` }
							isTertiary
							onClick={ toggleFavorite }
							icon={ isFavorited ? 'star-filled' : 'star-empty' }
							aria-label={
								isFavorited
									? __(
											'Add this item to your favorites.',
											'woocommerce-admin'
									  )
									: __(
											'Remove this item from your favorites.',
											'woocommerce-admin'
									  )
							}
						/>
						{ ! isTooltipHidden && ! isOptionResolving && (
							<HighlightTooltip
								delay={ 1000 }
								title={ __(
									'Introducing favorites',
									'woocommerce-admin'
								) }
								content={ __(
									'You can now favorite your extensions to pin them in the top level of the navigation.',
									'woocommerce-admin'
								) }
								closeButtonText={ __(
									'Got it',
									'woocommerce-admin'
								) }
								id="woocommerce-navigation-category-title__favorite-button"
								onClose={ () =>
									updateOptions( {
										[ tooltipHiddenOption ]: 'yes',
									} )
								}
								useAnchor
							/>
						) }
					</>
				) }
			</span>
		);
	}

	return <span className={ className }>{ title }</span>;
};

export default CategoryTitle;
