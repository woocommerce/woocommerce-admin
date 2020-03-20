/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';
import classNames from 'classnames';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { Gravatar } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss'
import PlaceholderImage from './images/placeholder.png';
import { default as Animate } from './animate';;

class KnowledgeBase extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			posts: [],
			page: 0,
			animate: null,
		};
		this.forward = this.forward.bind( this );
		this.back = this.back.bind( this );
	}

	componentDidMount() {
		this.fetchPosts();
	}

	fetchPosts() {

		// todo pull from api
		const posts = [
			{
				id: 1,
				title: 'Post Title 1',
				link: 'http://wordpress.org',
				author_name: 'Jason',
				gravatar: '',
				thumbnail: PlaceholderImage,
			},
			{
				id: 2,
				title: 'Post Title 2',
				link: 'http://wordpress.org',
				author_name: 'Jason',
				gravatar: '',
				thumbnail: PlaceholderImage,
			},
			{
				id: 3,
				title: 'Post Title 3',
				link: 'http://wordpress.org',
				author_name: 'Jason',
				gravatar: '',
				thumbnail: PlaceholderImage,
			},
			{
				id: 4,
				title: 'Post Title 4',
				link: 'http://wordpress.org',
				author_name: 'Jason',
				gravatar: '',
				thumbnail: PlaceholderImage,
			},
			{
				id: 5,
				title: 'Post Title 5',
				link: 'http://wordpress.org',
				author_name: 'Jason',
				gravatar: '',
				thumbnail: PlaceholderImage,
			}
		];

		this.setState( { posts } );
	}

	forward() {
		this.setState( ( state ) => ( {
			page: state.page + 1,
			animate: 'left',
		} ) );
	}

	back() {
		this.setState( ( state ) => ( {
			page: state.page - 1,
			animate: 'right',
		} ) );
	}

	render() {

		const { page, animate, posts } = this.state;

		// group posts in to pages, each page has 2 posts
		const pages = [];
		const page_content = [];

		const previousLinkClass = classNames( 'woocommerce-pagination__page-arrows-buttons', {
			'is-active': page > 1,
		} );

		const nextLinkClass = classNames( 'woocommerce-pagination__page-arrows-buttons', {
			'is-active': page < this.pageCount,
		} );

		let i;
		for ( i = 0; i < posts.length; i += 2 ) {

			const pageClass = classNames( 'woocommerce-marketing-knowledgebase-card__page', {
				'page-with-single-post': ( typeof posts[ i + 1 ] === 'undefined' ),
			} );

			pages.push( (
				<div className={ pageClass }>
					{ posts.slice( i, i + 2 ).map( ( post, index ) => {
						return (
							<div className="woocommerce-marketing-knowledgebase-card__post" key={ index } >
								<img src={ post.thumbnail } alt=""/>
								<div>
									<h3>{ post.title }</h3>
									by { post.author_name }
								</div>
							</div>
						)
					} ) }
				</div>
			) );
		}

		return (
			<Card
				title={ __( 'WooCommerce knowledge base', 'woocommerce-admin' ) }
				description={ __( 'Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-knowledgebase-card"
			>
				<div className="container">
					<Animate animationKey={ page } animate={ animate }>
						{ () => ( <React.Fragment>{ pages[ page ] }</React.Fragment> ) }
					</Animate>
				</div>

				<div className="woocommerce-pagination__page-arrows">
					<IconButton
						className={ previousLinkClass }
						disabled={ page === 0 }
						onClick={ this.back }
						icon="arrow-left-alt2"
						label={ __( 'Previous', 'woocommerce-admin' ) }
						size={ 18 }
					/>
					<IconButton
						className={ nextLinkClass }
						disabled={ page === pages.length - 1 }
						onClick={ this.forward }
						icon="arrow-right-alt2"
						label={ __( 'Next', 'woocommerce-admin' ) }
						size={ 18 }
					/>
				</div>
			</Card>
		)
	}
}

export default KnowledgeBase;
