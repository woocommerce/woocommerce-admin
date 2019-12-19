/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { partial, remove } from 'lodash';
import { withDispatch, withSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { SectionHeader, useFilters, ScrollTo } from '@woocommerce/components';
import { SETTINGS_STORE_NAME, useSettings } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './index.scss';
import { getConfig } from './config';
import Setting from './setting';
import HistoricalData from './historical-data';
import { recordEvent } from 'lib/tracks';

const SETTINGS_FILTER = 'woocommerce_admin_analytics_settings';

const MyFunctionalComponent = () => {
	const useResult = useSettings( 'wc_admin', [ 'orderStatuses', 'defaultDateRange' ] );
	console.log( useResult );
	return <div>HELLO WORLD!</div>;
};

class Settings extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			saving: false,
			isDirty: false,
			settings: { ...props.settings },
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
			const { orderStatuses, defaultDateRange } = this.props;
			const config = getConfig( orderStatuses, defaultDateRange );
			const resetSettings = Object.keys( config ).reduce( ( result, setting ) => {
				result[ setting ] = config[ setting ].defaultValue;
				return result;
			}, {} );
			this.setState( { isDirty: true, settings: resetSettings }, () => {
				this.saveChanges( 'reset', resetSettings );
			} );
		}
	};

	componentDidUpdate() {
		const { createNotice, isRequestingSetting, settingsError } = this.props;
		const { saving } = this.state;

		if ( saving && ! isRequestingSetting ) {
			if ( ! settingsError ) {
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

	saveChanges = ( source, data ) => {
		const { query, setSetting } = this.props;

		if ( 'reset' === source ) {
			setSetting( 'wcAdminSettings', data );
			recordEvent( 'analytics_settings_reset_defaults' );
		} else {
			const { settings } = this.state;
			setSetting( 'wcAdminSettings', settings );
			recordEvent( 'analytics_settings_save', settings );
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
		const nextSettings = { ...settings };

		if ( 'checkbox' === type ) {
			if ( checked ) {
				nextSettings[ name ].push( value );
			} else {
				remove( nextSettings[ name ], v => v === value );
			}
		} else {
			nextSettings[ name ] = value;
		}

		this.setState( { isDirty: true, settings: nextSettings } );
	}

	render() {
		const { hasError, saving, settings } = this.state;
		if ( hasError ) {
			return null;
		}
		const { createNotice, query, orderStatuses, defaultDateRange } = this.props;
		const config = getConfig( orderStatuses, defaultDateRange );

		return (
			<Fragment>
				<MyFunctionalComponent />
				<SectionHeader title={ __( 'Analytics Settings', 'woocommerce-admin' ) } />
				<div className="woocommerce-settings__wrapper">
					{ Object.keys( config ).map( setting => (
						<Setting
							handleChange={ this.handleInputChange }
							value={ settings[ setting ] }
							key={ setting }
							name={ setting }
							{ ...config[ setting ] }
						/>
					) ) }
					<div className="woocommerce-settings__actions">
						<Button isDefault onClick={ this.resetDefaults }>
							{ __( 'Reset Defaults', 'woocommerce-admin' ) }
						</Button>
						<Button isPrimary isBusy={ saving } onClick={ this.saveChanges }>
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
	withSelect( select => {
		const { isResolving, getSetting, getLastSettingsErrorForGroup } = select( SETTINGS_STORE_NAME );
		return {
			isRequesting: isResolving( 'setSetting', [ 'wc_admin' ] ),
			settings: getSetting( 'wc_admin', 'wcAdminSettings' ),
			settingsError: Boolean( getLastSettingsErrorForGroup( 'wc_admin' ) ),
			orderStatuses: getSetting( 'wc_admin', 'ORDER_STATUSES' ),
			defaultDateRange: getSetting( 'wc_admin', 'DEFAULT_DATE_RANGE' ),
		};
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { setSettingsForGroup } = dispatch( SETTINGS_STORE_NAME );

		return {
			createNotice,
			setSetting: partial( setSettingsForGroup, 'wc_admin' ),
		};
	} )
)( useFilters( SETTINGS_FILTER )( Settings ) );
