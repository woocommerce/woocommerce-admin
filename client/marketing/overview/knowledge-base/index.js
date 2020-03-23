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
import { default as Animate } from './animate';

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


	/**
	 * Get the 2 posts we need for the current page
	 */
	getCurrentSlide() {
		const { page, posts } = this.state;
		const currentPosts = posts.slice( page * 2, page * 2 + 2 );
		const pageClass = classNames( 'woocommerce-marketing-knowledgebase-card__page', {
			'page-with-single-post': currentPosts.length === 1,
		} );

		return (
			<div className={ pageClass }>
				{ currentPosts.map( ( post, index ) => {
					return (
						<div className="woocommerce-marketing-knowledgebase-card__post" key={ index }>
							<img src={ post.thumbnail } alt=""/>
							<div>
								<h3>{ post.title }</h3>
								by { post.author_name }
							</div>
						</div>
					)
				} ) }
			</div>
		);
	}

	render() {
		const { page, animate, posts } = this.state;
		const slidesCount = Math.ceil( posts.length / 2 );

		return (
			<Card
				title={ __( 'WooCommerce knowledge base', 'woocommerce-admin' ) }
				description={ __( 'Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-knowledgebase-card"
			>
				<div className="container">
					<Animate animationKey={ page } animate={ animate }>
						{ () => ( <Fragment>{ this.getCurrentSlide() }</Fragment> ) }
					</Animate>
				</div>

				<div className="woocommerce-pagination__page-arrows">
					<IconButton
						className="woocommerce-pagination__page-arrows-buttons"
						disabled={ page === 0 }
						onClick={ this.back }
						icon="arrow-left-alt2"
						label={ __( 'Previous', 'woocommerce-admin' ) }
						size={ 18 }
					/>
					<IconButton
						className="woocommerce-pagination__page-arrows-buttons"
						disabled={ page === slidesCount - 1 }
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
