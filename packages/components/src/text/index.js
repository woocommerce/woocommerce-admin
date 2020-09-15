/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { text } from './styles/text-mixins';

// This is the @wordpress/components Text component forked inside
// wc-admin for now. The reason for doing this, is that bundling
// this one component drastically reduces the size of the wc-admin
// payload, because we don't need to bundle `@wordpress/components`
// anymore. Once the Text component is promoted out of experimental
// we should be able to remove this code.

const Text = styled.p(
	`
	box-sizing: border-box;
	margin: 0;
`,
	text
);

export default Text;
