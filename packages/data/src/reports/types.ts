import { Query } from '../types';

export type ReportsState = {
	itemErrors: Record< string, unknown >;
	statErrors: Record< string, unknown >;
};

export type ReportQuery = {
	orderby: string;
	order: 'asc' | 'desc';
	page: number;
	per_page: number;
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
} & Query;
