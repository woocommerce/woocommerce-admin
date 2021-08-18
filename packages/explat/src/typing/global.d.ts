declare global {
	interface Window {
		wcSettings: {
			preloadSettings: {
				general: {
					woocommerce_default_country: string;
				};
			};
		};
	}
}

/*~ If your module exports nothing, you'll need this line. Otherwise, delete it */
export {};
