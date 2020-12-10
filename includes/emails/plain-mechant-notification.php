<?php
/**
 * Merchant notification email (plain text)
 *
 * @package WooCommerce\Admin\Templates\Emails\HTML
 */

defined( 'ABSPATH' ) || exit;

echo "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n";
echo esc_html( wp_strip_all_tags( $email_heading ) );
echo "\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\n";

/* translators: %1$s: report name, %2$s: download URL */
echo wp_kses_post( $email_content );
echo wp_kses_post( sprintf( __( 'Please click here: %s', 'woocommerce-admin' ), $email_action->query ) );

echo "\n\n----------------------------------------\n\n";

echo wp_kses_post( apply_filters( 'woocommerce_email_footer_text', get_option( 'woocommerce_email_footer_text' ) ) );
