/** @format */
/**
 * External dependencies
 */
import { Button, Dashicon } from '@wordpress/components';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

class AgendaGroup extends Component {
	constructor( props ) {
		super( ...arguments );
		this.state = {
			opened: props.initialOpen === undefined ? false : props.initialOpen,
		};
		this.toggle = this.toggle.bind( this );
	}

	toggle( event ) {
		event.preventDefault();
		event.stopPropagation();
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
		const { title, children, opened, className, count, href } = this.props;
		const isOpened = opened === undefined ? this.state.opened : opened;
		const mode = href ? 'link' : 'accordion';

		const classes = classnames( 'woo-dash__agenda-group-wrapper', className, {
			'is-opened': isOpened && 'accordion' === mode,
		} );

		const toggleClasses = classnames( 'woo-dash__agenda-group-toggle', {
			'is-link': 'link' === mode,
			'is-accordion': 'accordion' === mode,
		} );

		let icon, divProps, buttonProps;
		if ( 'link' === mode ) {
			icon = 'arrow-right-alt2';
			divProps = {};
			buttonProps = { href };
		} else {
			icon = `arrow-${ isOpened ? 'up-alt2' : 'down-alt2' }`;
			divProps = { onClick: this.toggle };
			buttonProps = { ...divProps, 'aria-expanded': isOpened };
		}

		return (
			<div className={ classes }>
				<div { ...divProps } className={ toggleClasses }>
					<h3>
						<span>{ count }</span>
						{ title }
					</h3>
					<Button { ...buttonProps }>
						<Dashicon icon={ icon } />
					</Button>
				</div>

				{ isOpened &&
					children && <div className="woo-dash__agenda-group-content"> { children } </div> }
			</div>
		);
	}
}

AgendaGroup.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	count: PropTypes.number.isRequired,
	initialOpen: PropTypes.bool,
	children: PropTypes.node,
	href: PropTypes.string,
};

export default AgendaGroup;
