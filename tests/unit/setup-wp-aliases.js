/** @format */

window.lodash = require( 'lodash' ).noConflict();
window.React = require( 'react' );
window.ReactDOM = require( 'react-dom' );

require( 'guutenberg/is-shallow-equal/build/index' );
require( 'guutenberg/element/build/index' );

global.wp = window.wp;

// console.log(window.React);
console.log(window.wp.element.render);

