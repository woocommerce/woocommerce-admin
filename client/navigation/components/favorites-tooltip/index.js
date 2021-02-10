/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { HighlightTooltip } from '../../../header/activity-panel/highlight-tooltip';

const tooltipHiddenOption = 'woocommerce_navigation_favorites_tooltip_hidden';

export const FavoritesTooltip = () => {
	const { isOptionResolving, isTooltipHidden } = useSelect( ( select ) => {
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );
		return {
			isOptionResolving: isResolving( 'getOption', [
				tooltipHiddenOption,
			] ),
			isTooltipHidden: getOption( tooltipHiddenOption ) === 'yes',
		};
	} );

	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	if ( isTooltipHidden || isOptionResolving ) {
		return null;
	}

	return (
		<HighlightTooltip
			delay={ 1000 }
			title={ __( 'Introducing favorites', 'woocommerce-admin' ) }
			content={ __(
				'You can now favorite your extensions to pin them in the top level of the navigation.',
				'woocommerce-admin'
			) }
			closeButtonText={ __( 'Got it', 'woocommerce-admin' ) }
			id="woocommerce-navigation-category-title__favorite-button"
			onClose={ () =>
				updateOptions( {
					[ tooltipHiddenOption ]: 'yes',
				} )
			}
			useAnchor
		/>
	);
};

export default FavoritesTooltip;
