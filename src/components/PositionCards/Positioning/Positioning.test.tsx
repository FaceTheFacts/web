import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId } from '@testing-library/react';
import Positioning from './Positioning';

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

it('renders with translated title', () => {
	// given
	const positioning = 'yes';

	// when
	act(() => {
		render(<Positioning positioning={positioning} />, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'positioning').textContent).toBe('ja');
	}
});
