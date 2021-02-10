/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Popover,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Button,
} from '@wordpress/components';
import { close } from '@wordpress/icons';

function FavoritesTooltip() {
	const triggerClose = () => {
		// close it.
	};

	return (
		<Popover
			className="highlight-tooltip__popover"
			noArrow={ false }
			focusOnMount="container"
		>
			<Card size="medium">
				<CardHeader>
					{ __( 'Introducing favorites', 'woocommerce-admin' ) }
					<Button isSmall onClick={ triggerClose } icon={ close } />
				</CardHeader>
				<CardBody>
					{ __(
						'You can now favorite your extensions to pin them in the top level of the navigation.',
						'woocommerce-admin'
					) }
				</CardBody>
				<CardFooter isBorderless={ true }>
					<Button size="small" isPrimary onClick={ triggerClose }>
						{ __( 'Got it', 'woocommerce-admin' ) }
					</Button>
				</CardFooter>
			</Card>
		</Popover>
	);
}

export { FavoritesTooltip };
