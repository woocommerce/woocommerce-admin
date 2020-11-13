/**
 * Internal dependencies
 */
import './style.scss';

const RecommendedExtensionsPlaceholder = () => {
	const classNameBase =
		'is-loading woocommerce-marketing-recommended-extensions-item';

	return (
		<div className={ classNameBase } aria-hidden="true">
			<div className="woocommerce-admin-marketing-product-icon">
				<span className="is-placeholder" />
			</div>

			<div className={ `${ classNameBase }__text` }>
				<h4 className="is-placeholder" aria-hidden="true"></h4>
				<p>
					<span className="is-placeholder" key={ 1 } />
					<span className="is-placeholder" key={ 2 } />
					<span className="is-placeholder" key={ 3 } />
				</p>
			</div>
		</div>
	);
};

export default RecommendedExtensionsPlaceholder;
