<?php
/**
 * Merchant notification email
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
<?php foreach ( $email_actions as $an_action ) : ?>
<div>
	<a href="<?php echo esc_url( $an_action->query ); ?>">
		<?php
			echo esc_html( $an_action->label );
		?>
	</a>
</div>
<?php endforeach; ?>
<div style="opacity: 0;">
	<img src="<?php echo esc_url( $opened_tracking_url ); ?>" />
</div>
<?php
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
