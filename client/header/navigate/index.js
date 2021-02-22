//  We don't have a concept of app hierarchy within the WooCommerce homescreen. To add that support
//  and also support bookmarking, we must define the hierarchy statically.
const applicationHierarchy = {
	root: {
		name: 'home',
		children: [
			{
				name: 'tasks',
				children: [
					{
						name: 'payments',
						children: [
							{
								name: 'setup',
							},
						],
					},
				],
			},
		],
	},
};

export const navigateDown = () => {
	// first check is there a referrer in the history state? if not, go up the hierarchy
};
