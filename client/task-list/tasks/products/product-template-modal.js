/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { Icon, check } from '@wordpress/icons';
import { List } from '@woocommerce/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import selectedRadioButtonIcon from './selected-radio-button-icon';

const templates = [
	{
		key: 'physicalProduct',
		title: __( 'Physical product', 'woocommerce-admin' ),
	},
	{
		key: 'digitalProduct',
		title: __( 'Digital product', 'woocommerce-admin' ),
	},
	{
		key: 'variableProduct',
		title: __( 'Variable product', 'woocommerce-admin' ),
	},
];

export function ProductTemplateModal() {
	const [ selectedTemplate, setSelectedTemplate ] = useState();
	const templateList = templates.map( ( task ) => {
		task.onClick = () => {
			setSelectedTemplate( task.key );
		};
		task.before = (
			<div className="woocommerce-task__icon">
				{ task.key === selectedTemplate ? (
					<Icon icon={ selectedRadioButtonIcon } />
				) : null }
			</div>
		);
		return task;
	} );

	return (
		<Modal
			title={ __( 'Start with a template' ) }
			isDismissible={ false }
			onRequestClose={ () => this.props.onClose() }
			className="woocommerce-product-template-modal"
		>
			<div className="woocommerce-product-template-modal__wrapper">
				<div className="woocommerce-product-template-modal__message">
					<List items={ templateList } />
				</div>
				<div className="woocommerce-product-template-modal__actions">
					<Button isPrimary onClick={ () => {} }>
						{ __( 'Go' ) }
					</Button>
				</div>
			</div>
		</Modal>
	);
}
