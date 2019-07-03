/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { DropZoneProvider, DropZone, Spinner } from '@wordpress/components';
import Gridicon from 'gridicons';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, H } from '@woocommerce/components';

class ThemeUploader extends Component {
	constructor() {
		super();

		this.state = {
			isUploading: false,
		};

		this.handleFilesDrop = this.handleFilesDrop.bind( this );
	}

	handleFilesDrop( files ) {
		const file = files[ 0 ];

		this.setState( { isUploading: true } );
		this.uploadTheme( file );
	}

	uploadTheme( file ) {
		const { addNotice } = this.props;

		const body = new FormData();
		body.append( 'pluginzip', file );

		return apiFetch( { path: '/wc-admin/v1/themes', method: 'POST', body } )
			.then( response => {
				this.setState( { isUploading: false } );
				addNotice( { status: response.status, message: response.message } );
				if ( 'success' === response.status ) {
					// @todo Add theme to list of themes; maybe add prop onThemeInstall.
				}
			} )
			.catch( error => {
				this.setState( { isUploading: false } );
				if ( error && error.message ) {
					addNotice( { status: 'error', message: error.message } );
				}
			} );
	}

	render() {
		const { isUploading } = this.state;

		return (
			<Card className="woocommerce-theme-uploader">
				<DropZoneProvider>
					{ ! isUploading ? (
						<Fragment>
							<Gridicon icon="cloud-upload" />
							<H className="woocommerce-theme-uploader__title">
								{ __( 'Upload a theme', 'woocommerce-admin' ) }
							</H>
							<p>{ __( 'Drop a theme zip file here to upload', 'woocommerce-admin' ) }</p>
							<DropZone
								label={ __( 'Drop your theme zip file here', 'woocommerce-admin' ) }
								onFilesDrop={ this.handleFilesDrop }
							/>
						</Fragment>
					) : (
						<Fragment>
							<Spinner key="spinner" />
							<H className="woocommerce-theme-uploader__title">
								{ __( 'Uploading theme', 'woocommerce-admin' ) }
							</H>
							<p>{ __( 'Your theme is being uploaded', 'woocommerce-admin' ) }</p>
						</Fragment>
					) }
				</DropZoneProvider>
			</Card>
		);
	}
}

export default compose(
	withDispatch( dispatch => {
		const { addNotice } = dispatch( 'wc-admin' );
		return { addNotice };
	} )
)( ThemeUploader );
