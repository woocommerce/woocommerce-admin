/** @format */
/**
 * External dependencies
 */
import { select, subscribe, dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * WooCommerce dependencies
 */
import { getAdminLink } from '@woocommerce/navigation';

/**
 * Displays a notice on page save and updates the hompage options.
 *
 * Adapted from WSUWP Help Docs by Washington State University (GPL v2).
 * https://github.com/washingtonstateuniversity/WSUWP-Plugin-Help-Docs/blob/master/src/_js/blocks/notices.js
 */
const onboardingHomepageNotice = () => {
	const post = select( 'core/editor' ).getCurrentPost();

	const noticeMeta = {
		wasSavingPost: select( 'core/editor' ).isSavingPost(),
		wasAutosavingPost: select( 'core/editor' ).isAutosavingPost(),
		wasPublishingPost: select( 'core/editor' ).isPublishingPost(),
		wasStatus: post.status,
	};

	subscribe( () => {
		const isSavingPost = select( 'core/editor' ).isSavingPost();
		const isAutosavingPost = select( 'core/editor' ).isAutosavingPost();
		const isPublishingPost = select( 'core/editor' ).isPublishingPost();
		const isStatus = select( 'core/editor' ).getCurrentPost().status;

		// This triggers when the homepage is first published.
		const shouldTriggerAdminNotice =
			noticeMeta.wasSavingPost &&
			! isSavingPost &&
			noticeMeta.wasPublishingPost &&
			! isPublishingPost &&
			! noticeMeta.wasAutosavingPos &&
			'publish' === isStatus;

		noticeMeta.wasSavingPost = isSavingPost;
		noticeMeta.wasAutosavingPost = isAutosavingPost;
		noticeMeta.wasPublishingPost = isPublishingPost;
		noticeMeta.wasStatus = isStatus;

		if ( shouldTriggerAdminNotice ) {
			if ( select( 'core/editor' ).didPostSaveRequestSucceed() ) {
				setTimeout( () => {
					wp.data.dispatch( 'core/notices' ).removeNotice( 'SAVE_POST_NOTICE_ID' );
				}, 0 );

				apiFetch( {
					path: '/wc-admin/v1/options',
					method: 'POST',
					data: {
						show_on_front: 'page',
						page_on_front: post.id,
					},
				} );

				dispatch( 'core/notices' ).createSuccessNotice(
					__( 'Your homepage was published.', 'woocommerce-admin' ),
					{
						id: 'ONBOARDING_HOME_PAGE_NOTICE',
						actions: [
							{
								url: getAdminLink( 'admin.php?page=wc-admin&task=appearance' ),
								label: 'Continue setup.',
							},
						],
					}
				);
			}
		}
	} );
};

wp.domReady( () => {
	if ( 'page' === select( 'core/editor' ).getCurrentPostType() ) {
		onboardingHomepageNotice();
	}
} );
