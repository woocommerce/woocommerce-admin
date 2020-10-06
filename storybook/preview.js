/**
 * External dependencies
 */
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

/**
 * Internal dependencies
 */
import './style.scss';
import './wordpress/css/wp-admin.min.css';

addDecorator( withA11y );
addDecorator( withKnobs );
