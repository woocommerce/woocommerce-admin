/**
 * External dependencies
 */
import React from '@wordpress/element';

export const PageContent = ( { title, body } ) => {
	return (
		<div className="woocommerce-task-dashboard__welcome-modal__page-content">
			<h2 className="woocommerce-task-dashboard__welcome-modal__page-content__header">
				{ title }
			</h2>
			<p className="woocommerce-task-dashboard__welcome-modal__page-content__body">
				{ body }
			</p>
		</div>
	);
};
