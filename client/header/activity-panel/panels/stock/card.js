/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { BaseControl, Button } from '@wordpress/components';
import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { ESCAPE } from '@wordpress/keycodes';
import { get } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Link, ProductImage } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { ActivityCard } from '../../activity-card';

class ProductStockCard extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			quantity: props.product.stock_quantity,
			editing: false,
			edited: false,
		};

		this.beginEdit = this.beginEdit.bind( this );
		this.cancelEdit = this.cancelEdit.bind( this );
		this.onQuantityChange = this.onQuantityChange.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
		this.updateStock = this.updateStock.bind( this );
	}

	beginEdit() {
		this.setState( { editing: true }, () => {
			this.quantityInput && this.quantityInput.focus();
		} );
	}

	cancelEdit() {
		this.setState( {
			editing: false,
			quantity: this.props.product.stock_quantity,
		} );
	}

	handleKeyDown( event ) {
		if ( event.keyCode === ESCAPE ) {
			this.cancelEdit();
		}
	}

	onQuantityChange( event ) {
		this.setState( { quantity: event.target.value } );
	}

	async updateStock() {
		const { addNotice, product, updateItem } = this.props;

		this.setState( { editing: false, edited: true } );

		const data = {
			stock_quantity: this.state.quantity,
			type: product.type,
			parent_id: product.parent_id,
		};

		await updateItem( 'products', product.id, data, response => {
			if ( response && response.data ) {
				addNotice( {
					status: 'success',
					message: sprintf( __( '%s stock updated.', 'woocommerce-admin' ), product.name ),
				} );
			}
			if ( response && response.error ) {
				addNotice( {
					status: 'error',
					message: sprintf(
						__( '%s stock could not be updated.', 'woocommerce-admin' ),
						product.name
					),
				} );
				this.setState( { quantity: product.stock_quantity } );
			}
		} );
	}

	getActions() {
		const { editing } = this.state;

		if ( editing ) {
			return [
				<Button type="submit" isPrimary>
					{ __( 'Save', 'woocommerce-admin' ) }
				</Button>,
				<Button type="reset">{ __( 'Cancel', 'woocommerce-admin' ) }</Button>,
			];
		}

		return [
			<Button isDefault onClick={ this.beginEdit }>
				{ __( 'Update stock', 'woocommerce-admin' ) }
			</Button>,
		];
	}

	getBody() {
		const { editing, quantity } = this.state;

		if ( editing ) {
			return (
				<Fragment>
					<BaseControl className="woocommerce-stock-activity-card__edit-quantity">
						<input
							className="components-text-control__input"
							type="number"
							value={ quantity }
							onKeyDown={ this.handleKeyDown }
							onChange={ this.onQuantityChange }
							ref={ input => {
								this.quantityInput = input;
							} }
						/>
					</BaseControl>
					<span>{ __( 'in stock', 'woocommerce-admin' ) }</span>
				</Fragment>
			);
		}

		return (
			<span className="woocommerce-stock-activity-card__stock-quantity">
				{ sprintf( __( '%d in stock', 'woocommerce-admin' ), quantity ) }
			</span>
		);
	}

	render() {
		const { product } = this.props;
		const { edited, editing } = this.state;
		const { notifyLowStockAmount } = wcSettings;
		const lowStockAmount = Number.isFinite( product.low_stock_amount )
			? product.low_stock_amount
			: notifyLowStockAmount;
		const isLowStock = product.stock_quantity <= lowStockAmount;

		// Hide cards that are not in low stock and have not been edited.
		// This allows clearing cards which are no longer in low stock after
		// closing & opening the panel without having to make another request.
		if ( ! isLowStock && ! edited && ! editing ) {
			return null;
		}

		const title = (
			<Link
				href={ 'post.php?action=edit&post=' + ( product.parent_id || product.id ) }
				type="wp-admin"
			>
				{ product.name }
			</Link>
		);
		let subtitle = null;

		if ( 'variation' === product.type ) {
			subtitle = Object.values( product.attributes )
				.map( attr => attr.option )
				.join( ', ' );
		}

		const productImage = get( product, [ 'images', 0 ] ) || get( product, [ 'image' ] );
		const productImageClasses = classnames(
			'woocommerce-stock-activity-card__image-overlay__product',
			{
				'is-placeholder': ! productImage || ! productImage.src,
			}
		);
		const icon = (
			<div className="woocommerce-stock-activity-card__image-overlay">
				<div className={ productImageClasses }>
					<ProductImage product={ product } />
				</div>
			</div>
		);
		const activityCardClasses = classnames( 'woocommerce-stock-activity-card', {
			'is-dimmed': ! editing && ! isLowStock,
		} );

		const activityCard = (
			<ActivityCard
				className={ activityCardClasses }
				title={ title }
				subtitle={ subtitle }
				icon={ icon }
				actions={ this.getActions() }
			>
				{ this.getBody() }
			</ActivityCard>
		);

		if ( editing ) {
			return (
				<form onReset={ this.cancelEdit } onSubmit={ this.updateStock }>
					{ activityCard }
				</form>
			);
		}

		return activityCard;
	}
}

export default compose(
	withDispatch( dispatch => {
		const { addNotice } = dispatch( 'wc-admin' );
		const { updateItem } = dispatch( 'wc-api' );

		return {
			addNotice,
			updateItem,
		};
	} )
)( ProductStockCard );
