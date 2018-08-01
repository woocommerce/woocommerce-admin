/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { Redirect } from 'react-router-dom';
import { stringify as stringifyQueryObject } from 'qs';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import { QueryException } from './exceptions';

class QueryBoundaryError extends Component {
	constructor( props ) {
		super( props );
		this.state = { error: null };
	}

	componentDidCatch( error ) {
		if ( error instanceof QueryException ) {
			this.setState( { error } );
		}
	}

	render() {
		const { children, path, query } = this.props;
		const { error } = this.state;
		if ( error ) {
			const otherQueries = omit( query, error.params );
			const queryString = stringifyQueryObject( Object.assign( otherQueries, error.resetQuery ) );
			const to = `${ path }${ queryString.length ? '?' : '' }${ queryString }`;
			return <Redirect to={ to } />;
		}
		return children;
	}
}

export default QueryBoundaryError;
