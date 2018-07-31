/** @format */

// 782px is the width designated by Gutenberg's `</ Popover>` component.
// * https://github.com/WordPress/gutenberg/blob/c8f8806d4465a83c1a0bc62d5c61377b56fa7214/components/popover/utils.js#L6
export function isMobileViewport() {
	return window.innerWidth < 782;
}
