/**
 * External dependencies
 */
import React from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

export const QuickLinks = ( { children } ) => {
	return <div className="woocommerce-quick-links">{ children }</div>;
};

//        <QuickLinks>
//            <QuickLinkCategory title={"some title"}>
//              <QuickLink />
//              <QuickLink />
