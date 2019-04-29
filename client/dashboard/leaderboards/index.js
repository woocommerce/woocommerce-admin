/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { xor } from 'lodash';
import PropTypes from 'prop-types';
import { SelectControl, TextControl } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { EllipsisMenu, MenuItem, MenuTitle, SectionHeader } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import Leaderboard from 'analytics/components/leaderboard';
import withSelect from 'wc-api/with-select';
import './style.scss';

class Leaderboards extends Component {
	constructor( props ) {
		super( ...arguments );
		const { title } = props;

		this.state = {
			hiddenLeaderboardKeys: props.userPrefLeaderboards || [ 'coupons', 'customers' ],
			rowsPerTable: parseInt( props.userPrefLeaderboardRows ) || 5,
			titleInput: title || __( 'Leaderboards', 'woocommerce-admin' ),
		};

		this.onMenuToggle = this.onMenuToggle.bind( this );
		this.onTitleChange = this.onTitleChange.bind( this );
		this.onTitleBlur = this.onTitleBlur.bind( this );
		this.toggle = this.toggle.bind( this );
	}

	toggle( key ) {
		return () => {
			const hiddenLeaderboardKeys = xor( this.state.hiddenLeaderboardKeys, [ key ] );
			this.setState( { hiddenLeaderboardKeys } );
			const userDataFields = {
				[ 'dashboard_leaderboards' ]: hiddenLeaderboardKeys,
			};
			this.props.updateCurrentUserData( userDataFields );
		};
	}

	onMenuToggle( isOpen ) {
		const { titleInput } = this.state;
		if ( ! isOpen && titleInput === '' ) {
			this.setState( { titleInput: __( 'Leaderboards', 'woocommerce-admin' ) } );
		}
	}

	onTitleChange( updatedTitle ) {
		this.setState( { titleInput: updatedTitle } );
	}

	onTitleBlur() {
		const { onTitleUpdate } = this.props;
		const { titleInput } = this.state;

		if ( onTitleUpdate ) {
			onTitleUpdate( titleInput );
		}
	}

	setRowsPerTable = rows => {
		this.setState( { rowsPerTable: parseInt( rows ) } );
		const userDataFields = {
			[ 'dashboard_leaderboard_rows' ]: parseInt( rows ),
		};
		this.props.updateCurrentUserData( userDataFields );
	};

	renderMenu() {
		const { hiddenLeaderboardKeys, rowsPerTable, titleInput } = this.state;
		const { allLeaderboards } = this.props;

		return (
			<EllipsisMenu
				label={ __(
					'Choose which leaderboards to display and other settings',
					'woocommerce-admin'
				) }
				onToggle={ this.onMenuToggle }
			>
				<Fragment>
					{ window.wcAdminFeatures[ 'dashboard/customizable' ] && (
						<div className="woocommerce-ellipsis-menu__item">
							<TextControl
								label={ __( 'Section Title', 'woocommerce-admin' ) }
								onBlur={ this.onTitleBlur }
								onChange={ this.onTitleChange }
								value={ titleInput }
							/>
						</div>
					) }
					<MenuTitle>{ __( 'Leaderboards', 'woocommerce-admin' ) }</MenuTitle>
					{ allLeaderboards.map( leaderboard => {
						return (
							<MenuItem
								checked={ ! hiddenLeaderboardKeys.includes( leaderboard.id ) }
								isCheckbox
								isClickable
								key={ leaderboard.id }
								onInvoke={ this.toggle( leaderboard.id ) }
							>
								{ leaderboard.label }
							</MenuItem>
						);
					} ) }
					<SelectControl
						className="woocommerce-dashboard__dashboard-leaderboards__select"
						label={ <MenuTitle>{ __( 'Rows Per Table', 'woocommerce-admin' ) }</MenuTitle> }
						value={ rowsPerTable }
						options={ Array.from( { length: 20 }, ( v, key ) => ( {
							v: key + 1,
							label: key + 1,
						} ) ) }
						onChange={ this.setRowsPerTable }
					/>
				</Fragment>
			</EllipsisMenu>
		);
	}

	renderLeaderboards() {
		const { hiddenLeaderboardKeys, rowsPerTable } = this.state;
		const { allLeaderboards, query } = this.props;

		return allLeaderboards.map( leaderboard => {
			if ( hiddenLeaderboardKeys.includes( leaderboard.id ) ) {
				return;
			}

			return (
				<Leaderboard
					headers={ leaderboard.headers }
					id={ leaderboard.id }
					key={ leaderboard.id }
					query={ query }
					title={ leaderboard.label }
					totalRows={ rowsPerTable }
				/>
			);
		} );
	}

	render() {
		const { title } = this.props;

		return (
			<Fragment>
				<div className="woocommerce-dashboard__dashboard-leaderboards">
					<SectionHeader
						title={ title || __( 'Leaderboards', 'woocommerce-admin' ) }
						menu={ this.renderMenu() }
					/>
					<div className="woocommerce-dashboard__columns">{ this.renderLeaderboards() }</div>
				</div>
			</Fragment>
		);
	}
}

Leaderboards.propTypes = {
	query: PropTypes.object.isRequired,
};

export default compose(
	withSelect( select => {
		const { getCurrentUserData, getItems, getItemsError, isGetItemsRequesting } = select(
			'wc-api'
		);
		const userData = getCurrentUserData();
		const allLeaderboards = wcSettings.dataEndpoints.leaderboards;

		return {
			allLeaderboards,
			getItems,
			getItemsError,
			isGetItemsRequesting,
			userPrefLeaderboards: userData.dashboard_leaderboards,
			userPrefLeaderboardRows: userData.dashboard_leaderboard_rows,
		};
	} ),
	withDispatch( dispatch => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( Leaderboards );
