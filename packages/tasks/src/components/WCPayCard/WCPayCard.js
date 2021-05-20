/**
 * External dependencies
 */
import { Card, CardBody, CardHeader, CardFooter } from '@wordpress/components';
import { Text } from '@woocommerce/experimental';

import { Link } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { WCPayAcceptedMethods } from '../WCPayAcceptedMethods';
import WCPayLogo from '../../images/wcpay-logo';

export const WCPayCardHeader = ( {
	logoWidth = 196,
	logoHeight = 41,
	headerComponent: HeaderComponent,
} ) => (
	<CardHeader as="h2">
		<WCPayLogo width={ logoWidth } height={ logoHeight } />
		{ HeaderComponent && <HeaderComponent /> }
	</CardHeader>
);

export const WCPayCardBody = ( {
	description,
	heading,
	linkOnClick = () => {},
} ) => (
	<CardBody>
		{ heading && <Text as="h2">{ heading }</Text> }

		<Text className="woocommerce-task-payment-wcpay__description">
			{ description }
			<br />
			<Link
				target="_blank"
				type="external"
				rel="noreferrer"
				href="https://woocommerce.com/payments/"
				onClick={ linkOnClick }
			>
				{ __( 'Learn more', 'woocommerce-admin' ) }
			</Link>
		</Text>

		<WCPayAcceptedMethods />
	</CardBody>
);

export const WCPayCardFooter = ( {
	buttonComponent: ButtonComponent = null,
	tosComponent: TosComponent = null,
} ) => (
	<CardFooter>
		<TosComponent />
		<ButtonComponent />
	</CardFooter>
);

export const WCPayCard = ( { children } ) => {
	return <Card className="woocommerce-task-payment-wcpay">{ children }</Card>;
};
