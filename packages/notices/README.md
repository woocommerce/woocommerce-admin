# Notices

State management for notices.

NOTE: This has been copied from Gutenberg so that we can iterate on it faster
than if we were relying on Gutenberg releasing a new version with our
requirements. Once Gutenberg supports our requirements this package should be
removed.

**Update:** Changes required have been shipped in the Gutenberg package released with WP 5.7, so this package will be removed when WP 5.9 becomes available. Please use the Gutenberg version instead.

## Installation

Install the module

```bash
pnpm install @wordpress/notices
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as lower versions of IE then using [core-js](https://github.com/zloirock/core-js) or [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill) will add support for these methods. Learn more about it in [Babel docs](https://babeljs.io/docs/en/next/caveats)._

## Usage

When imported, the notices module registers a data store on the `core/notices` namespace. In WordPress, this is accessed from `wp.data.dispatch( 'core/notices' )`.

For more information about consuming from a data store, refer to [the `@wordpress/data` documentation on _Data Access and Manipulation_](/packages/data/README.md#data-access-and-manipulation).

For a full list of actions and selectors available in the `core/notices` namespace, refer to the [_Notices Data_ Handbook page](/docs/designers-developers/developers/data/data-core-notices.md).

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
