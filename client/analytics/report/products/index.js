/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Header from 'layout/header';
import DatePicker from 'components/date-picker';
import FilterPicker from 'components/filter-picker';
import { filters, filterPaths } from './constants';
import './style.scss';

export default class extends Component {
	render() {
		const { query, path } = this.props;
		const queryKey = JSON.stringify( query );
		return (
			<Fragment>
				<Header
					sections={ [
						[ '/analytics', __( 'Analytics', 'wc-admin' ) ],
						__( 'Products', 'wc-admin' ),
					] }
				/>
				<div className="woocommerce-products__pickers">
					<DatePicker query={ query } path={ path } key={ queryKey } />
					<FilterPicker
						query={ query }
						path={ path }
						filters={ filters }
						filterPaths={ filterPaths }
					/>
				</div>
			</Fragment>
		);
	}
}
