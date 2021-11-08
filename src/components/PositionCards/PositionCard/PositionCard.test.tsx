import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
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
	const candidateId = 1;
	const cardTitle = 'Pfleger:innen aus dem Ausland';
	const cardAnswer = 'yes';
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidateId}/position`],
	});
	//when
	render(
		<Router history={history}>
			<PositionCard candidateId={candidateId} title={cardTitle} answer={cardAnswer} />
		</Router>,
		container
	);

	// then
	if (container !== null) {
		expect(getByTestId(container, 'position-card-title').textContent).toBe(cardTitle);
		expect(getByTestId(container, 'positioning').textContent).toBe('ja');
	}
});
