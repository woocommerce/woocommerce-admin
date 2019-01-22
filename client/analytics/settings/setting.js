/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { uniqueId } from 'lodash';

/**
 * Internal dependencies
 */
import sanitizeHTML from 'lib/sanitize-html';

export default class Settings extends Component {
	renderInput = () => {
		const { handleChange, name, inputType, options, value } = this.props;
		let id = uniqueId( name );

		switch ( inputType ) {
			case 'checkbox':
				return options.map( option => {
					id = id + '-' + option.value;
					return (
						<label htmlFor={ id } key={ option.value }>
							<input
								id={ id }
								type="checkbox"
								name={ name }
								onChange={ handleChange }
								aria-label={ option.description }
								checked={ value && value.includes( option.value ) }
								value={ option.value }
							/>
							{ option.label }
						</label>
					);
				} );

			default:
				return (
					<input id={ id } type="text" name={ name } onChange={ handleChange } value={ value } />
				);
		}
	};

	render() {
		const { helpText, label } = this.props;

		return (
			<div className="woocommerce-settings__setting">
				<div className="woocommerce-settings__setting-label">{ label }</div>
				<div className="woocommerce-settings__setting-options">
					{ this.renderInput() }
					<span
						className="woocommerce-settings__setting-help"
						dangerouslySetInnerHTML={ sanitizeHTML( helpText ) }
					/>
				</div>
			</div>
		);
	}
}
