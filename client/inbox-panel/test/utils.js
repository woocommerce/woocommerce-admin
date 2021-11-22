/**
 * Internal dependencies
 */
import { truncateRenderableHTML } from '../utils';

describe( 'truncateRenderableHTML', () => {
	test( 'it should recover malformed HTML when truncated', () => {
		const malformed = '<div>this is a test sentence</asdf>';

		expect( truncateRenderableHTML( malformed, 7 ) ).toBe(
			'<div>this is</div>...'
		);
	} );

	test( 'it should not truncate if the length does not exceed', () => {
		const sample = '<div>this is a test sentence</div>';
		expect( truncateRenderableHTML( sample, sample.length ) ).toBe(
			sample
		);
	} );

	test( 'it should consider &nbsp; as a single space', () => {
		const samplewithSpace = '<div>this &nbsp;&nbsp; is</div>';
		// this(4 chars) + space (1 char) + &nbsp;&nbsp;(2 chars) = 7
		expect( truncateRenderableHTML( samplewithSpace, 7 ) ).toBe(
			'<div>this &nbsp;&nbsp;</div>...'
		);
	} );

	test( 'it should not count nested tags as text', () => {
		const sampleWithNestedTags = '<div>this <br/><br/> is</div>';
		// this (4 chars) + space (1 char) + space (1char) + is (2 chars)) = 8
		expect( truncateRenderableHTML( sampleWithNestedTags, 8 ) ).toBe(
			'<div>this <br/><br/> is</div>'
		);
	} );
} );
