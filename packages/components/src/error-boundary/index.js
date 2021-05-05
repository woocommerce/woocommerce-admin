/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends Component {
	state = { error: undefined, info: undefined, pathname: undefined };

	static getDerivedStateFromProps( nextProps, prevState ) {
		// when we navigate to a different page, let's just reset the internal state to pretend there's no more errors
		// (just in case the same component is present on the new page).
		if (
			prevState.pathname &&
			prevState.pathname !== nextProps.location.pathname
		) {
			return {
				error: undefined,
				info: undefined,
				pathname: undefined,
			};
		}

		return null;
	}

	componentDidCatch( error, info ) {
		this.setState( {
			error,
			info,
			pathname: this.props.location.pathname,
		} );
	}

	render() {
		const { children } = this.props;
		const { error, info } = this.state;

		return children( { error, info } );
	}
}

export default withRouter( ErrorBoundary );
