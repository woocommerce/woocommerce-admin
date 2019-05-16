```jsx
import { Stepper } from '@woocommerce/components';

const MyStepper = withState( {
	currentStep: 'first',
} )( ( { currentStep, setState } ) => {
    const steps = [
        {
            label: 'First',
            key: 'first',
        },
        {
            label: 'Second',
            key: 'second',
        },
        {
            label: 'Third',
            key: 'third',
        },
        {
            label: 'Fourth',
            key: 'fourth',
        },
    ];
    const currentIndex = steps.findIndex( s => currentStep === s.key );

	return (
		<div>
            <button
                onClick={ () => setState( { currentStep: steps[ currentIndex - 1 ]['key'] } ) }
                disabled={ currentIndex < 1 }
            >
                Previous step
            </button>
            <button
                onClick={ () => setState( { currentStep: steps[ currentIndex + 1 ]['key'] } ) }
                disabled={ currentIndex >= steps.length - 1 }
            >
                Next step
            </button>
			<Stepper
				steps={ steps }
				currentStep={ currentStep }
			/>
		</div>
	);
} );
```
