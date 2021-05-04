/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';

/**
 * Internal dependencies
 */
import EllipsisMenu from '../';

describe( 'EllipsisMenu', () => {
	it( 'renders correctly', () => {
		const { container } = render(
			<EllipsisMenu
				label={ 'foo' }
				renderContent={ () => <div>content</div> }
			/>
		);
		expect( container ).toMatchSnapshot();
	} );

	it( 'adds the passed in classname', () => {
		const { container } = render(
			<EllipsisMenu
				label={ 'foo' }
				className="custom-classname"
				renderContent={ () => <div>content</div> }
			/>
		);

		const menu = container.querySelector( '.custom-classname' );
		expect( menu ).toBeInTheDocument();
	} );

	it( 'should call onToggle when clicking on the ellipsis', () => {
		const onClickMock = jest.fn();
		const { getByTitle } = render(
			<EllipsisMenu
				label={ 'foo' }
				onToggle={ onClickMock }
				renderContent={ () => <div>content</div> }
			/>
		);

		fireEvent.click( getByTitle( 'foo' ) );
		expect( onClickMock ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should render content when clicking on the ellipsis', () => {
		const { getByTitle, getByText } = render(
			<EllipsisMenu
				label={ 'foo' }
				renderContent={ () => <div>content</div> }
			/>
		);

		fireEvent.click( getByTitle( 'foo' ) );
		expect( getByText( 'content' ) ).toBeInTheDocument();
	} );
} );
