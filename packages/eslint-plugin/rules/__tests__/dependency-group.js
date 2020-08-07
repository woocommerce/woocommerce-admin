/**
 * External dependencies
 */
import { RuleTester } from 'eslint';

/**
 * Internal dependencies
 */
import rule from '../dependency-group';

const ruleTester = new RuleTester( {
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
	},
} );

ruleTester.run( 'dependency-group', rule, {
	valid: [
		{
			code: `
/**
 * External dependencies
 */
import { get } from 'lodash';
import classnames from 'classnames';

/**
 * WooCommerce dependencies
 */
import { withPluginsHydration } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import edit from './edit';`,
		},
		{
			code: `
/**
 * External dependencies
 */
const { get } = require( 'lodash' );
const classnames = require( 'classnames' );

/**
 * WooCommerce dependencies
 */
import { withPluginsHydration } from '@woocommerce/data';

/**
 * Internal dependencies
 */
const edit = require( './edit' );`,
		},
	],
	invalid: [
		{
			code: `
import { get } from 'lodash';
import classnames from 'classnames';
/*
 * woocommerce dependencies.
 */
import { withPluginsHydration } from '@woocommerce/data';
import edit from './edit';`,
			errors: [
				{
					message:
						'Expected preceding "External dependencies" comment block',
				},
				{
					message:
						'Expected preceding "WooCommerce dependencies" comment block',
				},
				{
					message:
						'Expected preceding "Internal dependencies" comment block',
				},
			],
			output: `
/**
 * External dependencies
 */
import { get } from 'lodash';
import classnames from 'classnames';
/**
 * WooCommerce dependencies
 */
import { withPluginsHydration } from '@woocommerce/data';
/**
 * Internal dependencies
 */
import edit from './edit';`,
		},
		{
			code: `
const { get } = require( 'lodash' );
const classnames = require( 'classnames' );
/*
 * woocommerce dependencies.
 */
const { withPluginsHydration } = require( '@woocommerce/element' );
const edit = require( './edit' );`,
			errors: [
				{
					message:
						'Expected preceding "External dependencies" comment block',
				},
				{
					message:
						'Expected preceding "WooCommerce dependencies" comment block',
				},
				{
					message:
						'Expected preceding "Internal dependencies" comment block',
				},
			],
			output: `
/**
 * External dependencies
 */
const { get } = require( 'lodash' );
const classnames = require( 'classnames' );
/**
 * WooCommerce dependencies
 */
const { withPluginsHydration } = require( '@woocommerce/element' );
/**
 * Internal dependencies
 */
const edit = require( './edit' );`,
		},
	],
} );
