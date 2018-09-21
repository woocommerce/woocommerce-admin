/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import DocsExample from 'devdocs/docs-example';
import ImageAsset from './';

export default class ImageAssetExample extends Component {
	static defaultProps = {
		displayName: 'ImageAsset',
		exampleCode: (
			<div>
				<ImageAsset src="/empty-content.svg" alt="" width={ 200 } height={ 200 } />
			</div>
		),
	};

	renderExample() {
		return this.props.exampleCode;
	}

	render = () => {
		return <DocsExample { ...this.props }>{ this.renderExample() }</DocsExample>;
	};
}
