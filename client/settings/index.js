/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

const SettingsPage = () => {
	const [ actions, setActions ] = useState( {} );

	useEffect( () => {
		apiFetch( {
			path: addQueryArgs( 'wc-admin/hooks', {
				actions: 'woocommerce_settings_start',
			} ),
		} ).then( ( data ) => setActions( data ) );
	}, [] );

	return (
		<div>
			<div className="woocommerce-settings__start">
				<h2>Settings start section</h2>
				{ actions.woocommerce_settings_start && (
					<div
						dangerouslySetInnerHTML={ sanitizeHTML(
							actions.woocommerce_settings_start
						) }
					/>
				) }
			</div>

			<div className="woocommerce-settings_settings">
				<h2>Settings get looped over here</h2>
			</div>
		</div>
	);
};

export default SettingsPage;
