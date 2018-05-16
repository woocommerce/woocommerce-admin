/** @format */
/**
 * External dependencies
 */
import { Button, Dashicon } from '@wordpress/components';
import classnames from 'classnames';
import { Component } from '@wordpress/element';

class AgendaAccordion extends Component {
	constructor( props ) {
		super( ...arguments );
		this.state = {
			opened: props.initialOpen === undefined ? false : props.initialOpen,
		};
		this.toggle = this.toggle.bind( this );
	}

	toggle( event ) {
		event.preventDefault();
		if ( this.props.opened === undefined ) {
			this.setState( state => ( {
				opened: ! state.opened,
			} ) );
		}

		if ( this.props.onToggle ) {
			this.props.onToggle();
		}
	}

	render() {
		const { title, children, opened, className, count } = this.props;
		const isOpened = opened === undefined ? this.state.opened : opened;
		const icon = `arrow-${ isOpened ? 'up-alt2' : 'down-alt2' }`;
		const classes = classnames( 'woo-dash__accordion-wrapper', className, {
			'is-opened': isOpened,
		} );

		return (
			<div className={ classes }>
				<Button
					className="woo-dash__accordion-toggle"
					onClick={ this.toggle }
					aria-expanded={ isOpened }
				>
					<h3>
						{ !! count && <span>{ count }</span> }
						{ title }
					</h3>
					<Dashicon icon={ icon } />
				</Button>

				{ isOpened &&
					children && <div className="woo-dash__accordion-content"> { children } </div> }
			</div>
		);
	}
}

export default AgendaAccordion;
