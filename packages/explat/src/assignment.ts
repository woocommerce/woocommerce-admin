/**
 * External dependencies
 */
import { stringify } from 'qs';
import { applyFilters } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';

const EXPLAT_VERSION = '0.1.0';

const _fetchExperimentAssignment = async ( {
	url,
	path,
	experimentName,
	anonId,
}: {
	url?: string;
	path?: string;
	experimentName: string;
	anonId: string | null;
} ): Promise< unknown > => {
	if ( ! window.wcTracks?.isEnabled ) {
		throw new Error(
			`Tracking is disabled, can't fetch experimentAssignment`
		);
	}

	if ( ! url && ! path ) {
		throw new Error( 'Url or path is required' );
	}

	/**
	 * List of URL query parameters to be sent to the server.
	 *
	 * @filter woocommerce_explat_request_args
	 * @example
	 * addFilter(
	 * 	'woocommerce_explat_request_args',
	 * 	'woocommerce_explat_request_args',
	 * ( args ) => {
	 * 	args.experimentName = 'my-experiment';
	 * 	return args;
	 * });
	 *
	 */
	const queryString = stringify(
		applyFilters( 'woocommerce_explat_request_args', {
			experiment_name: experimentName,
			anon_id: anonId ?? undefined,
			woo_country_code:
				window.wcSettings?.preloadSettings?.general
					?.woocommerce_default_country ||
				window.wcSettings?.admin?.preloadSettings?.general
					?.woocommerce_default_country,
		} )
	);

	const response = await apiFetch( {
		url: url && `${ url }?${ queryString }`,
		path: path && `${ path }?${ queryString }`,
	} );
	return response;
};

export const fetchExperimentAssignment = async ( {
	experimentName,
	anonId,
}: {
	experimentName: string;
	anonId: string | null;
} ): Promise< unknown > =>
	_fetchExperimentAssignment( {
		url: `https://public-api.wordpress.com/wpcom/v2/experiments/${ EXPLAT_VERSION }/assignments/woocommerce`,
		experimentName,
		anonId,
	} );

export const fetchExperimentAssignmentWithAuth = async ( {
	experimentName,
	anonId,
}: {
	experimentName: string;
	anonId: string | null;
} ): Promise< unknown > =>
	_fetchExperimentAssignment( {
		// Send the request to our backend server to get the assignment with a user token via Jetpack.
		path: '/wc-admin/experiments/assignment',
		experimentName,
		anonId,
	} );
