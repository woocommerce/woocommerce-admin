/** @format */
/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/settings';

const endpointData = getSetting( 'dataEndpoints', [] );

export const LEADERBOARDS = endpointData.leaderboards || [];
export const JETPACK_STATUS = endpointData.jetpackStatus || [];
export const PERFORMANCE_INDICATORS = endpointData.performanceIndicators || [];
