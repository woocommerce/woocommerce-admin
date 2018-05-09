/** @format */

window.wp = {};
const i = require( 'gutenberg/is-shallow-equal/build/index' );
const e = require( 'gutenberg/element/build/index' );
global.wp = {
	isShallowEqual: i.wp.isShallowEqual,
	element: e.wp.element,
};
