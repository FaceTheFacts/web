import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId } from '@testing-library/react';
import Toolbar from './VoteDetailsToolbar';

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

it('renders with the correct title', () => {
	// given
	const title = 'Gesetzesentwurf';

	// when
	act(() => {
		render(<Toolbar/>, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'votes-details-toolbar-title').textContent).toBe(title);
	}
});
