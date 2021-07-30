/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { useUser, OPTIONS_STORE_NAME } from '@woocommerce/data';

const SHOW_MARKETPLACE_SUGGESTION_OPTION =
	'woocommerce_show_marketplace_suggestions';

const RecommendationsEligibilityWrapper: React.FC = ( { children } ) => {
	const { currentUserCan } = useUser();

	const isMarketplaceSuggestionsEnabled = useSelect( ( select ) => {
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );

		const isRequestingOptions = isResolving( 'getOption', [
			SHOW_MARKETPLACE_SUGGESTION_OPTION,
		] );
		const canShowMarketplaceSuggestions =
			getOption( SHOW_MARKETPLACE_SUGGESTION_OPTION ) === 'yes';

		return ! isRequestingOptions && canShowMarketplaceSuggestions;
	} );

	if ( ! currentUserCan( 'install_plugins' ) ) {
		return null;
	}

	if ( ! isMarketplaceSuggestionsEnabled ) {
		return null;
	}

	return <>{ children }</>;
};

export default RecommendationsEligibilityWrapper;
