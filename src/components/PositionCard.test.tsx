import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { getByTestId } from '@testing-library/react';

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
	const cardTitle = "Pfleger:innen aus dem Ausland"

	// when
	act(() => {
		render(<PositionCard title = {cardTitle} />, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'postion-card-title').textContent).toBe(cardTitle);
	}
});
