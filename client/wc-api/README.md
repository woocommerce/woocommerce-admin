# WooCommerce Fresh Data API module

This is the WooCommerce Fresh Data API Module. It interfaces with the [WooCommerce REST API](http://woocommerce.github.io/woocommerce-rest-api-docs/) and provides a declarative interface of selectors and mutations to the application.


## Selectors

Selectors serve two purposes. They retrieve API data from the current state in the format an application would want it. Second, they set requirements for data to be fetched from the API. The first time a selector runs, it's likely that the data will not yet exist as it hasn't yet been fetched. However, future runs will have the data as fresh as specified.

All selectors start with a `requirement` object. Time options are in milliseconds and it's encouraged to use the `SECOND`, `MINUTE` or `HOUR` constants to calculate appropriate time scales (e.g. `5 * MINUTE`)

All requirement objects have the following available options:
 * `freshness`: Time allowed until data will be automatically re-fetched.
 * `timeout`: Time allowed for a request

### `getOrdersPage`

Usage: `getOrdersPage( requirement, params )`

Gets a page of orders from the API.

`requirement`: See above.
`params`: Object with any of the following:
  * `page`: The page number.
  * `per_page`: The number of orders per page.


## Mutations

Mutations are the way data is sent to the API to affect changes in WooCommerce. This includes the normal create, update, and delete operations. It should be noted that all WooCommerce API mutations do update local state with their result, meaning that selectors will reflect new data after a mutation is responded to and completed.

Mutations are asynchronous, so they do not take place immediately. After the server response is received, the internal state is updated with the returned data. Internal state is not "optimistic", that is, the internal state will not change until the authoritative response from the server is received. If you desire an "optimistic" view in your application, you will need to render your interim state until after the mutation is complete.

### `updateOrder`

Usage: `updateOrder( data )`

`data`: Object with valid `id` and other fields to be updated.

### `fulfillOrder`

Usage: `fulfillOrder( orderId )`

`orderId`: Valid numeric order id. Sends update to change status to `completed`.


## Future

Eventually what has been started here can be moved to its own npm module (perhaps `@fresh-data/woocommerce-api`).
The methods here are the only thing specific to the `wp-admin` environment, so the `methods.js` file should stay here. Everything else can go and be cross-environment to Calypso, or OAuth, etc.
