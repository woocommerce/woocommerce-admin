/**
 * External dependencies
 */
import {
	Popover,
	Card,
	CardBody,
	CardHeader,
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
export function HighlightTooltipUncontrolled( {
	title,
	show,
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
		if ( element && ! node ) {
			const parent = element.parentElement;
			const container = document.createElement( 'div' );
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
			if ( node ) {
				const parent = node.parentElement;
				parent.removeChild( node );
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

	if ( ! node || ! showHighlight ) {
		return null;
	}

	return createPortal(
		<div className="highlight-tooltip__portal">
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
					<CardBody></CardBody>
				</Card>
			</Popover>
		</div>,
		node
	);
}
