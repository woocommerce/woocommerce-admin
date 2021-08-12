/**
 * External dependencies
 */
import { withNavigationHydration } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './navigation.scss';
import { Container } from './components/container';

const HydratedNavigation = withNavigationHydration( window.wcNavigation )(
	Container
);

export default HydratedNavigation;
