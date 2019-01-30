/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { noop } from 'lodash';
import { Notice } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class TransientNotices extends Component {
	render() {
		const { className } = this.props;
		const cardClassName = classnames( 'woocommerce-transient-notices', className );

		const notices = [
			{
				status: 'success',
				message: 'Houston, we have lift off.',
			},
		];

		return (
			<section className={ cardClassName }>
				{ notices &&
					notices.map( ( notice, i ) => (
						<Notice
							status={ notice.status || 'warning' }
							isDismissible={ notice.isDismissible || false }
							onRemove={ notice.onRemove || noop }
							actions={ notice.actions || [] }
							className={ notice.className || null }
							key={ i }
						>
							{ notice.message }
						</Notice>
					) ) }
			</section>
		);
	}
}

TransientNotices.propTypes = {
	/**
	 * Additional class name to style the component.
	 */
	className: PropTypes.string,
};

export default TransientNotices;
