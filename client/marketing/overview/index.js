/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InstalledExtensions from './installed-extensions';
import RecommendedExtensions from './recommended-extensions';
import KnowledgeBase from './knowledge-base';

class MarketingOverview extends Component {
	render() {
		return (
			<Fragment>
				<InstalledExtensions />
				<RecommendedExtensions />
				<KnowledgeBase />
			</Fragment>
		);
	}
}

export default MarketingOverview;
