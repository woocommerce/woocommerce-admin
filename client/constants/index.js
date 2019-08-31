/** @format */
/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

export * from '@woocommerce/settings';
export * from './endpoint-data';
export * from './wc-admin-settings';

export const ALERT_COUNT = getSetting( 'alertCount', 0 );
export const COMMENT_MODERATION = getSetting( 'commentModeration', '1' );
export const CURRENT_USER_DATA = getSetting( 'currentUserData', [] );
export const EMBED_BREADCRUMBS = getSetting( 'embedBreadcrumbs', false );
export const MANAGE_STOCK = getSetting( 'manageStock', 'no' );
export const NOTIFY_LOW_STOCK_AMOUNT = getSetting( 'notifyLowStockAmount', 1 );
export const ONBOARDING = getSetting( 'onboarding', [] );
export const REVIEWS_ENABLED = getSetting( 'reviewsEnabled', 'no' );
export const STOCK_STATUSES = getSetting( 'stockStatuses', [] );
