/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { applyFilters } from '@wordpress/hooks';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { H, ReportFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import sectionsDefinition from './sections-definition';
import Section from './section';
import withSelect from 'wc-api/with-select';

class CustomizableDashboard extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			sections: this.mergeSections(
				applyFilters( 'woocommerce_dashboard_sections', sectionsDefinition ),
				props.userPrefSections || []
			),
		};

		this.updateSection = this.updateSection.bind( this );
	}

	mergeSections( defaultSections, prefSections ) {
		const defaultKeys = defaultSections.map( section => section.key );
		const prefKeys = prefSections.map( section => section.key );
		const keys = new Set( [ ...prefKeys, ...defaultKeys ] );
		const sections = [];

		keys.forEach( key => {
			const defaultSection = defaultSections.find( section => section.key === key );
			if ( ! defaultSection ) {
				return;
			}
			const prefSection = prefSections.find( section => section.key === key );

			sections.push( {
				...defaultSection,
				...prefSection,
			} );
		} );

		return sections;
	}

	updateSection( updatedKey, newSettings ) {
		const newSections = this.state.sections.map( section => {
			if ( section.key === updatedKey ) {
				return {
					...section,
					...newSettings,
				};
			}
			return section;
		} );
		this.setState( { sections: newSections } );
		this.props.updateCurrentUserData( { dashboard_sections: newSections } );
	}

	onChangeHiddenBlocks( updatedKey ) {
		return updatedHiddenBlocks => {
			this.updateSection( updatedKey, { hiddenBlocks: updatedHiddenBlocks } );
		};
	}

	onSectionTitleUpdate( updatedKey ) {
		return updatedTitle => {
			this.updateSection( updatedKey, { title: updatedTitle } );
		};
	}

	render() {
		const { query, path } = this.props;
		const { sections } = this.state;

		return (
			<Fragment>
				<H>{ __( 'Customizable Dashboard', 'woocommerce-admin' ) }</H>
				<ReportFilters query={ query } path={ path } />
				{ sections.map( section => {
					return (
						<Section
							component={ section.component }
							hiddenBlocks={ section.hiddenBlocks }
							key={ section.key }
							onChangeHiddenBlocks={ this.onChangeHiddenBlocks( section.key ) }
							onTitleUpdate={ this.onSectionTitleUpdate( section.key ) }
							path={ path }
							query={ query }
							title={ section.title }
						/>
					);
				} ) }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getCurrentUserData } = select( 'wc-api' );
		const userData = getCurrentUserData();

		return {
			userPrefSections: userData.dashboard_sections,
		};
	} ),
	withDispatch( dispatch => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( CustomizableDashboard );
