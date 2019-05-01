/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

export default class StorePerformance extends Component {
	constructor( props ) {
		super( props );
		const { title } = props;

		this.state = {
			titleInput: title || __( 'Store Performance', 'woocommerce-admin' ),
		};

		this.onMenuToggle = this.onMenuToggle.bind( this );
		this.onTitleChange = this.onTitleChange.bind( this );
		this.onTitleBlur = this.onTitleBlur.bind( this );
	}

	onMenuToggle( isOpen ) {
		const { titleInput } = this.state;
		if ( ! isOpen && titleInput === '' ) {
			this.setState( { titleInput: __( 'Store Performance', 'woocommerce-admin' ) } );
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

	render() {
		const { component: SectionComponent, ...props } = this.props;
		const { titleInput } = this.state;

		return (
			<div className="woocommerce-dashboard-section">
				<SectionComponent
					onTitleChange={ this.onTitleChange }
					onTitleBlur={ this.onTitleBlur }
					onMenuToggle={ this.onMenuToggle }
					titleInput={ titleInput }
					{ ...props }
				/>
			</div>
		);
	}
}
