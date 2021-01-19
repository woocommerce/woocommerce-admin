/**
 * Internal dependencies
 */
import { SettingOption } from './setting-option';

export const SettingOptions = ( { options } ) => {
	if ( ! options.length ) {
		return null;
	}

	return (
		<div className="woocommerce-admin-setting-options">
			{ options.map( ( option ) => {
				return <SettingOption key={ option.id } { ...option } />;
			} ) }
		</div>
	);
};

export default SettingOptions;
