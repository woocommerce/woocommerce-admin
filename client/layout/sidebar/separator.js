/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

class Separator extends Component {
	render() {
		const { label } = this.props;
		return (
			<div class="woo-dash__sidebar-separator">
				<h3 className="woo-dash__sidebar-separator-label">{ label }</h3>
				<div class="woo-dash__sidebar-separator-divider" />
			</div>
		);
	}
}

Separator.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Separator;
