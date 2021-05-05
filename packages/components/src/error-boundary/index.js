/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

class ErrorBoundary extends Component {
	constructor( props ) {
		super( props );

		this.state = { error: undefined, info: undefined };
	}

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
