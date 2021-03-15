import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TopicCard from './TopicCard';

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

it('renders with all topic cards', () => {
	act(() => {
		render(<TopicCard />, container);
	});
	if (container !== null) {
		expect(container.textContent).toBe('FinanzenSozialesVerteidigung');
	}
});
