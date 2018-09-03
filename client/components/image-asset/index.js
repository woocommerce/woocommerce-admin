/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * A component that loads an image, relative to the main asset/plugin folder. Props are passed through to `<img />`
 */
class ImageAsset extends Component {
	render() {
		const { src, alt, ...restOfProps } = this.props;
		const imageSrc = wcSettings.wcAdminAssetUrl + src;
		return <img src={ imageSrc } alt={ alt || '' } { ...restOfProps } />;
	}
}

ImageAsset.propTypes = {
	/**
	 * Image location to pass through to `<img />`.
	 */
	src: PropTypes.string,
	/**
	 * Alt text to pass through to `<img />`.
	 */
	alt: PropTypes.string,
};

export default ImageAsset;
