import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId } from '@testing-library/react';
import PositionCard from './PositionCard';

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
	const cardTitle = 'Pfleger:innen aus dem Ausland';
	const cardAnswer = 'yes';

	// when
	act(() => {
		render(<PositionCard title={cardTitle} answer={cardAnswer} />, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'position-card-title').textContent).toBe(cardTitle);
		expect(getByTestId(container, 'positioning').textContent).toBe('ja');
	}
});
