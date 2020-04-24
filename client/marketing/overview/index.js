/**
 * Internal dependencies
 */
import './style.scss';
import InstalledExtensions from './installed-extensions';
import RecommendedExtensions from './recommended-extensions';
import KnowledgeBase from './knowledge-base';
import WelcomeCard from './welcome-card';
import '../data';

const MarketingOverview = () => {
	return (
		<div className="woocommerce-marketing-overview">
			<WelcomeCard />
			<InstalledExtensions />
			<RecommendedExtensions />
			<KnowledgeBase />
		</div>
	);
};

export default MarketingOverview;
