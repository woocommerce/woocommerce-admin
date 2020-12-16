/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Modal, RadioControl } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './product-template-modal.scss';
import selectedRadioButtonIcon from './selected-radio-button-icon';

const templates = [
	{
		key: 'physical_product',
		title: __( 'Physical product', 'woocommerce-admin' ),
	},
	{
		key: 'digital_product',
		title: __( 'Digital product', 'woocommerce-admin' ),
	},
	{
		key: 'variable_product',
		title: __( 'Variable product', 'woocommerce-admin' ),
	},
];

export function ProductTemplateModal( { onClose } ) {
	const [ selectedTemplate, setSelectedTemplate ] = useState();
	const [ isRedirecting, setIsRedirecting ] = useState( false );

	const onSelectTemplateClick = ( template ) => {
		setIsRedirecting( true );
		if ( template ) {
			window.location = getAdminLink(
				'post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true&product_template=' +
					template
			);
		}
		if ( onClose ) {
			onClose();
		}
	};

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
			isDismissible={ true }
			onRequestClose={ () => onClose() }
			className="woocommerce-product-template-modal"
		>
			<div className="woocommerce-product-template-modal__wrapper">
				<div className="woocommerce-product-template-modal__list">
					<RadioControl
						options={ templateList.map( ( item ) => ( {
							label: item.title,
							value: item.key,
						} ) ) }
						selected={ selectedTemplate }
						onChange={ ( option ) => setSelectedTemplate( option ) }
					/>
				</div>
				<div className="woocommerce-product-template-modal__actions">
					<Button
						isPrimary
						isBusy={ isRedirecting }
						disabled={ ! selectedTemplate || isRedirecting }
						onClick={ () =>
							onSelectTemplateClick( selectedTemplate )
						}
					>
						{ __( 'Go' ) }
					</Button>
				</div>
			</div>
		</Modal>
	);
}
