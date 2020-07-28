/**
 * External dependencies
 */
import React from 'react';
import { Guide } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { AScene } from './illustrations/a-scene';
import { AnotherScene } from './illustrations/another-scene';
import { OneMoreScene } from './illustrations/one-more-scene';

export const WelcomeModal = () => {
	return (
		<Guide
			pages={ [
				{ content: <AScene /> },
				{ content: <AnotherScene /> },
				{ content: <OneMoreScene /> },
			] }
		/>
	);
};
