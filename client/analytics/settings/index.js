/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment, useRef } from '@wordpress/element';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { partial, remove, transform } from 'lodash';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { SectionHeader, useFilters, ScrollTo } from '@woocommerce/components';
import { getSetting, setSetting } from '@woocommerce/wc-admin-settings';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './index.scss';
import { analyticsSettings } from './config';
import Setting from './setting';
import HistoricalData from './historical-data';
import { recordEvent } from 'lib/tracks';

const SETTINGS_FILTER = 'woocommerce_admin_analytics_settings';

class Settings extends Component {
	constructor() {
		super( ...arguments );

		const settings = {};
		analyticsSettings.forEach( setting => ( settings[ setting.name ] = setting.initialValue ) );

		this.state = {
			settings,
			saving: false,
			isDirty: false,
		};

		this.handleInputChange = this.handleInputChange.bind( this );
		this.warnIfUnsavedChanges = this.warnIfUnsavedChanges.bind( this );
	}

	componentDidMount() {
		window.addEventListener( 'beforeunload', this.warnIfUnsavedChanges );
	}

	componentWillUnmount() {
		window.removeEventListener( 'beforeunload', this.warnIfUnsavedChanges );
	}

	componentDidCatch( error ) {
		this.setState( {
			hasError: true,
		} );
		/* eslint-disable no-console */
		console.warn( error );
		/* eslint-enable no-console */
	}

	warnIfUnsavedChanges( event ) {
		const { isDirty } = this.state;

		if ( isDirty ) {
			event.returnValue = __(
				'You have unsaved changes. If you proceed, they will be lost.',
				'woocommerce-admin'
			);
			return event.returnValue;
		}
	}

	resetDefaults = () => {
		if (
			window.confirm(
				__( 'Are you sure you want to reset all settings to default values?', 'woocommerce-admin' )
			)
		) {
			const settings = {};
			analyticsSettings.forEach( setting => ( settings[ setting.name ] = setting.defaultValue ) );
			this.setState( { settings }, partial( this.saveChanges, 'reset' ) );
		}
	};

	componentDidUpdate() {
		const { createNotice, isError, isRequesting } = this.props;
		const { saving } = this.state;

		if ( saving && ! isRequesting ) {
			if ( ! isError ) {
				createNotice(
					'success',
					__( 'Your settings have been successfully saved.', 'woocommerce-admin' )
				);
			} else {
				createNotice(
					'error',
					__( 'There was an error saving your settings.  Please try again.', 'woocommerce-admin' )
				);
			}
			/* eslint-disable react/no-did-update-set-state */
			this.setState( state => ( {
				saving: false,
				isDirty: ! state.isDirty,
			} ) );
			/* eslint-enable react/no-did-update-set-state */
		}
	}

	/**
	 * Ensure changes are reflected to parameters on the window as well as
	 * the config for construction of this component when re-navigating to
	 * the settings page.
	 *
	 * @param {object} state - State
	 */
	persistChanges( state ) {
		const settings = getSetting( 'wcAdminSettings', {} );
		analyticsSettings.forEach( setting => {
			const updatedValue = state.settings[ setting.name ];
			settings[ setting.name ] = updatedValue;
			setting.initialValue = updatedValue;
		} );
		setSetting( 'wcAdminSettings', settings );
	}

	saveChanges = source => {
		const { settings } = this.state;
		const { query } = this.props;
		this.persistChanges( this.state );
		this.props.updateSettings( { wc_admin: settings } );

		if ( 'reset' === source ) {
			recordEvent( 'analytics_settings_reset_defaults' );
		} else {
			const eventProps = transform(
				analyticsSettings,
				( props, setting ) => {
					props[ setting.name ] = settings[ setting.name ];
				},
				{}
			);
			recordEvent( 'analytics_settings_save', eventProps );
		}

		this.setState( { saving: true } );

		// On save, reset persisted query properties of Nav Menu links to default
		query.period = undefined;
		query.compare = undefined;
		query.before = undefined;
		query.after = undefined;
		query.interval = undefined;
		query.type = undefined;
		window.wpNavMenuUrlUpdate( query );
	};

	handleInputChange( e ) {
		const { checked, name, type, value } = e.target;
		const { settings } = this.state;

		if ( 'checkbox' === type ) {
			if ( checked ) {
				settings[ name ].push( value );
			} else {
				remove( settings[ name ], v => v === value );
			}
		} else {
			settings[ name ] = value;
		}

		this.setState( { settings, isDirty: true } );
	}

	render() {
		const { createNotice, query } = this.props;
		const { hasError } = this.state;
		if ( hasError ) {
			return null;
		}

		return (
			<Fragment>
				<SectionHeader title={ __( 'Analytics Settings', 'woocommerce-admin' ) } />
				<div className="woocommerce-settings__wrapper">
					{ analyticsSettings.map( setting => (
						<Setting
							handleChange={ this.handleInputChange }
							value={ this.state.settings[ setting.name ] }
							key={ setting.name }
							{ ...setting }
						/>
					) ) }
					<div className="woocommerce-settings__actions">
						<Button isDefault onClick={ this.resetDefaults }>
							{ __( 'Reset Defaults', 'woocommerce-admin' ) }
						</Button>
						<Button isPrimary onClick={ this.saveChanges }>
							{ __( 'Save Settings', 'woocommerce-admin' ) }
						</Button>
					</div>
				</div>
				{ query.import === 'true' ? (
					<ScrollTo offset="-56">
						<HistoricalData createNotice={ createNotice } />
					</ScrollTo>
				) : (
					<HistoricalData createNotice={ createNotice } />
				) }
			</Fragment>
		);
	}
}

export default compose(
	createHigherOrderComponent(
		WrappedComponent => props => {
			const settings = useRef( getSetting( 'preloadSettings', { wc_admin: {} } ) );
			useSelect( ( select, registry ) => {
				if ( ! settings.current ) {
					return;
				}

				const { isResolving, hasFinishedResolution } = select( SETTINGS_STORE_NAME );
				const { startResolution, finishResolution, hydrateSettings } = registry.dispatch(
					SETTINGS_STORE_NAME
				);

				if (
					! isResolving( 'getSettings', [ 'wc_admin' ] ) &&
					! hasFinishedResolution( 'getSettings', [ 'wc_admin' ] )
				) {
					startResolution( 'getSettings', [ 'wc_admin' ] );
					hydrateSettings( settings.current );
					finishResolution( 'getSettings', [ 'wc_admin' ] );
				}
			}, [] );
			return <WrappedComponent { ...props } />;
		},
		'withHydration'
	),
	createHigherOrderComponent(
		WrappedComponent => props => {
			const { persistAllSettings } = useDispatch( SETTINGS_STORE_NAME );
			const { settings, isError, isRequesting } = useSelect( select => {
				const store = select( SETTINGS_STORE_NAME );
				return {
					settings: store.getSettings( 'wc_admin' ),
					isError: Boolean( store.getLastSettingsErrorForGroup( 'wc_admin' ) ),
					isRequesting: store.isResolving( 'getSettings', [ 'wc_admin' ] ),
				};
			}, [] );
			return (
				<WrappedComponent
					updateSettings={ persistAllSettings }
					settings={ settings }
					isError={ isError }
					isRequesting={ isRequesting }
					{ ...props }
				/>
			);
		},
		'withSettings'
	),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		// const { updateSettings } = dispatch( 'wc-api' );

		return {
			createNotice,
			// updateSettings,
		};
	} )
)( useFilters( SETTINGS_FILTER )( Settings ) );
