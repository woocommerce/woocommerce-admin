/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import AgendaAccordion from './accordion';
import Card from 'components/card';

import './style.scss';

class Agenda extends Component {
	render() {
		return (
			<Card title={ __( 'Your agenda', 'woo-dash' ) } className="woo-dash__agenda-card">
				<AgendaAccordion count={ 6 } title="Orders need to be fulfilled">
					Testing
				</AgendaAccordion>
				<AgendaAccordion count={ 3 } title="Orders awaiting payment">
					Testing
				</AgendaAccordion>
			</Card>
		);
	}
}

export default Agenda;
