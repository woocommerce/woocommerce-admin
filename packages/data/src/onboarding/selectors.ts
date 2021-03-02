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
	return state.errors[ selector ] || false;
};

export const isOnboardingRequesting = (
	state: OnboardingState,
	selector: string
): object | false => {
	return state.requesting[ selector ] || false;
};

export type OnboardingSelectors = {
	getProfileItems: () => ProfileItems;
};

type OnboardingState = {
	profileItems: ProfileItems;
	tasksStatus: object;
	errors: object;
	requesting: object;
};

export type ProfileItems = {
	account_type?: string;
	business_extensions: [  ];
	completed: boolean | null;
	industry: [  ];
	other_platform: 'shopify';
	other_platform_name: string | null;
	plugins: string | null;
	product_count: string;
	product_types: Array< string > | null;
	revenue: string;
	selling_venues: string;
	setup_client: boolean;
	skipped: boolean | null;
	theme: boolean | null;
	wccom_connected: boolean;
};
