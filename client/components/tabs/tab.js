/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { Button } from '@wordpress/components';

export default class Tab extends Component {
	render() {
		const { active, count, controls } = this.props;
		return (
			<li role="presentation">
				<Button role="tab" aria-controls={ controls } aria-selected={ !! active }>
					{ this.props.children }
					<span>{ count }</span>
				</Button>
			</li>
		);
	}
}
