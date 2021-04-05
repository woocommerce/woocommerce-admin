// Type for the basic selectors built into @wordpress/data, note these
// types define the interface for the public selectors, so state is not an
// argument.
export type WPDataSelectors = {
	hasStartedResolution: ( selector: string, args?: string[] ) => boolean;
	hasFinishedResolution: ( selector: string, args?: string[] ) => boolean;
	isResolving: ( selector: string, args: string[] ) => boolean;
};

// Omitting state from selector parameter
export type WPDataSelector< T > = T extends (
	state: infer S,
	...args: infer A
) => infer R
	? ( ...args: A ) => R
	: T;

export type Query = {
	search?: string;
	period: string;
	compare: string;
	after: string;
	before: string;
};
