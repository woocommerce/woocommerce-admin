/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ImageAsset from 'components/image-asset/example';
import SplitButton from 'components/split-button/example';

export default class DevDocs extends Component {
	render() {
		return (
			<Fragment>
				<ImageAsset readmeFilePath="image-asset" />
				<SplitButton readmeFilePath="split-button" />
			</Fragment>
		);
	}
}
