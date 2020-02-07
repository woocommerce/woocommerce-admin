/**
 * External dependencies
 */
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

/**
 * Internal dependencies
 */
// import './style.scss';
// commented for now, will come back when we have a scss webpack loader configured

addDecorator( withA11y );
addDecorator( withKnobs );
