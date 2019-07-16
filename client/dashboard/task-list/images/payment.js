/** @format */

export default () => (
	<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask
			id="payment-mask"
			mask-type="alpha"
			maskUnits="userSpaceOnUse"
			x="3"
			y="6"
			width="30"
			height="24"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30 6H6C4.335 6 3.015 7.335 3.015 9L3 27C3 28.665 4.335 30 6
                    30H30C31.665 30 33 28.665 33 27V9C33 7.335 31.665 6 30 6ZM30 27H6V18H30V27ZM6 12H30V9H6V12Z"
				fill="white"
			/>
		</mask>
		<g mask="url(#payment-mask)">
			<rect width="36" height="36" fill="#673D99" />
		</g>
	</svg>
);
