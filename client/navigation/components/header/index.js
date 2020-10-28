/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Icon, wordpress } from '@wordpress/icons';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';

const Header = () => {
	const siteTitle = getSetting( 'siteTitle', '' );
	const siteUrl = getSetting( 'siteUrl', '' );

	const toggleFolded = () => {
		document.body.classList.toggle( 'is-folded' );
	};

	const foldOnMobile = ( screenWidth ) => {
		if ( screenWidth <= 960 ) {
			document.body.classList.add( 'is-folded' );
		}
	};

	useEffect( () => {
		foldOnMobile( document.body.clientWidth );

		window.addEventListener(
			'orientationchange',
			( e ) => foldOnMobile( e.target.screen.availWidth ),
			false
		);
	}, [] );

	let buttonIcon = <Icon size="36px" icon={ wordpress } />;

	const { isRequestingSiteIcon, siteIconUrl } = useSelect( ( select ) => {
		const { isResolving } = select( 'core/data' );
		const { getEntityRecord } = select( 'core' );
		const siteData =
			getEntityRecord( 'root', '__unstableBase', undefined ) || {};

		return {
			isRequestingSiteIcon: isResolving( 'core', 'getEntityRecord', [
				'root',
				'__unstableBase',
				undefined,
			] ),
			siteIconUrl: siteData.siteIconUrl,
		};
	} );

	if ( siteIconUrl ) {
		buttonIcon = <img alt={ __( 'Site Icon' ) } src={ siteIconUrl } />;
	} else if ( isRequestingSiteIcon ) {
		buttonIcon = null;
	}

	return (
		<div className="woocommerce-navigation-header">
			<Button
				onClick={ () => toggleFolded() }
				className="woocommerce-navigation-header__site-icon"
			>
				{ buttonIcon }
			</Button>
			<Button
				href={ siteUrl }
				className="woocommerce-navigation-header__site-title"
				as="span"
			>
				{ siteTitle }
			</Button>
		</div>
	);
};

export default Header;
