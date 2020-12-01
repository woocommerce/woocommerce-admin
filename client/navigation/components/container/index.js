/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	__experimentalNavigation as Navigation,
	__experimentalNavigationBackButton as NavigationBackButton,
	__experimentalNavigationMenu as NavigationMenu,
	__experimentalNavigationGroup as NavigationGroup,
} from '@wordpress/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { NAVIGATION_STORE_NAME } from '@woocommerce/data';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { addHistoryListener, getMatchingItem } from '../../utils';
import Header from '../header';
import Item from '../../components/Item';

const Container = ( { menuItems } ) => {
	useEffect( () => {
		// Collapse the original WP Menu.
		const adminMenu = document.getElementById( 'adminmenumain' );
		adminMenu.classList.add( 'folded' );
	}, [] );

	const dashboardUrl = getAdminLink( '' );

	const parentCategory = {
		capability: 'manage_woocommerce',
		id: 'woocommerce',
		isCategory: true,
		menuId: 'primary',
		migrate: true,
		order: 10,
		parent: '',
		title: 'WooCommerce',
	};
	const categoriesMap = menuItems.reduce(
		( acc, item ) => {
			if ( item.isCategory ) {
				return { ...acc, [ item.id ]: item };
			}
			return acc;
		},
		{
			woocommerce: parentCategory,
		}
	);
	const categories = Object.values( categoriesMap );

	const [ activeItem, setActiveItem ] = useState( 'woocommerce-home' );
	const [ activeLevel, setActiveLevel ] = useState( 'woocommerce' );

	useEffect( () => {
		const initialMatchedItem = getMatchingItem( menuItems );
		if ( initialMatchedItem ) {
			setActiveItem( initialMatchedItem );
			setActiveLevel( initialMatchedItem.parent );
		}

		const removeListener = addHistoryListener( () => {
			setTimeout( () => {
				const matchedItem = getMatchingItem( menuItems );
				if ( matchedItem ) {
					setActiveItem( matchedItem );
				}
			}, 0 );
		} );

		return removeListener;
	}, [ menuItems ] );

	const getMenuItemsByCategory = ( items ) => {
		return items.reduce( ( acc, item ) => {
			// Set up the category if it doesn't yet exist.
			if ( ! acc[ item.parent ] ) {
				acc[ item.parent ] = [ [], [], [] ];
			}

			// Check if parent category is in the same menu.
			if (
				item.parent !== 'woocommerce' &&
				categoriesMap[ item.parent ] &&
				categoriesMap[ item.parent ].menuId !== item.menuId
			) {
				return acc;
			}

			let index = 0;
			if ( item.menuId === 'secondary' ) {
				index = 1;
			} else if ( item.menuId === 'plugins' ) {
				index = 2;
			}
			acc[ item.parent ][ index ].push( item );
			return acc;
		}, {} );
	};

	const categorizedItems = useMemo(
		() => getMenuItemsByCategory( menuItems ),
		[ menuItems ]
	);

	const navDomRef = useRef( null );

	return (
		<div className="woocommerce-navigation">
			<Header />
			<div className="woocommerce-navigation__wrapper" ref={ navDomRef }>
				<Navigation
					activeItem={ activeItem ? activeItem.id : null }
					activeMenu={ activeLevel }
					onActivateMenu={ ( ...args ) => {
						if ( navDomRef && navDomRef.current ) {
							navDomRef.current.scrollTop = 0;
						}

						setActiveLevel( ...args );
					} }
				>
					{ activeLevel === 'woocommerce' && dashboardUrl && (
						<NavigationBackButton
							className="woocommerce-navigation__back-to-dashboard"
							href={ dashboardUrl }
							backButtonLabel={ __(
								'WordPress Dashboard',
								'woocommerce-navigation'
							) }
						></NavigationBackButton>
					) }
					{ categories.map( ( category ) => {
						const [
							primaryItems,
							secondaryItems,
							pluginItems,
						] = categorizedItems[ category.id ] || [ [], [], [] ];
						return (
							<NavigationMenu
								key={ category.id }
								title={ category.title }
								menu={ category.id }
								parentMenu={ category.parent }
								backButtonLabel={
									category.backButtonLabel || null
								}
							>
								{ !! primaryItems.length && (
									<NavigationGroup>
										{ primaryItems.map( ( item ) => (
											<Item
												key={ item.id }
												item={ item }
											/>
										) ) }
									</NavigationGroup>
								) }
								{ !! pluginItems.length && (
									<NavigationGroup
										title={ __(
											'Extensions',
											'woocommerce-admin'
										) }
									>
										{ pluginItems.map( ( item ) => (
											<Item
												key={ item.id }
												item={ item }
											/>
										) ) }
									</NavigationGroup>
								) }
								{ !! secondaryItems.length && (
									<NavigationGroup>
										{ secondaryItems.map( ( item ) => (
											<Item
												key={ item.id }
												item={ item }
											/>
										) ) }
									</NavigationGroup>
								) }
							</NavigationMenu>
						);
					} ) }
				</Navigation>
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getActiveItem, getMenuItems } = select( NAVIGATION_STORE_NAME );

		return {
			activeItem: getActiveItem(),
			menuItems: getMenuItems(),
		};
	} )
)( Container );
