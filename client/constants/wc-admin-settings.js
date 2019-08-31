/** @format */
/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

const wcAdminSettings = getSetting( 'wcAdminSettings', [] );

export const ACTIONABLE_STATUSES = wcAdminSettings.woocommerce_actionable_order_statuses || [];
export const EXCLUDED_STATUSES = wcAdminSettings.woocommerce_excluded_report_order_statuses || [];
