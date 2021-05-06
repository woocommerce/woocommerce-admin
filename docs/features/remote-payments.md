# WooCommerce Remote Payment Gateway Recommendations

This feature allows a remote data source to specify the currently recommended payment gateways.  The feature polls the remote JSON file to retrieve a list of recommended and visible gateways based on rulesets to be shown to the user.

Plugins from this source will then walk through an installer step, followed by a connection step with the minimum required fields for setup defined by the downloaded plugin.

## Enabling Remote Payment Gateway Recommendations

This feature is behind a feature flag.  In order for it to run, the `remote-payment-methods` must be set to `true` in `~/config/{environment}.json`.

Currently there is no working remote data source.  For testing purposes, [this plugin](https://github.com/joshuatf/woocommerce-admin-remote-tester) can be used which adds a data source and removes the transient cache so the data source is re-fetched on each subsequent page load.

## Remote Data Source Schema

The remote data source schema defines the recommended payment gateways and required plugins to kick of the setup process.  The goal of this config is to provide the mininum amount of information possible to show a list of gateways and allow the gateways themselves to define specifics around configuration.

```json
[
  {
    "key": "gateway-key",
    "locales": [
      {
        "locale": "en_US",
        "title": "Gateway Example",
        "content": "Content to be displayed in the recommended payment gateway list."
      }
    ],
    "image": "https://paymentgateway.com/path/to/image.png",
    "plugins": ["wp-org-plugin-slug"],
	"is_visible": [
		<Rule>,
		...
	]
  }
  ...
]
```

The remote specs use the [rule processor](https://github.com/woocommerce/woocommerce-admin/blob/main/src/RemoteInboxNotifications/README.md#rule) to determine if a gateway should be shown using the `is_visible`) property.

## Payment Gateway Configs

Information concerning the configuration and status of the payment gateway is determined by the payment gateway itself.  This allows a single source of truth for this information, but more importantly allows the latest and most accurate settings to be included with the plugin downloaded from WordPress.org.

Additional information is added to the existing payment gateway in the WooCommerce REST API response.  The following public methods can be added to the payment gateway class to pass information to the recommended payment gateways task:

Name | Return | Default | Description
--- | --- | --- | ---
`needs_setup()` | boolean | `false` | Used to determine if the gateway still requires setup in order to be used.
`get_required_settings_keys()` | array | `[]` | An array of keys for fields required to properly configure the gateway.  The keys must match those of already registered form fields in the payment gateway.
`get_oauth_connection_url()` | string | `null` | The oAuth connection URL to be used to quickly connect a payment gateway provider.  If provided, this will be used in place of required setting fields.
`get_post_install_script()` | string | `null` | A script URL to be dynamically loaded into a page after a gateway has been installed.  This is primarily used for `SlotFill`, but can allow any script to be added to assist in payment gateway setup.

## SlotFill

Payment gateway tasks can be SlotFilled to provide custom experiences.  This is useful if a gateway cannot follow the generic payment steps to be fully set up.  The entire payment gateway card can be SlotFilled using `WooRemotePayment` or simply SlotFill `WooRemotePaymentSettings` to leave the default installation and stepper in place.

```js
import {
	WooRemotePayment,
	WooRemotePaymentSettings,
} from '@woocommerce/components';
import { registerPlugin } from '@wordpress/plugins';

registerPlugin('my-gateway-fill', {
	render: () => (
		<>
			<WooRemotePayment id="gateway-key">
				{({ defaultStepper: DefaultStepper }) => (
					<>
						<h3>Custom Top Heading</h3>
						<DefaultStepper />
					</>
				)}
			</WooRemotePayment>
			<WooRemotePaymentSettings id="gateway-key">
				{({ defaultSettings: DefaultSettings, markConfigured }) => (
					<>
						<h4>Custom Sub-Heading</h4>
						<DefaultSettings
							onSubmit={() => {
								console.info(
									'Custom update function, marking configured'
								);
								markConfigured();
							}}
						/>
					</>
				)}
			</WooRemotePaymentSettings>
		</>
	),
});
```

Note that since plugin installation happens asynchronously, the page will not usually be refreshed between gateway installation and configuration.  This renders functions like `wp_enqueue_script` ineffective.  To solve this issue and allow `SlotFill` to work, the gateway can provide a URL to be loaded immediately after installation using `get_post_install_script()`.
