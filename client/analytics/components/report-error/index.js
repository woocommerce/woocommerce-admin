/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { EmptyContent } from '@woocommerce/components';

/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 */
class ReportError extends Component {
	render() {
		const { className, isError } = this.props;
		let title, actionLabel, actionCallback;

		if ( isError ) {
			title = __(
				'There was an error getting your stats. Please try again.',
				'woocommerce-admin'
			);
			actionLabel = __( 'Reload', 'woocommerce-admin' );
			actionCallback = () => {
				// @todo Add tracking for how often an error is displayed, and the reload action is clicked.
				window.location.reload();
			};
		}
		return (
			<EmptyContent
				className={ className }
				title={ title }
				actionLabel={ actionLabel }
				actionCallback={ actionCallback }
			/>
		);
	}
}

ReportError.propTypes = {
	/**
	 * Additional class name to style the component.
	 */
	className: PropTypes.string,
	/**
	 * Boolean representing whether there was an error.
	 */
	isError: PropTypes.bool,
};

ReportError.defaultProps = {
	className: '',
};

export default ReportError;
