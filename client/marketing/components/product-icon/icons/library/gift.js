/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

const gift = (
	<SVG width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<Path class="stroke" transform="matrix(0 -1 -1 0 24.5 24.5)" stroke="#3858E9" stroke-width="1.5" d="M-.75-.75h9.5v14.5h-9.5z" />
		<Path class="fill" fill-rule="evenodd" clip-rule="evenodd" fill="#3858E9" d="M19 25V15h-1.5v10H19z" />
		<Path class="stroke" stroke="#3858E9" stroke-width="1.5" d="M22.5 12.5c0 .9665-.7835 1.75-1.75 1.75H19V12.5c0-.9665.7835-1.75 1.75-1.75s1.75.7835 1.75 1.75zM14 12.5c0 .9665.7835 1.75 1.75 1.75h1.75V12.5c0-.9665-.7835-1.75-1.75-1.75S14 11.5335 14 12.5z" />
	</SVG>
);

export default gift;