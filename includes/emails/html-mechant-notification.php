<?php
/**
 * Merchant notification
 *
 * @package WooCommerce\Admin\Templates\Emails\HTML
 */

defined( 'ABSPATH' ) || exit;

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action( 'woocommerce_email_header', $email_heading, $email );

echo esc_html( $email_content );
?>

<a href="<?php echo esc_url( $email_action->query ); ?>">
	<?php
		echo esc_html( $email_action->label );
	?>
</a>
<?php
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
