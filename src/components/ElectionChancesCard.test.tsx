import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import ElectionChancesCard from './ElectionChancesCard';

import { amthor } from '../amthor';

let container: HTMLDivElement;

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
	}
});

const candidate = amthor;
const id = String(candidate.id);

test('renders with the correct ElectionChancesCard', () => {
	//given
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/election`],
	});
	//when
	render(
		<Router history={history}>
			<ElectionChancesCard vote={candidate.electionResults[0]}/>
		</Router>,
		container
	);
	//then
	const electionResult = candidate.electionResults[0];
	expect(getAllByTestId(container, 'election-chances-card-title')[0].textContent).toBe(electionResult.candidate);
    expect(getAllByTestId(container, 'election-chances-card-party')[0].textContent).toBe(electionResult.party);
	expect(getAllByTestId(container, 'election-chances-card-percentage')[0].textContent).toBe(`${electionResult.percentage}%`);
});