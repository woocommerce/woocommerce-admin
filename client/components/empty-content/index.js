/** @format */
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { startsWith } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import { H } from 'layout/section';
import ImageAsset from 'components/image-asset';

/**
 * A component to be used when there is no data to show.
 * It can be used as an opportunity to provide explanation or guidance to help a user progress.
 */
class EmptyContent extends Component {
	renderIllustration() {
		const { illustrationWidth, illustrationHeight } = this.props;
		let illustrationSrc = this.props.illustration;
		let ImageComponent = 'img';
		if ( startsWith( illustrationSrc, '/' ) ) {
			ImageComponent = ImageAsset;
			illustrationSrc = illustrationSrc.substring( 1 );
		}

		return (
			<ImageComponent
				alt=""
				src={ illustrationSrc }
				width={ illustrationWidth }
				height={ illustrationHeight }
				className="woocommerce-empty-content__illustration"
			/>
		);
	}

	renderPrimaryAction() {
		const { actionLabel, actionURL, actionCallback } = this.props;
		if ( actionURL && actionCallback ) {
			return (
				<Button
					className="woocommerce-empty-content__action"
					isPrimary
					onClick={ actionCallback }
					href={ actionURL }
				>
					{ actionLabel }
				</Button>
			);
		} else if ( actionURL ) {
			return (
				<Button className="woocommerce-empty-content__action" isPrimary href={ actionURL }>
					{ actionLabel }
				</Button>
			);
		} else if ( actionCallback ) {
			return (
				<Button className="woocommerce-empty-content__action" isPrimary onClick={ actionCallback }>
					{ actionLabel }
				</Button>
			);
		}

		return null;
	}

	renderSecondaryAction() {
		const { secondaryActionLabel, secondaryActionURL, secondaryActionCallback } = this.props;
		if ( secondaryActionURL && secondaryActionCallback ) {
			return (
				<Button
					className="woocommerce-empty-content__secondary-action"
					onClick={ secondaryActionCallback }
					href={ secondaryActionURL }
				>
					{ secondaryActionLabel }
				</Button>
			);
		} else if ( secondaryActionURL ) {
			return (
				<Button className="woocommerce-empty-content__secondary-action" href={ secondaryActionURL }>
					{ secondaryActionLabel }
				</Button>
			);
		} else if ( secondaryActionCallback ) {
			return (
				<Button
					className="woocommerce-empty-content__secondary-action"
					onClick={ secondaryActionCallback }
				>
					{ secondaryActionLabel }
				</Button>
			);
		}

		return null;
	}

	renderActions() {
		const { actionLabel, secondaryActionLabel } = this.props;

		if ( ! actionLabel && ! secondaryActionLabel ) {
			return null;
		}

		return (
			<div className="woocommerce-empty-content__actions">
				{ actionLabel && this.renderPrimaryAction() }
				{ secondaryActionLabel && this.renderSecondaryAction() }
			</div>
		);
	}

	render() {
		const { title, message, illustration } = this.props;
		return (
			<div className={ classnames( 'woocommerce-empty-content', this.props.className ) }>
				{ illustration && this.renderIllustration() }
				{ title ? <H className="woocommerce-empty-content__title">{ title }</H> : null }
				{ message ? <p className="woocommerce-empty-content__message">{ message }</p> : null }

				{ this.renderActions() }
			</div>
		);
	}
}

EmptyContent.propTypes = {
	/**
	 * The title to be displayed.
	 */
	title: PropTypes.string,
	/**
	 * An additional message to be displayed.
	 */
	message: PropTypes.string,
	/**
	 * The url string of an image path. Prefix with `/` to load an image relative to the plugin directory.
	 */
	illustration: PropTypes.string,
	/**
	 * Height to use for the illustration.
	 */
	illustrationHeight: PropTypes.number,
	/**
	 * Width to use for the illustration.
	 */
	illustrationWidth: PropTypes.number,
	/**
	 * Label to be used for the primary action button.
	 */
	actionLabel: PropTypes.string,
	/**
	 * URL to be used for the primary action button.
	 */
	actionURL: PropTypes.string,
	/**
	 * Callback to be used for the primary action button.
	 */
	actionCallback: PropTypes.func,
	/**
	 * Label to be used for the secondary action button.
	 */
	secondaryActionLabel: PropTypes.string,
	/**
	 * URL to be used for the secondary action button.
	 */
	secondaryActionURL: PropTypes.string,
	/**
	 * Callback to be used for the secondary action button.
	 */
	secondaryActionCallback: PropTypes.func,
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
};

export default EmptyContent;
