<?php
/**
 * Generates a usage PHP array of feature flags, based on the config used by the client application.
 *
 * @package WooCommerce Admin
 */

$phase = isset( $_SERVER['WC_ADMIN_PHASE'] ) ? $_SERVER['WC_ADMIN_PHASE'] : ''; // WPCS: sanitization ok.
if ( empty( $phase ) || ! in_array( $phase, array( 'development', 'beta', 'plugin', 'core' ) ) ) {
	$phase = 'core';
}
$config_json = file_get_contents( 'config/' . $phase . '.json' );
$config      = json_decode( $config_json );

$write  = "<?php\n";
$write .= "// This file is auto-generated as part of the build process. Changing values here without the correct JavaScript may break things.\n";
$write .= "function wc_admin_get_feature_config() {\n";
$write .= "\treturn array(\n";
foreach ( $config->features as $feature => $bool ) {
	$write .= "\t\t'{$feature}' => " . ( $bool ? 'true' : 'false' ) . ",\n";
}
$write .= "\t);\n";
$write .= "}\n\n";
$write .= "define( 'WC_ADMIN_PHASE', '{$phase}' );\n";

$config_file = fopen( 'includes/feature-config.php', 'w' );
fwrite( $config_file, $write );
fclose( $config_file );
