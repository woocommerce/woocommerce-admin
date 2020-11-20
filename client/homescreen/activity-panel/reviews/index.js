/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';
import Gridicon from 'gridicons';
import interpolateComponents from 'interpolate-components';
import {
	EmptyContent,
	H,
	Link,
	ReviewRating,
	ProductImage,
	Gravatar,
	Section,
} from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { get, isNull } from 'lodash';
import { REVIEWS_STORE_NAME, QUERY_DEFAULTS } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import './style.scss';
import {
	ActivityCard,
	ActivityCardPlaceholder,
} from '../../../header/activity-panel/activity-card';
import { CurrencyContext } from '../../../lib/currency-context';
import sanitizeHTML from '../../../lib/sanitize-html';

class ReviewsPanel extends Component {
	recordReviewEvent( eventName ) {
		recordEvent( `activity_panel_reviews_${ eventName }`, {} );
	}

	deleteReview( reviewId ) {
		const { deleteReview, createNotice, updateReview } = this.props;
		if ( reviewId ) {
			deleteReview( reviewId )
				.then( () => {
					createNotice(
						'success',
						__(
							'Review successfully deleted.',
							'woocommerce-admin'
						),
						{
							actions: [
								{
									label: __( 'Undo', 'woocommerce-admin' ),
									onClick: () => {
										updateReview(
											reviewId,
											{
												deleted: false,
											},
											{
												_embed: 1,
											}
										);
									},
								},
							],
						}
					);
				} )
				.catch( () => {
					createNotice(
						'error',
						__(
							'Review could not be deleted.',
							'woocommerce-admin'
						)
					);
				} );
		}
	}

	updateReviewStatus( reviewId, newStatus, oldStatus ) {
		const { createNotice, updateReview } = this.props;
		if ( reviewId ) {
			updateReview( reviewId, { status: newStatus } )
				.then( () => {
					createNotice(
						'success',
						__(
							'Review successfully updated.',
							'woocommerce-admin'
						),
						{
							actions: [
								{
									label: __( 'Undo', 'woocommerce-admin' ),
									onClick: () => {
										updateReview(
											reviewId,
											{
												status: oldStatus,
											},
											{
												_embed: 1,
											}
										);
									},
								},
							],
						}
					);
				} )
				.catch( () => {
					createNotice(
						'error',
						__(
							'Review could not be updated.',
							'woocommerce-admin'
						)
					);
				} );
		}
	}

	renderEmptyCard() {
		const { lastApprovedReviewTime } = this.props;

		let content = '';
		let buttonUrl = '';
		let buttonText = '';
		let eventName = 'learn_more';

		if ( lastApprovedReviewTime ) {
			const now = new Date();
			const DAY = 24 * 60 * 60 * 1000;
			if ( ( now.getTime() - lastApprovedReviewTime ) / DAY > 30 ) {
				buttonUrl =
					'https://woocommerce.com/posts/reviews-woocommerce-best-practices/';
				buttonText = __( 'Learn more', 'woocommerce-admin' );
				content = (
					<Fragment>
						<p>
							{ __(
								"We noticed that it's been a while since your products had any reviews.",
								'woocommerce-admin'
							) }
						</p>
						<p>
							{ __(
								'Take some time to learn about best practices for collecting and using your reviews.',
								'woocommerce-admin'
							) }
						</p>
					</Fragment>
				);
			} else {
				buttonUrl = getAdminLink(
					'edit-comments.php?comment_type=review'
				);
				buttonText = __( 'View all Reviews', 'woocommerce-admin' );
				content = (
					<p>
						{ __(
							/* eslint-disable max-len */
							"Awesome, you've moderated all of your product reviews. How about responding to some of those negative reviews?",
							'woocommerce-admin'
							/* eslint-enable */
						) }
					</p>
				);
				eventName = 'view_reviews';
			}
		} else {
			buttonUrl =
				'https://woocommerce.com/posts/reviews-woocommerce-best-practices/';
			buttonText = __( 'Learn more', 'woocommerce-admin' );
			content = (
				<Fragment>
					<p>
						{ __(
							"Your customers haven't started reviewing your products.",
							'woocommerce-admin'
						) }
					</p>
					<p>
						{ __(
							'Take some time to learn about best practices for collecting and using your reviews.',
							'woocommerce-admin'
						) }
					</p>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<ActivityCard
					className="woocommerce-empty-activity-card"
					title=""
					icon=""
				>
					<span
						className="woocommerce-review-empty__success-icon"
						role="img"
						aria-labelledby="woocommerce-review-empty-message"
					>
						🎉
					</span>
					<H id="woocommerce-review-empty-message">
						{ __(
							'You have no reviews to moderate',
							'woocommerce-admin'
						) }
					</H>
					{ content }
				</ActivityCard>
				<Link
					href={ buttonUrl }
					onClick={ () => this.recordReviewEvent( eventName ) }
					className="woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty"
					type="wp-admin"
				>
					{ buttonText }
				</Link>
			</Fragment>
		);
	}

	renderReview( review, props ) {
		const { lastRead } = props;
		const product =
			( review &&
				review._embedded &&
				review._embedded.up &&
				review._embedded.up[ 0 ] ) ||
			null;

		if ( isNull( product ) ) {
			return null;
		}

		const title = interpolateComponents( {
			mixedString: sprintf(
				__(
					'{{productLink}}%s{{/productLink}} reviewed by {{authorLink}}%s{{/authorLink}} {{reviewRating}}{{/reviewRating}}',
					'woocommerce-admin'
				),
				product.name,
				review.reviewer
			),
			components: {
				productLink: (
					<Link
						href={ product.permalink }
						onClick={ () => this.recordReviewEvent( 'product' ) }
						type="external"
					/>
				),
				authorLink: (
					<Link
						href={ 'mailto:' + review.reviewer_email }
						onClick={ () => this.recordReviewEvent( 'customer' ) }
						type="external"
					/>
				),
				reviewRating: (
					<ReviewRating
						review={ review }
						icon="star-outline"
						outlineIcon="star"
						size={ 16 }
					/>
				),
			},
		} );

		const subtitle = (
			<Fragment>
				{ review.verified && (
					<span className="woocommerce-review-activity-card__verified">
						<Gridicon icon="checkmark" size={ 18 } />
						{ __( 'Verified customer', 'woocommerce-admin' ) }
					</span>
				) }
			</Fragment>
		);

		const productImage =
			get( product, [ 'images', 0 ] ) || get( product, [ 'image' ] );
		const productImageClasses = classnames(
			'woocommerce-review-activity-card__image-overlay__product',
			{
				'is-placeholder': ! productImage || ! productImage.src,
			}
		);
		const icon = (
			<div className="woocommerce-review-activity-card__image-overlay">
				<Gravatar user={ review.reviewer_email } size={ 24 } />
				<div className={ productImageClasses }>
					<ProductImage product={ product } />
				</div>
			</div>
		);

		const manageReviewEvent = {
			date: review.date_created_gmt,
			status: review.status,
		};

		const cardActions = [
			<Button
				key="approve-action"
				isSecondary
				onClick={ () => {
					recordEvent( 'review_approve_click', manageReviewEvent );
					this.updateReviewStatus(
						review.id,
						'approved',
						review.status
					);
				} }
			>
				{ __( 'Approve', 'woocommerce-admin' ) }
			</Button>,
			<Button
				key="spam-action"
				isTertiary
				onClick={ () => {
					recordEvent(
						'review_mark_as_spam_click',
						manageReviewEvent
					);
					this.updateReviewStatus( review.id, 'spam', review.status );
				} }
			>
				{ __( 'Mark as spam', 'woocommerce-admin' ) }
			</Button>,
			<Button
				key="delete-action"
				isDestructive
				isTertiary
				onClick={ () => {
					recordEvent( 'review_delete_click', manageReviewEvent );
					this.deleteReview( review.id );
				} }
			>
				{ __( 'Delete', 'woocommerce-admin' ) }
			</Button>,
		];

		return (
			<ActivityCard
				className="woocommerce-review-activity-card"
				key={ review.id }
				title={ title }
				subtitle={ subtitle }
				date={ review.date_created_gmt }
				icon={ icon }
				actions={ cardActions }
				unread={
					review.status === 'hold' ||
					! lastRead ||
					! review.date_created_gmt ||
					new Date( review.date_created_gmt + 'Z' ).getTime() >
						lastRead
				}
			>
				<span
					dangerouslySetInnerHTML={ sanitizeHTML( review.review ) }
				/>
			</ActivityCard>
		);
	}

	renderReviews( reviews ) {
		if ( reviews.length === 0 ) {
			return this.renderEmptyCard();
		}
		return (
			<>
				{ reviews.map( ( review ) =>
					this.renderReview( review, this.props )
				) }
				<Link
					href={ getAdminLink(
						'edit-comments.php?comment_type=review'
					) }
					onClick={ () => this.recordReviewEvent( 'reviews_manage' ) }
					className="woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty"
					type="wp-admin"
				>
					{ __( 'Manage all reviews', 'woocommerce-admin' ) }
				</Link>
			</>
		);
	}

	render() {
		const { isRequesting, isError, reviews } = this.props;

		if ( isError ) {
			const title = __(
				'There was an error getting your reviews. Please try again.',
				'woocommerce-admin'
			);
			const actionLabel = __( 'Reload', 'woocommerce-admin' );
			const actionCallback = () => {
				// @todo Add tracking for how often an error is displayed, and the reload action is clicked.
				window.location.reload();
			};

			return (
				<Fragment>
					<EmptyContent
						title={ title }
						actionLabel={ actionLabel }
						actionURL={ null }
						actionCallback={ actionCallback }
					/>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<Section>
					{ isRequesting ? (
						<ActivityCardPlaceholder
							className="woocommerce-review-activity-card"
							hasAction
							hasDate
							lines={ 1 }
						/>
					) : (
						<>{ this.renderReviews( reviews, this.props ) }</>
					) }
				</Section>
			</Fragment>
		);
	}
}

ReviewsPanel.propTypes = {
	reviews: PropTypes.array.isRequired,
	isError: PropTypes.bool,
	isRequesting: PropTypes.bool,
};

ReviewsPanel.defaultProps = {
	reviews: [],
	isError: false,
	isRequesting: false,
};

ReviewsPanel.contextType = CurrencyContext;

export default compose( [
	withDispatch( ( dispatch ) => {
		const { deleteReview, updateReview } = dispatch( REVIEWS_STORE_NAME );
		const { createNotice } = dispatch( 'core/notices' );

		return {
			deleteReview,
			createNotice,
			updateReview,
		};
	} ),
	withSelect( ( select, props ) => {
		const { hasUnapprovedReviews } = props;
		const { getReviews, getReviewsError, isResolving } = select(
			REVIEWS_STORE_NAME
		);
		let reviews = [];
		let isError = false;
		let isRequesting = false;
		let lastApprovedReviewTime = null;
		if ( hasUnapprovedReviews ) {
			const reviewsQuery = {
				page: 1,
				per_page: 5,
				status: 'hold',
				_embed: 1,
			};
			reviews = getReviews( reviewsQuery ).filter(
				( review ) => review.status === 'hold'
			);
			isError = Boolean( getReviewsError( reviewsQuery ) );
			isRequesting = isResolving( 'getReviews', [ reviewsQuery ] );
		} else {
			const approvedReviewsQuery = {
				page: 1,
				per_page: QUERY_DEFAULTS.pageSize,
				status: 'approved',
				_embed: 1,
			};
			const approvedReviews = getReviews( approvedReviewsQuery );
			if ( approvedReviews.length ) {
				const lastApprovedReview = approvedReviews[ 0 ];
				if ( lastApprovedReview.date_created_gmt ) {
					const creationDate = new Date(
						lastApprovedReview.date_created_gmt
					);
					lastApprovedReviewTime = creationDate.getTime();
				}
			}

			isError = Boolean( getReviewsError( approvedReviewsQuery ) );
			isRequesting = isResolving( 'getReviews', [
				approvedReviewsQuery,
			] );
		}

		return {
			reviews,
			isError,
			isRequesting,
			lastApprovedReviewTime,
		};
	} ),
] )( ReviewsPanel );
