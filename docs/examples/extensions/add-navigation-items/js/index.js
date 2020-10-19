/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from "@wordpress/plugins";
import { WooNavigationItem } from "@woocommerce/navigation";

const MyPlugin = () => {
    const handleClick = () => {
        alert( 'Menu item clicked!' );
    }

    return (
        <WooNavigationItem item="example-marketing-category-child-2">
            <button onClick={ handleClick }>
                { __( 'JavaScript Example', 'plugin-domain' ) }
            </button>
        </WooNavigationItem>
    );
};

registerPlugin('my-plugin', { render: MyPlugin });
