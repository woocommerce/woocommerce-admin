/**
 * External dependencies
 */
import { shallow } from 'enzyme';
import { recordEvent } from 'lib/tracks';
import { Spinner } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { Card, Pagination, EmptyContent } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { KnowledgeBase } from '../index.js';
import Slider from '../../slider';

jest.mock( 'lib/tracks' );

const mockPosts = [
	{
		'title': 'WooCommerce Blog Post 1',
		'date': '2020-05-28T15:00:00',
		'link': 'https://woocommerce.com/posts/woo-blog-post-1/',
		'author_name': 'John Doe',
		'author_avatar': 'https://avatar.domain/avatar1.png',
	},
	{
		'title': 'WooCommerce Blog Post 2',
		'date': '2020-04-29T12:00:00',
		'link': 'https://woocommerce.com/posts/woo-blog-post-2/',
		'author_name': 'Jane Doe',
		'author_avatar': 'https://avatar.domain/avatar2.png',
	},
	{
		'title': 'WooCommerce Blog Post 3',
		'date': '2020-03-29T12:00:00',
		'link': 'https://woocommerce.com/posts/woo-blog-post-3/',
		'author_name': 'Jim Doe',
		'author_avatar': 'https://avatar.domain/avatar3.png',
	},
];

describe( 'Posts and not loading', () => {
	let knowledgeBaseWrapper;

	beforeEach( () => {
		knowledgeBaseWrapper = shallow(
			<KnowledgeBase
				posts={ mockPosts }
				isLoading={ false }
				category={ '' }
			/>
		);
	} );

	it( 'should not display the spinner', () => {
		const spinner = knowledgeBaseWrapper.find( Spinner );
		expect( spinner.length ).toBe( 0 );
	} );

	it( 'should display posts wrapper', () => {
		const postsContainer = knowledgeBaseWrapper.find( 'div.woocommerce-marketing-knowledgebase-card__posts' );
		expect( postsContainer.length ).toBe( 1 );
	} );

	it( 'should display the slider', () => {
		const spinner = knowledgeBaseWrapper.find( Slider );
		expect( spinner.length ).toBe( 1 );
	} );

	it( 'should display correct number of posts', () => {
		const pageContainer = knowledgeBaseWrapper.find( 'div.woocommerce-marketing-knowledgebase-card__page' );
		expect( pageContainer.length ).toBe( 1 );

		const posts = knowledgeBaseWrapper.find( 'a.woocommerce-marketing-knowledgebase-card__post' );
		expect( posts.length ).toBe( 2 );
	} );

	it( 'should display the pagination', () => {
		const spinner = knowledgeBaseWrapper.find( Pagination );
		expect( spinner.length ).toBe( 1 );
	} );
} );

describe( 'Loading', () => {
	let knowledgeBaseWrapper;

	beforeEach( () => {
		knowledgeBaseWrapper = shallow(
			<KnowledgeBase
				posts={ [ ] }
				isLoading={ true }
				category={ '' }
			/>
		);
	} );

	it( 'should display spinner', () => {
		const spinner = knowledgeBaseWrapper.find( Spinner );
		expect( spinner.length ).toBe( 1 );
	} );

	it( 'should not display posts wrapper', () => {
		const postsContainer = knowledgeBaseWrapper.find( 'div.woocommerce-marketing-knowledgebase-card__posts' );
		expect( postsContainer.length ).toBe( 0 );
	} );
} );
