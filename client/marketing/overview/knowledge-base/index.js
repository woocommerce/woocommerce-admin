/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { IconButton, Spinner } from '@wordpress/components';
import classNames from 'classnames';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { Gravatar } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss'
import { default as Animate } from './animate';
import apiFetch from "@wordpress/api-fetch";
import { WC_ADMIN_NAMESPACE } from "../../../wc-api/constants";
import { recordEvent } from 'lib/tracks';

class KnowledgeBase extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			posts: [],
			page: 0,
			animate: null,
			isLoading: true,
		};
		this.forward = this.forward.bind( this );
		this.back = this.back.bind( this );
	}

	componentDidMount() {
		this.fetchPosts();
	}

	async fetchPosts() {
		const { createNotice } = this.props;

		try {
			const response = await apiFetch( {
				path: `${ WC_ADMIN_NAMESPACE }/marketing/overview/knowledge-base`,
				method: 'GET',
			} );
			if ( response ) {
				this.setState( {
					isLoading: false,
					posts: response,
				} );
				return;
			}
			throw new Error();
		} catch ( err ) {
			this.setState( { isLoading: false } );
			createNotice( 'success',
				__( 'There was an error loading knowledge base posts.', 'woocommerce-admin' )
			);
		}
	}

	forward() {
		this.setState( ( state ) => ( {
			page: state.page + 1,
			animate: 'left',
		} ) );
		recordEvent( 'marketing_knowledge_carousel', { direction: 'forward', page: this.state.page + 1 } );
	}

	back() {
		this.setState( ( state ) => ( {
			page: state.page - 1,
			animate: 'right',
		} ) );
		recordEvent( 'marketing_knowledge_carousel', { direction: 'back', page: this.state.page - 1 } );
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
							<div className="woocommerce-marketing-knowledgebase-card__post-img">
								<img src={ post.image } alt=""/>
							</div>
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
		const { page, animate, posts, isLoading } = this.state;
		const slidesCount = Math.ceil( posts.length / 2 );

		return (
			<Card
				title={ __( 'WooCommerce knowledge base', 'woocommerce-admin' ) }
				description={ __( 'Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-knowledgebase-card"
			>
				{ isLoading && <Spinner /> }
				{ isLoading || (
					<div className="woocommerce-marketing-knowledgebase-card__slider">
						<div className="woocommerce-marketing-knowledgebase-card__slider-slides">
							<Animate animationKey={ page } animate={ animate }>
								{ this.getCurrentSlide() }
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
					</div>
				) }


			</Card>
		)
	}
}

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( KnowledgeBase );
