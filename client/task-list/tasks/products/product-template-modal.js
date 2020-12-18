/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Modal, RadioControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { ITEMS_STORE_NAME } from '@woocommerce/data';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './product-template-modal.scss';

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
	const { createProductTemplate } = useDispatch( ITEMS_STORE_NAME );

	const onSelectTemplateClick = ( template ) => {
		setIsRedirecting( true );
		if ( template ) {
			createProductTemplate(
				template,
				{
					template_name: template,
					status: 'draft',
				},
				{ _fields: [ 'id' ] }
			).then( ( data ) => {
				if ( data && data.id ) {
					const link = getAdminLink(
						`post.php?post=${ data.id }&action=edit&wc_onboarding_active_task=products&tutorial=true`
					);
					window.location = link;
				}
			} );
		} else if ( onClose ) {
			onClose();
		}
	};

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
						options={ templates.map( ( item ) => ( {
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
