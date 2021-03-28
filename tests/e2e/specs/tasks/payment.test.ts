import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { PaymentsSetup } from '../../pages/PaymentsSetup';
import { WcHomescreen } from '../../pages/WcHomescreen';
import { BankAccountTransferSetup } from '../../sections/payment-setup/BankAccountTransferSetup';
import { StoreOwnerFlow } from '../../utils/flows';

describe( 'Payment setup task', () => {
	const profileWizard = new OnboardingWizard( page );
	const homeScreen = new WcHomescreen( page );
	const paymentsSetup = new PaymentsSetup( page );
	const bankTransferSetup = new BankAccountTransferSetup( page );

	beforeAll( async () => {
		await StoreOwnerFlow.login();
		await profileWizard.navigate();
		await profileWizard.skipStoreSetup();
		await homeScreen.isDisplayed();
	} );

	afterAll( StoreOwnerFlow.logout );

	it( 'Can visit the payment setup task from the homescreen if the setup wizard has been skipped', async () => {
		await homeScreen.clickOnTaskList( 'Choose payment methods' );
		await paymentsSetup.isDisplayed();
	} );

	it( 'Saving valid bank account transfer details enables the payment method', async () => {
		await paymentsSetup.goToPaymentMethodSetup( 'bacs' );
		await bankTransferSetup.saveAccountDetails( {
			accountNumber: '1234',
			accountName: 'Savings',
			bankName: 'TestBank',
			sortCode: '12',
			iban: '12 3456 7890',
			swiftCode: 'ABBA',
		} );

		await paymentsSetup.isDisplayed();
		await paymentsSetup.methodHasBeenSetup( 'bacs' );
	} );

	it( 'Toggling cash on delivery enables the payment method', async () => {
		await paymentsSetup.enableCashOnDelivery();

		// refresh the page to ensure it is persisted.
		await paymentsSetup.navigate();
		await paymentsSetup.methodHasBeenSetup( 'cod' );
	} );
} );
