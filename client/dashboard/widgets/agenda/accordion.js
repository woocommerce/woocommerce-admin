/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

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
		const label = isOpened
			? __( 'Close agenda item', 'woo-dash' )
			: __( 'Open agenda item', 'woo-dash' );
		const classes = classnames( 'woo-dash__agenda-accordion-wrapper', className, {
			'is-opened': isOpened,
		} );

		return (
			<div className={ classes }>
				<Button
					className="woo-dash__agenda-accordion-toggle"
					onClick={ this.toggle }
					aria-expanded={ isOpened }
					aria-label={ label }
				>
					<h3>
						<span>{ count }</span>
						{ title }
					</h3>
					<Dashicon icon={ icon } />
				</Button>

				{ isOpened &&
					children && <div className="woo-dash__agenda-accordion-content"> { children } </div> }
			</div>
		);
	}
}

AgendaAccordion.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	count: PropTypes.number.isRequired,
	initialOpen: PropTypes.bool,
	children: PropTypes.node,
};

export default AgendaAccordion;
