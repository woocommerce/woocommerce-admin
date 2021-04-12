/**
 * External dependencies
 */
import { TransitionGroup } from 'react-transition-group';

type ListProps = {
	component?: string;
};

export const ExperimentalList: React.FC< ListProps > = ( {
	children,
	component = 'nav',
} ) => {
	return (
		<TransitionGroup component={ component } className="woocommerce-list">
			{ children }
		</TransitionGroup>
	);
};
