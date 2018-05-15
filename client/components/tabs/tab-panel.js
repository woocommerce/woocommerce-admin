/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

export default class TabPanel extends Component {
	render() {
		const { id, children } = this.props;
		return (
			<section id={ id } role="tabpanel" aria-labelledby={ `${ id }-tab` }>
				{ children }
			</section>
		);
	}
}
