/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { Button } from '@wordpress/components';

export default class Tab extends Component {
	render() {
		const { active, count, controls, onClick } = this.props;
		return (
			<li role="presentation">
				<Button
					role="tab"
					aria-controls={ controls }
					aria-selected={ !! active }
					onClick={ onClick }
				>
					<h2>
						{ this.props.children }
						{ count && <span>{ count }</span> }
					</h2>
				</Button>
			</li>
		);
	}
}
