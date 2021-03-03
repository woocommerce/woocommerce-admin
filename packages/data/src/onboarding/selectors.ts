export const getProfileItems = ( state: OnboardingState ) => {
	return state.profileItems || {};
};

export const getTasksStatus = ( state: OnboardingState ) => {
	return state.tasksStatus || {};
};

export const getOnboardingError = (
	state: OnboardingState,
	selector: string
) => {
	// @ts-ignore
	return state.errors[ selector ] || false;
};

export const isOnboardingRequesting = (
	state: OnboardingState,
	selector: string
): object | false => {
	// @ts-ignore
	return state.requesting[ selector ] || false;
};

export type OnboardingSelectors = {
	getProfileItems: () => ProfileItems;
};

export type OnboardingState = {
	profileItems: ProfileItems;
	tasksStatus: object;
	errors: object;
	requesting: object;
};

export type Industry = {
	slug: string;
};

export type ProductCount = '0' | '1-10' | '11-100' | '101 - 1000' | '1000+';

export type ProductTypeSlug =
	| 'physical'
	| 'bookings'
	| 'download'
	| 'memberships'
	| 'product-add-ons'
	| 'product-bundles'
	| 'subscriptions';

export type OtherPlatformSlug =
	| 'shopify'
	| 'bigcommerce'
	| 'wix'
	| 'amazon'
	| 'ebay'
	| 'etsy'
	| 'squarespace'
	| 'other';

export type RevenueTypeSlug =
	| 'none'
	| 'rather-not-say'
	| 'up-to-2500'
	| '2500-10000'
	| '10000-50000'
	| '50000-250000'
	| 'more-than-250000';

export type ProfileItems =
	| { skipped: true; wccom_connected: false }
	| {
			business_extensions: [  ];
			completed: boolean | null;
			industry: Industry[];
			other_platform: OtherPlatformSlug;
			other_platform_name: string | null;
			plugins: string | null;
			product_count: ProductCount;
			product_types: ProductTypeSlug[] | null;
			revenue: RevenueTypeSlug;
			selling_venues: string;
			setup_client: boolean;
			skipped: boolean | null;
			theme: string | null;
			wccom_connected: boolean;
	  };
