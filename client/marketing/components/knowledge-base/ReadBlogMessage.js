/**
 * External dependencies
 */
import { _x } from '@wordpress/i18n';

const ReadBlogMessage = () => {
	const message1 = _x(
		'Read ',
		'Read <a href="https://woocommerce.com/blog/marketing/coupons/">the WooCommerce blog</a> for more tips on marketing your store',
		'woocommerce-admin'
	);

	const message2 = _x(
		'the WooCommerce blog',
		'Read <a href="https://woocommerce.com/blog/marketing/coupons/">the WooCommerce blog</a> for more tips on marketing your store',
		'woocommerce-admin'
	);

	const message3 = _x(
		' for more tips on marketing your store',
		'Read <a href="https://woocommerce.com/blog/marketing/coupons/">the WooCommerce blog</a> for more tips on marketing your store',
		'woocommerce-admin'
	);

	return (
		<>
			{ message1 }
			<a href="https://woocommerce.com/blog/marketing/coupons/">
				{ message2 }
			</a>
			{ message3 }
		</>
	);
};

export default ReadBlogMessage;
