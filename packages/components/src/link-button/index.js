/**
 * External dependencies
 */
import PropTypes from 'prop-types';

const LinkButton = ( { onClick, children } ) => {
	return (
		<button className="link-button" onClick={ onClick }>
			{ children }
		</button>
	);
};

LinkButton.propTypes = {
	/**
	 * The callback that is executed when the link button is clicked.
	 */
	onClick: PropTypes.func.isRequired,
};

export default LinkButton;
