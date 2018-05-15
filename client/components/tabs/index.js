/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

class Tabs extends Component {
	render() {
		return <ul role="tablist">{ this.props.children }</ul>;
	}
}

export { Tabs };
export { default as Tab } from './tab';
export { default as TabPanel } from './tab-panel';
