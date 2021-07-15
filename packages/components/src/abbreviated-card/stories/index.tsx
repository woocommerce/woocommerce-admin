/**
 * External dependencies
 */
import { page, cog, download } from '@wordpress/icons';
import { Story } from '@storybook/react';

/**
 * Internal dependencies
 */
import AbbreviatedCard, { AbbreviatedCardProps } from '..';

const Template: Story< AbbreviatedCardProps > = ( args ) => {
	// argTypes doesn't seem to work with defaultValue at the moment
	const { icon: iconProp, ...otherArgs } = args;

	return (
		<AbbreviatedCard icon={ iconProp || page } { ...otherArgs }>
			<h3>Title</h3>
			<p>Abbreviated card content</p>
		</AbbreviatedCard>
	);
};

export const Primary = Template.bind( {} );

Primary.args = {
	href: '#',
	icon: page,
};

Primary.argTypes = {
	icon: {
		options: [ 'Example with download icon', 'Example with cog icon' ],
		mapping: {
			'Example with download icon': download,
			'Example with cog icon': cog,
		},
	},
};

export default {
	title: 'WooCommerce Admin/components/AbbreviatedCard',
	component: AbbreviatedCard,
};
