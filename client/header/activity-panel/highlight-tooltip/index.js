/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import {
	Popover,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Button,
	IsolatedEventContainer,
} from '@wordpress/components';
import { useState, useEffect, createPortal } from '@wordpress/element';
import { close } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';

const SHOW_CLASS = 'highlight-tooltip__show';
function HighlightTooltip( {
	title,
	closeBtnText,
	content,
	show = true,
	id,
	onClose,
	delay,
} ) {
	const [ showHighlight, setShowHighlight ] = useState(
		delay > 0 ? false : show
	);
	const [ node, setNode ] = useState( null );

	useEffect( () => {
		const element = document.getElementById( id );
		let container;
		if ( element && ! node ) {
			const parent = element.parentElement;
			container = document.createElement( 'div' );
			container.classList.add(
				'highlight-tooltip__container',
				SHOW_CLASS
			);
			parent.appendChild( container );
			setNode( container );
		}
		let timeoutId;
		if ( delay > 0 ) {
			timeoutId = setTimeout( () => {
				timeoutId = null;
				setShowHighlight( show );
			}, delay );
		}
		return () => {
			if ( container ) {
				const parent = container.parentElement;
				parent.removeChild( container );
			}
			if ( timeoutId ) {
				clearTimeout( timeoutId );
			}
		};
	}, [] );

	useEffect( () => {
		if ( ! showHighlight && node ) {
			node.classList.remove( SHOW_CLASS );
		}
	}, [ showHighlight ] );

	const triggerClose = () => {
		setShowHighlight( false );
		if ( onClose ) {
			onClose();
		}
	};

	if ( ! node ) {
		return null;
	}

	return createPortal(
		<div className="highlight-tooltip__portal">
			{ showHighlight ? (
				<>
					<IsolatedEventContainer className="highlight-tooltip__overlay" />
					<div className="highlight-tooltip__highlighter"></div>
					<Popover className="highlight-tooltip__popover">
						<Card
							size="small"
							className="woocommerce-task-card woocommerce-homescreen-card"
						>
							<CardHeader size="small">
								{ title }
								<Button
									size="small"
									onClick={ triggerClose }
									icon={ close }
								/>
							</CardHeader>
							<CardBody>{ content || null }</CardBody>
							<CardFooter isBorderless={ true }>
								<Button
									size="small"
									isPrimary
									onClick={ triggerClose }
								>
									{ closeBtnText }
								</Button>
							</CardFooter>
						</Card>
					</Popover>
				</>
			) : null }
		</div>,
		node
	);
}

HighlightTooltip.propTypes = {
	/**
	 * The id of the element it should highlight.
	 */
	id: PropTypes.string.isRequired,
	/**
	 * Title of the popup
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Text of the close button.
	 */
	closeBtnText: PropTypes.string.isRequired,
	/**
	 * Content of the popup, can be either text or react element.
	 */
	content: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
	/**
	 * If to show the popup, defaults to true.
	 */
	show: PropTypes.bool,
	/**
	 * Callback for when the user closes the popup.
	 */
	onClose: PropTypes.func,
	/**
	 * This will delay the popup from appearing by the number of ms.
	 */
	delay: PropTypes.number,
};

export { HighlightTooltip };
