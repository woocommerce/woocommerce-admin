import { Query } from '../types';

export type ReportItems = {
	data: Record< string, unknown >;
	totalResults: number;
	totalPages: number;
};

type DataValues = {
	net_revenue: number;
	orders_count: number;
	avg_order_value: number;
	avg_items_per_order: number;
	num_items_sold: number;
	coupons: number;
	coupons_count: number;
	total_customers: number;
	products: number;
};

export type Segments = {
	segments: {
		segment_id: number;
		subtotals: DataValues;
	}[];
};

export type Interval = {
	interval: 'day' | 'week' | 'month' | 'year';
	date_start: string;
	date_start_gmt: string;
	date_end: string;
	date_end_gmt: string;
	subtotals: DataValues & Segments;
};

export type ReportStat = {
	totals: DataValues & Segments;
	intervals: Interval[];
};

export type ReportStatData = {
	data: ReportStat;
	totalResults: number;
	totalPages: number;
};

export type ReportsState = {
	itemErrors: Record< string, unknown >;
	statErrors: Record< string, unknown >;
	items: Record< string, ReportItems >;
	stats: Record< string, ReportStatData >;
};

export type ReportQuery = {
	per_page: number;
	order: 'asc' | 'desc';
	page?: number;
	paged?: number;
	match?: string;
	orderby?: string;
	product_includes?: number[];
	product_excludes?: number[];
	variation_includes?: number[];
	variation_excludes?: number[];
	coupon_includes?: number[];
	coupon_excludes?: number[];
	tax_rate_includes?: number[];
	tax_rate_excludes?: number[];
	status_is?: string[];
	status_is_not?: string[];
	customer_type?: 'returning' | 'new';
	refunds?: 'all' | 'partial' | 'full' | 'none';
	extended_info?: boolean;
	order_includes?: number[];
	order_excludes?: number[];
	attribute_is?: { [ key: string ]: string }[];
	attribute_is_not?: { [ key: string ]: string }[];
	segmentby?: string;
	fields?: Record< string, unknown >;
	interval?: string;
} & Query;

export type ReportsResponse< T = Record< string, unknown > > = {
	data: T;
} & Response;

export type ReportFilter = {
	key: string;
	rule: string;
	label: string;
	value: string;
	chartMode?: string;
	component?: string;
	subFilters?: ( ReportFilter & {
		path: string[];
	} )[];
};
type Rule = {
	value: string;
	label: string;
};

export type AdvancedFilter = {
	title: string;
	filters?: Record<
		string,
		{
			labels: {
				add: string;
				remove: string;
				rule: string;
				title: string;
				filter: string;
			};
			rules: Rule[];
			input: {
				component: string;
				options: unknown;
			};
			allowMultiple: boolean;
		}
	>;
};
