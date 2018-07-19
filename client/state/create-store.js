/** @format */
/**
 * External dependencies
 */
import { createStore } from 'redux';

export default reducer => {
	const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

	return createStore( reducer, devToolsExt && devToolsExt() );
};
