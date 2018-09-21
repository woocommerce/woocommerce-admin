/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import ComponentExample from './example';
import { H, Section } from '@woocommerce/components';
import examples from './examples.json';

const getExampleData = example => {
	const componentName = get( example, 'component' );
	const filePath = get(
		example,
		'filePath',
		componentName.replace( /\.?([A-Z])/g, ( x, y ) => '-' + y.toLowerCase() ).replace( /^-/, '' )
	);
	const render = get( example, 'render', `My${ componentName }` );

	return {
		componentName,
		filePath,
		render,
	};
};

export default class extends Component {
	render() {
		const { component } = this.props;

		const className = classnames( 'woocommerce_devdocs', {
			'is-single': component,
			'is-list': ! component,
		} );

		return (
			<div className={ className }>
				{ examples.map( example => {
					const { componentName, filePath, render } = getExampleData( example );
					return (
						<Fragment key={ componentName }>
							<H>{ componentName }</H>
							<Section>
								<ComponentExample
									asyncName={ componentName }
									component={ componentName }
									filePath={ filePath }
									render={ render }
								/>
							</Section>
						</Fragment>
					);
				} ) }
			</div>
		);
	}
}
