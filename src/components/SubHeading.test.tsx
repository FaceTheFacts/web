import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SubHeading from './SubHeading';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	if (container !== null) {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}
});

describe('unittests', () => {
	it('renders with correct heading', () => {
		// given
		const subheading = 'Sub Heading';
	
		// when
		act(() => {
			render(<SubHeading name={subheading} />, container);
		});
	
		// then
		if (container !== null) {
			expect(container.textContent).toBe(subheading);
		}
	});
	
	it('renders with a button', () => {
		// given
		const subheading = 'test';
		const buttonAction = 'votes';
	
		// when
		act(() => {
			render(<SubHeading name={subheading} buttonAction={buttonAction} />, container);
		});
	
		// then
		if (container !== null) {
			expect(container.getElementsByTagName('ion-button').length).toBe(1);
		}
	});
	
	it('renders with an icon', () => {
		// given
		const subheading = 'test';
		const icon = 'infobutton.svg';
	
		// when
		act(() => {
			render(<SubHeading name={subheading} icon={icon} />, container);
		});
	
		// then
		if (container !== null) {
			expect((getByTestId(container, 'subheading-icon') as HTMLImageElement).src).toContain(
				`/assets/icon/${icon}`
			);
		}
	});
})

describe('integration tests', () => {
	it('[Router]: redirects to correct path', () => {
		// given
		const subheading = 'test';
		const icon = 'infobutton.svg';
		const actionUrl = '/politician/1/votes';
	
		const history = createMemoryHistory();
	
		// when
		act(() => {
			render(
				<Router history={history}>
					<SubHeading name={subheading} icon={icon} buttonAction={actionUrl} />
				</Router>,
				container
			);
			if (container !== null) {
				getByTestId(container, 'subheading-button').click();
			}
		});
	
		// then
		if (container !== null) {
			expect(history.location.pathname).toBe(actionUrl);
		}
	});
})

