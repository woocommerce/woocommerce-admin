/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Block from './block';
import { getBlocks } from '@woocommerce/registration';

export default class BlockList extends Component {
	render() {
		const blocks = getBlocks();

		return blocks.map( ( block, i ) => <Block key={ i } name={ block.name } /> );
	}
}
