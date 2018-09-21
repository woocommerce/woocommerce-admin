/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import history from 'lib/history';

/**
 * Internal dependencies
 */
import { getPath } from 'lib/nav-utils';
import { Link } from '@woocommerce/components';

// TODO Render README from this.props.readmeFilePath
export default class DocsExample extends Component {
	constructor() {
		super();
		this.state = {
			currentPath: '/devdocs',
		};
	}

	componentDidMount() {
		/* eslint-disable */
		this.setState( {
			currentPath: getPath(),
		} );
		this.unlisten = history.listen( () => {
			this.setState( {
				currentPath: getPath(),
			} );
		} );
		/* eslint-enable */
	}

	componentWillUnmount() {
		this.unlisten();
	}

	// TODO Fix showing code example. Some components don't come through correctly (`<Gridicons />` becomes `<T />` for example
	// and functions are output differently.
	// TODO Add code highlighting.
	// To use, add `jsx-to-string` to package.json
	// <pre style={ { whiteSpace: 'pre-wrap' } }>{ this.renderCodeExample() }</pre>
	/*renderCodeExample() {
		if ( ! this.props.exampleCode ) {
			return null;
		}

		if ( typeof this.props.exampleCode === 'string' ) {
			return this.props.exampleCode;
		}

		return jsxToString( this.props.exampleCode, { useFunctionCode: true } );
	}*/

	render() {
		// Describes how the component documentation should look on the main listing page.
		if ( '/devdocs' === this.state.currentPath || '/devdocs/' === this.state.currentPath ) {
			return (
				<Fragment>
					<h2>
						<Link href={ `/devdocs/${ this.props.displayName }` }>{ this.props.displayName }</Link>
					</h2>
					{ this.props.children }
				</Fragment>
			);
		}

		// Describes how the component documentation should look on it's individual component page.
		let component = this.state.currentPath.replace( '/devdocs/', '' );
		if ( component.substr( -1 ) === '/' ) {
			component = component.substr( 0, component.length - 1 );
		}

		if ( this.props.displayName !== component ) {
			return null;
		}

		return (
			<Fragment>
				<h2>
					<Link href={ `/devdocs/${ this.props.displayName }` }>{ this.props.displayName }</Link>
				</h2>
				{ this.props.children }
			</Fragment>
		);
	}
}
