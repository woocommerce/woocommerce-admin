type Props = {
	count: number;
} & React.HTMLAttributes< HTMLSpanElement >;

export const Badge: React.FC< Props > = ( {
	count,
	className = '',
	...props
}: Props ) => {
	return (
		<span className={ `woocommerce-badge ${ className }` } { ...props }>
			{ count }
		</span>
	);
};
