/** @format */

export default {
	getOrders( state ) {
		const { orders } = state.orders;
		return orders || [];
	},
};
