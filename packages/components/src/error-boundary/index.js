/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

class ErrorBoundary extends Component {
	state = { error: undefined, info: undefined };

	componentDidCatch( error, info ) {
		this.setState( {
			error,
			info,
		} );
	}

	render() {
		const { children } = this.props;

		return children( this.state );
	}
}

export default ErrorBoundary;
