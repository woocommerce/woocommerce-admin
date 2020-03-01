/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import classnames from 'classnames';
import { decodeEntities } from '@wordpress/html-entities';
import PropTypes from 'prop-types';
import { compose } from '@wordpress/compose';
import { get, isArray } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getNewPath } from '@woocommerce/navigation';
import { Link } from '@woocommerce/components';
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss';
import ActivityPanel from './activity-panel';
import { recordEvent } from 'lib/tracks';
import withSelect from 'wc-api/with-select';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isScrolled: false,
		};

		this.headerRef = createRef();

		this.onWindowScroll = this.onWindowScroll.bind( this );
		this.updateIsScrolled = this.updateIsScrolled.bind( this );
		this.trackLinkClick = this.trackLinkClick.bind( this );
		this.updateDocumentTitle = this.updateDocumentTitle.bind( this );
	}

	componentDidMount() {
		this.threshold = this.headerRef.current.offsetTop;
		window.addEventListener( 'scroll', this.onWindowScroll );
		this.updateIsScrolled();
	}

	componentWillUnmount() {
		window.removeEventListener( 'scroll', this.onWindowScroll );
		window.cancelAnimationFrame( this.handle );
	}

	onWindowScroll() {
		this.handle = window.requestAnimationFrame( this.updateIsScrolled );
	}

	updateIsScrolled() {
		const isScrolled = window.pageYOffset > this.threshold - 20;
		if ( isScrolled !== this.state.isScrolled ) {
			this.setState( {
				isScrolled,
			} );
		}
	}

	trackLinkClick( event ) {
		const href = event.target.closest( 'a' ).getAttribute( 'href' );

		recordEvent( 'navbar_breadcrumb_click', {
			href,
			text: event.target.innerText,
		} );
	}

	updateDocumentTitle() {
		const { sections, isEmbedded } = this.props;

		// Don't modify the document title on existing WooCommerce pages.
		if ( isEmbedded ) {
			return;
		}

		const _sections = Array.isArray( sections ) ? sections : [ sections ];

		const documentTitle = _sections
			.map( ( section ) => {
				return Array.isArray( section ) ? section[ 1 ] : section;
			} )
			.reverse()
			.join( ' &lsaquo; ' );

		document.title = decodeEntities(
			sprintf(
				__(
					'%1$s &lsaquo; %2$s &#8212; WooCommerce',
					'woocommerce-admin'
				),
				documentTitle,
				getSetting( 'siteTitle', '' )
			)
		);
	}

	render() {
		const { sections, isEmbedded, brandingName } = this.props;
		const { isScrolled } = this.state;
		const _sections = Array.isArray( sections ) ? sections : [ sections ];

		this.updateDocumentTitle();

		const className = classnames( 'woocommerce-layout__header', {
			'is-scrolled': isScrolled,
		} );

		const firstBreadCrumbPath = 'admin.php?page=wc-admin';

		return (
			<div className={ className } ref={ this.headerRef }>
				<h1 className="woocommerce-layout__header-breadcrumbs">
					<span>
						<Link
							href={
								isEmbedded
									? getAdminLink( firstBreadCrumbPath )
									: firstBreadCrumbPath
							}
							type={ isEmbedded ? 'wp-admin' : 'wc-admin' }
							onClick={ this.trackLinkClick }
						>
							{ brandingName }
						</Link>
					</span>
					{ _sections.map( ( section, i ) => {
						const sectionPiece = Array.isArray( section ) ? (
							<Link
								href={
									isEmbedded
										? getAdminLink( section[ 0 ] )
										: getNewPath( {}, section[ 0 ], {} )
								}
								type={ isEmbedded ? 'wp-admin' : 'wc-admin' }
								onClick={ this.trackLinkClick }
							>
								{ section[ 1 ] }
							</Link>
						) : (
							section
						);
						return (
							<span key={ i }>
								{ decodeEntities( sectionPiece ) }
							</span>
						);
					} ) }
				</h1>
				{ window.wcAdminFeatures[ 'activity-panels' ] && (
					<ActivityPanel />
				) }
			</div>
		);
	}
}

Header.propTypes = {
	sections: PropTypes.node.isRequired,
	isEmbedded: PropTypes.bool,
	brandingName: PropTypes.string,
};

Header.defaultProps = {
	isEmbedded: false,
};

export default compose(
	withSelect( ( select, props ) => {
		const { getOptions } = select( 'wc-api' );
		const options = getOptions( [
			'woocommerce_branding_name',
			'active_plugins',
		] );
		const activePlugins = get( options, [ 'active_plugins' ], '' ) || [];
		// So, if there are no disabled plugins in sequence, activePlugins is an
		// array. If there _are_ disabled plugins, activePlugins is a hash. If it's
		// not an array, convert it into an array using the hash values.
		const activePluginsAsArray = isArray( activePlugins )
			? activePlugins
			: Object.values( activePlugins );
		const brandingPluginIsInstalled =
			activePluginsAsArray.indexOf(
				'woocommerce-branding/woocommerce-branding.php'
			) !== -1;
		const brandingName = get(
			options,
			[ 'woocommerce_branding_name' ],
			__( 'WooCommerce', 'woocommerce-admin' )
		);

		return {
			brandingName: brandingPluginIsInstalled
				? brandingName
				: __( 'WooCommerce', 'woocommerce-admin' ),
			...props,
		};
	} )
)( Header );
