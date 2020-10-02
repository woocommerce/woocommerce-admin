/**
 * External dependencies
 */
import { withState } from '@wordpress/compose';
import { ImageUpload } from '@woocommerce/components';

export const Basic = withState( {
	image: null,
} )( ( { setState, logo } ) => (
	<ImageUpload
		image={ logo }
		onChange={ ( image ) => setState( { logo: image } ) }
	/>
) );

export default {
	title: 'WooCommerce Admin/components/ImageUpload',
	component: ImageUpload,
};
