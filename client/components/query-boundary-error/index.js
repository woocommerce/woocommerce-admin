/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { stringify as stringifyQueryObject } from 'qs';
import { __ } from '@wordpress/i18n';
import { omit } from 'lodash';

/**
 * Internal dependencies
 */
import { QueryException } from './exceptions';
import Link from 'components/link';

class QueryBoundaryError extends Component {
	constructor( props ) {
		super( props );
		this.state = { error: null };
		this.onClick = this.onClick.bind( this );
	}

	componentDidCatch( error ) {
		if ( error instanceof QueryException ) {
			this.setState( { error } );
		}
	}

	onClick() {
		this.setState( { error: null } );
	}

	render() {
		const { children, query, path } = this.props;
		const { error } = this.state;
		if ( error ) {
			// @TODO: Move this logic to nav-utils
			const otherQueries = omit( query, error.params );
			const queryString = stringifyQueryObject( Object.assign( otherQueries, error.resetQuery ) );
			const href = `${ path }${ queryString.length ? '?' : '' }${ queryString }`;
			return (
				<Fragment>
					<p>{ __( 'Oops, something went wrong!', 'wc-admin' ) }</p>
					<p>{ error.msg }</p>
					<Link
						href={ href }
						type="wc-admin"
						onClick={ this.onClick }
						className="components-button is-button is-primary"
					>
						{ __( 'Back to report', 'wc-admin' ) }
					</Link>
				</Fragment>
			);
		}
		return children;
	}
}

export default QueryBoundaryError;
