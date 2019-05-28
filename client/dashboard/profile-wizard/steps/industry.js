/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Button, CheckboxControl } from 'newspack-components';
import { includes, filter } from 'lodash';

/**
 * Internal dependencies
 */
import { H, Card } from '@woocommerce/components';

class Industry extends Component {
	constructor() {
		super();
		this.state = {
			selected: [],
		};
		this.onContinue = this.onContinue.bind( this );
		this.onChange = this.onChange.bind( this );
	}

	async onContinue() {
		const updateProfile = await this.props.updateProfile( { industry: this.state.selected } );
		if ( updateProfile && 'success' === updateProfile.status ) {
			this.props.goToNextStep();
		}
	}

	onChange( slug ) {
		this.setState( state => {
			if ( includes( state.selected, slug ) ) {
				return {
					selected:
						filter( state.selected, value => {
							return value !== slug;
						} ) || [],
				};
			}
			const newSelected = state.selected;
			newSelected.push( slug );
			return {
				selected: newSelected,
			};
		} );
	}

	render() {
		const { industries } = wcSettings.onboarding;
		const { selected } = this.state;
		return (
			<Fragment>
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'In which industry does the store operate?', 'woocommerce-admin' ) }
				</H>
				<p>{ __( 'Choose any that apply' ) }</p>
				<Card className="woocommerce-profile-wizard__industry-card">
					<div className="woocommerce-profile-wizard__checkbox-group">
						{ Object.keys( industries ).map( slug => {
							return (
								<CheckboxControl
									key={ slug }
									label={ __( industries[ slug ], 'woocommerce-admin' ) }
									onChange={ () => this.onChange( slug ) }
								/>
							);
						} ) }
					</div>

					<div className="woocommerce-profile-wizard__industry-actions">
						{ selected.length > 0 && (
							<Button
								isPrimary
								className="woocommerce-profile-wizard__continue"
								onClick={ this.onContinue }
							>
								{ __( 'Continue', 'woocommerce-admin' ) }
							</Button>
						) }
					</div>
				</Card>
			</Fragment>
		);
	}
}

export default Industry;
