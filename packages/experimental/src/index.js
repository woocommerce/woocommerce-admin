/**
 * External dependencies
 */
import {
	__experimentalBackButton,
	__experimentalGroup,
	__experimentalMenu,
	__experimentalNavigation,
	__experimentalNavigationItem,
	__experimentalText,
	__experimentalUseSlot,
	BackButton as BackButtonComponent,
	Group as GroupComponent,
	Menu as MenuComponent,
	Navigation as NavigationComponent,
	NavigationItem as NavigationItemComponent,
	Text as TextComponent,
	useNavSlot as useNavSlotHook,
} from '@wordpress/components';

/**
 * Prioritize exports of non-experimental components over experimental.
 */
export const BackButton = BackButtonComponent || __experimentalBackButton;
export const Group = GroupComponent || __experimentalGroup;
export const Menu = MenuComponent || __experimentalMenu;
export const Navigation = NavigationComponent || __experimentalNavigation;
export const NavigationItem = NavigationItemComponent || __experimentalNavigationItem;
export const Text = TextComponent || __experimentalText;
export const useNavSlot = useNavSlotHook || __experimentalUseSlot;
const Test = {};
export default Test;