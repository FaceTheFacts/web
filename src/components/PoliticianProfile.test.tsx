import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import PoliticianProfile from './PoliticianProfile';

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
	const history = createMemoryHistory({
		initialEntries: [`/politician/${id}/profile`],
	});
	render(
		<Router history={history}>
			<PoliticianProfile candidate={candidate} />
		</Router>,
		container
	);

	expect(getAllByTestId(container, 'profile-name')[0].textContent).toBe(candidate.name);
	expect(getAllByTestId(container, 'profile-detail')[0].textContent).toBe(candidate.chips[0]);
});
