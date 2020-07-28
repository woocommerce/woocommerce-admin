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
				{
					image: <AScene />,
					content: <>Hello world</>,
				},
				{
					image: <AScene />,
					content: <>Hello World</>,
				},
				{
					image: <AScene />,
					content: <>Hello world</>,
				},
			] }
		/>
	);
};
