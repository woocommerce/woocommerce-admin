/**
 * External dependencies
 */
import React from '@wordpress/element';
import { external, Icon } from '@wordpress/icons';
import { __experimentalText as Text } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
// TODO handle the clicking here

export const QuickLink = ( { icon, title, href, isExternal } ) => {
	return (
		<div className="woocommerce-quick-links__item">
			<a href={ href } className="woocommerce-quick-links__item-link">
				<Icon icon={ icon } />
				<Text
					className="woocommerce-quick-links__item-link__text"
					as="div"
					variant="button"
				>
					{ title }
				</Text>
				{ isExternal && <Icon icon={ external } /> }
			</a>
		</div>
	);
};
