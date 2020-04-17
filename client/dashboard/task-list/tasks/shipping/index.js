/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { difference, filter } from 'lodash';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Link, Stepper, Plugins } from '@woocommerce/components';
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import { SETTINGS_STORE_NAME, PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import Connect from 'dashboard/components/connect';
import { getCountryCode } from 'dashboard/utils';
import StoreLocation from '../steps/location';
import ShippingRates from './rates';
import { recordEvent } from 'lib/tracks';

class Shipping extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPending: false,
			stepIndex: null,
			isFetchingShippingZones: false,
			shippingZones: [],
		};

		// Cache active plugins to prevent removal mid-step.
<<<<<<< HEAD
		this.activePlugins = props.activePlugins;
		this.state = this.initialState;
=======
		const { activePlugins = [] } = getSetting( 'onboarding', {} );
		this.activePlugins = activePlugins;
>>>>>>> 1db398d3... Move most state handling to mapSelectToProps in Shipping component.
		this.goToNextStep = this.goToNextStep.bind( this );
	}

	componentDidMount() {
		if ( this.props.isWaitingForSettings ) {
			// We need to wait until we have received the initial settings
			// to set the first step, since whether steps should be considered
			// complete depends on the settings; otherwise, we may show a
			// step when it isn't necessary.
			return;
		}

		this.goToFirstStep();
	}

	async fetchShippingZones() {
		// Don't fetch shipping zones multiple times concurrently.
		if ( this.state.isFetchingShippingZones ) {
			return;
		}

		this.setState( { isPending: true, isFetchingShippingZones: true } );
		const { countryCode, countryName } = this.props;

		// @todo The following fetches for shipping information should be moved into
		// the wc-api to make these methods and states more readily available.
		const shippingZones = [];
		const zones = await apiFetch( { path: '/wc/v3/shipping/zones' } );
		let hasCountryZone = false;

		await Promise.all(
			zones.map( async ( zone ) => {
				// "Rest of the world zone"
				if ( zone.id === 0 ) {
					zone.methods = await apiFetch( {
						path: `/wc/v3/shipping/zones/${ zone.id }/methods`,
					} );
					zone.name = __( 'Rest of the world', 'woocommerce-admin' );
					zone.toggleable = true;
					shippingZones.push( zone );
					return;
				}

				// Return any zone with a single location matching the country zone.
				zone.locations = await apiFetch( {
					path: `/wc/v3/shipping/zones/${ zone.id }/locations`,
				} );
				const countryLocation = zone.locations.find(
					( location ) => countryCode === location.code
				);
				if ( countryLocation ) {
					zone.methods = await apiFetch( {
						path: `/wc/v3/shipping/zones/${ zone.id }/methods`,
					} );
					shippingZones.push( zone );
					hasCountryZone = true;
				}
			} )
		);

		// Create the default store country zone if it doesn't exist.
		if ( ! hasCountryZone ) {
			const zone = await apiFetch( {
				method: 'POST',
				path: '/wc/v3/shipping/zones',
				data: { name: countryName },
			} );
			zone.locations = await apiFetch( {
				method: 'POST',
				path: `/wc/v3/shipping/zones/${ zone.id }/locations`,
				data: [ { code: countryCode, type: 'country' } ],
			} );
			shippingZones.push( zone );
		}

		shippingZones.reverse();

		this.setState( {
			isPending: false,
			isFetchingShippingZones: false,
			shippingZones,
		} );
	}

	componentDidUpdate( prevProps ) {
		// If the country code has changed, or we don't have the shipping zones yet
		// fetch the shipping zones
		if (
			this.props.isStoreLocationComplete &&
			( prevProps.countryCode !== this.props.countryCode ||
				this.state.shippingZones.length === 0 )
		) {
			this.fetchShippingZones();
		}

		if (
			this.state.stepIndex === null &&
			! this.props.isWaitingForSettings
		) {
			// We are not currently on a step, and we now have the settings,
			// so we can proceed with going to the first step, or the success screen.
			this.goToFirstStep();
		}
	}

	goToFirstStep() {
		this.goToNextStep( 0 );
	}

	goToNextStep( forcedNextStepIndex ) {
		const { createNotice } = this.props;
		const { stepIndex } = this.state;
		const steps = this.getSteps();
		const nextStepIndex =
			typeof forcedNextStepIndex !== 'undefined'
				? forcedNextStepIndex
				: stepIndex + 1;
		const nextStep = steps[ nextStepIndex ];

		if ( nextStep ) {
			if ( nextStep.isComplete ) {
				this.goToNextStep( nextStepIndex + 1 );
				return;
			}

			this.setState( { stepIndex: nextStepIndex } );
		} else {
			createNotice(
				'success',
				__(
					"📦 Shipping is done! Don't worry, you can always change it later.",
					'woocommerce-admin'
				)
			);
			// Return to the Dashboard
			getHistory().push( getNewPath( {}, '/', {} ) );
		}
	}

	getPluginsToActivate() {
		const { countryCode, isJetpackConnected } = this.props;

		const plugins = [];
		if ( [ 'GB', 'CA', 'AU' ].includes( countryCode ) ) {
			plugins.push( 'woocommerce-shipstation-integration' );
		} else if ( countryCode === 'US' ) {
			plugins.push( 'woocommerce-services' );

			if ( ! isJetpackConnected ) {
				plugins.push( 'jetpack' );
			}
		}
		return difference( plugins, this.activePlugins );
	}

	getSteps() {
		const {
			generalSettings,
			isGeneralSettingsRequesting,
			isStoreLocationComplete,
		} = this.props;
		const pluginsToActivate = this.getPluginsToActivate();

		const steps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __(
					'The address from which your business operates',
					'woocommerce-admin'
				),
				content: (
					<StoreLocation
						{ ...this.props }
						onComplete={ ( values ) => {
							const country = getCountryCode(
								values.countryState
							);
							recordEvent( 'tasklist_shipping_set_location', {
								country,
							} );
							this.goToNextStep();
						} }
						isSettingsRequesting={ isGeneralSettingsRequesting }
						settings={ generalSettings }
					/>
				),
				visible: true,
				isComplete: isStoreLocationComplete,
			},
			{
				key: 'rates',
				label: __( 'Set shipping costs', 'woocommerce-admin' ),
				description: __(
					'Define how much customers pay to ship to different destinations',
					'woocommerce-admin'
				),
				content: (
					<ShippingRates
						buttonText={
							pluginsToActivate.length
								? __( 'Proceed', 'woocommerce-admin' )
								: __( 'Complete task', 'woocommerce-admin' )
						}
						shippingZones={ this.state.shippingZones }
						onComplete={ this.goToNextStep }
						{ ...this.props }
					/>
				),
				visible: true,
				isComplete: false,
			},
			{
				key: 'label_printing',
				label: __(
					'Enable shipping label printing',
					'woocommerce-admin'
				),
				description: pluginsToActivate.includes(
					'woocommerce-shipstation-integration'
				)
					? interpolateComponents( {
							mixedString: __(
								'We recommend using ShipStation to save time at the post office by printing your shipping ' +
									'labels at home. Try ShipStation free for 30 days. {{link}}Learn more{{/link}}.',
								'woocommerce-admin'
							),
							components: {
								link: (
									<Link
										href="https://woocommerce.com/products/shipstation-integration"
										target="_blank"
										type="external"
									/>
								),
							},
					  } )
					: __(
							'With WooCommerce Services and Jetpack you can save time at the ' +
								'Post Office by printing your shipping labels at home',
							'woocommerce-admin'
					  ),
				content: (
					<Plugins
						onComplete={ () => {
							recordEvent( 'tasklist_shipping_label_printing', {
								install: true,
								pluginsToActivate,
							} );
							this.goToNextStep();
						} }
						onSkip={ () => {
							recordEvent( 'tasklist_shipping_label_printing', {
								install: false,
								pluginsToActivate,
							} );
							// Return to the Dashboard
							getHistory().push( getNewPath( {}, '/', {} ) );
						} }
						pluginSlugs={ pluginsToActivate }
						{ ...this.props }
					/>
				),
				visible: pluginsToActivate.length,
				isComplete: false,
			},
			{
				key: 'connect',
				label: __( 'Connect your store', 'woocommerce-admin' ),
				description: __(
					'Connect your store to WordPress.com to enable label printing',
					'woocommerce-admin'
				),
				content: (
					<Connect
						redirectUrl={ getAdminLink(
							'admin.php?page=wc-admin'
						) }
						completeStep={ this.goToNextStep }
						{ ...this.props }
						onConnect={ () => {
							recordEvent( 'tasklist_shipping_connect_store' );
						} }
					/>
				),
				visible: pluginsToActivate.includes( 'jetpack' ),
			},
		];

		return filter( steps, ( step ) => step.visible );
	}

	render() {
		const { isPending, stepIndex } = this.state;
		const { isWaitingForSettings } = this.props;

		// Don't render anything if we are not yet on a step
		if ( stepIndex === null ) {
			return null;
		}

		const step = this.getSteps()[ stepIndex ];

		return (
			<div className="woocommerce-task-shipping">
				<Card className="is-narrow">
					<Stepper
						isPending={ isPending || isWaitingForSettings }
						isVertical
						currentStep={ step.key }
						steps={ this.getSteps() }
					/>
				</Card>
			</div>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const {
			getSettings,
			getSettingsError,
			isGetSettingsRequesting,
		} = select( SETTINGS_STORE_NAME );
		const { getActivePlugins, isJetpackConnected } = select(
			PLUGINS_STORE_NAME
		);

		const { general: generalSettings = {} } = getSettings( 'general' );
		const isGeneralSettingsError = Boolean( getSettingsError( 'general' ) );
		const isGeneralSettingsRequesting = isGetSettingsRequesting(
			'general'
		);

		const countryCode = getCountryCode(
			generalSettings.woocommerce_default_country
		);

		const isWaitingForSettings = isGeneralSettingsRequesting;

		const isStoreLocationComplete = Boolean(
			generalSettings.woocommerce_store_address &&
				generalSettings.woocommerce_default_country &&
				generalSettings.woocommerce_store_postcode
		);

		const { countries = [] } = getSetting( 'dataEndpoints', {} );
		const country = countryCode
			? countries.find( ( c ) => c.code === countryCode )
			: null;
		const countryName = country ? country.name : null;
		const activePlugins = getActivePlugins();

		return {
			countryCode,
			countryName,
			isGeneralSettingsError,
			isGeneralSettingsRequesting,
			generalSettings,
			activePlugins,
			isJetpackConnected: isJetpackConnected(),
			isWaitingForSettings,
			isStoreLocationComplete,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateAndPersistSettingsForGroup } = dispatch(
			SETTINGS_STORE_NAME
		);

		return {
			createNotice,
			updateAndPersistSettingsForGroup,
		};
	} )
)( Shipping );
