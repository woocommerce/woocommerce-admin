/** @format */
/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { reducer as freshData } from '@fresh-data/framework';

const reducers = {
	freshData,
};

export default combineReducers( reducers );
