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
		const { className } = this.props;

		const title = __(
			'There was an error getting your stats. Please try again.',
			'woocommerce-admin'
		);
		const actionLabel = __( 'Reload', 'woocommerce-admin' );
		const actionCallback = () => {
			// @todo Add tracking for how often an error is displayed, and the reload action is clicked.
			window.location.reload();
		};
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
};

ReportError.defaultProps = {
	className: '',
};

export default ReportError;
