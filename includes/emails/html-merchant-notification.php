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

$base_color       = get_option( 'woocommerce_email_base_color' );
$base_text        = wc_light_or_dark( $base_color, '#202020', '#ffffff' );
$container_styles = 'margin-top: 25px;';
$buttons_styles   = "
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 18px;
	text-align: center;
	color: {$base_text};
	margin-right: 15px;
	text-decoration: none;
	background: {$base_color};
	border: 1px solid {$base_color};
	border-radius: 3px;
	padding: 5px;";
?>
<?php foreach ( $email_actions as $an_action ) : ?>
<div style="<?php echo esc_attr( $container_styles ); ?>">
	<a href="<?php echo esc_url( $trigger_note_action_url . $an_action->id ); ?>" style="<?php echo esc_attr( $buttons_styles ); ?>">
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
