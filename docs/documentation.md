# How To Document Components

We rely on a markdown documentation file for [the docs site on github.io,](https://woocommerce.github.io/woocommerce-admin/#/) and an example JavaScript file for the DevDocs section in wp-admin. Read on for how to build out the docs files and devdocs section.

## 1. Create a markdown documentation file

Create a `README.md` file in the component directory. You can start with the documentation for a simple component as a reference (we recommend the [Card component](https://raw.githubusercontent.com/woocommerce/woocommerce-admin/master/packages/components/src/card/README.md)). Typically the markdown file has a description of the component, example usage, and a table describing the available props.

## 2. Create a JavaScript example file

The JavaScript example will be rendered in the DevDocs section and serves as interactive documentation for the component. Create a `docs/example.js` file in the component directory.

See [count/docs/example.js](https://github.com/woocommerce/woocommerce-admin/blob/master/packages/components/src/count/docs/example.js) for a simple example, or [table/docs/example.js](https://github.com/woocommerce/woocommerce-admin/blob/master/packages/components/src/table/docs/example.js) for a more detailed example.

## 3. Generate the docs with `npm run docs`

This creates the file in `/docs/components/` for your new component and builds the sidebar links for the documentation site.

You can test this by running `npx docsify serve docs`, it will spin up a server at localhost:3000 to preview the docs. This also live-reloads as you're making changes.


## 4. Add your example to `client/devdocs/examples.json`

Keep these alphabetized. The `component` property is required. You can optionally provide a `filePath`, but it will default to `/docs/component/packages/{component-name-as-slug}`.

Now you can visit `/wp-admin/admin.php?page=wc-admin&path=/devdocs` to see your component in action.
