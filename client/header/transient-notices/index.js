/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import TransientNotice from './transient-notice';

class TransientNotices extends Component {
	render() {
		const { className, notices } = this.props;
		const classes = classnames( 'woocommerce-transient-notices', className );

		return (
			<section className={ classes }>
				{ notices && notices.map( notice => <TransientNotice key={ notice.id } { ...notice } /> ) }
			</section>
		);
	}
}

TransientNotices.propTypes = {
	/**
	 * Additional class name to style the component.
	 */
	className: PropTypes.string,
	/**
	 * Array of notices to be displayed.
	 */
	notices: PropTypes.array,
};

export default TransientNotices;
