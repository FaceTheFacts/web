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
	const cardExtendedTitle =
		'Wir sollten aktive Pfleger:innen aus dem Ausland anwerben um die Personalnot in der Pflege zu lindern.';
	const cardAnswer = 'yes';
	const cardReason =
		'"Das ist nur ein Platzhalter. Für die Bundestagswahl haben Kandidat:innen  hier die Möglichkeit ihre Position zu begründen."';
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidateId}/position`],
	});
	//when
	render(
		<Router history={history}>
			<PositionCard
				candidateId={candidateId}
				title={cardTitle}
				extendedTitle={cardExtendedTitle}
				answer={cardAnswer}
				reason={cardReason}
			/>
		</Router>,
		container
	);

	// then
	if (container !== null) {
		expect(getByTestId(container, 'position-card-title').textContent).toBe(cardTitle);
		expect(getByTestId(container, 'positioning').textContent).toBe('ja');
	}
});
