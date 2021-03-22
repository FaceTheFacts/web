import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId} from '@testing-library/react';
import 'jest-canvas-mock';

import TitleHeader from './TitleHeader';

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

it('renders with correct title', () => {
	// given
	const titleInput = 'Politische Schwerpunkte';

	// when
	act(() => {
		render(<TitleHeader title = {titleInput}/>, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'category-title').textContent).toBe(
      'Politische Schwerpunkte'
		);
	}
});