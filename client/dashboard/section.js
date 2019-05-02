/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

export default class Section extends Component {
	constructor( props ) {
		super( props );
		const { defaultTitle } = props;

		this.state = {
			titleInput: defaultTitle,
		};

		this.onTitleChange = this.onTitleChange.bind( this );
		this.onTitleBlur = this.onTitleBlur.bind( this );
	}

	onTitleChange( updatedTitle ) {
		this.setState( { titleInput: updatedTitle } );
	}

	onTitleBlur() {
		const { defaultTitle, onTitleUpdate } = this.props;
		const { titleInput } = this.state;

		if ( onTitleUpdate ) {
			if ( titleInput === '' ) {
				onTitleUpdate( defaultTitle );
				this.setState( { titleInput: defaultTitle } );
			} else {
				onTitleUpdate( titleInput );
			}
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
					titleInput={ titleInput }
					{ ...props }
				/>
			</div>
		);
	}
}
