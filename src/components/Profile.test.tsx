import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import Profile from './Profile';

import { amthor } from '../amthor';

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

const candidate = amthor;
const id = String(candidate.id);

test('renders with the correct vote card', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);
	const poll = candidate.polls[0];
	const pollResult = `${poll.subtitle} angenommen`;
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-judgement')[0].textContent).toBe(pollResult);
	}
});

test('renders with the correct Title Header', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const titleInput = 'Politische Schwerpunkte';

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getAllByTestId(container, 'category-title')[0].textContent).toBe(titleInput);
	}
});

test('renders with the correct topic card', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const cardTitle = 'Finanzen';

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getAllByTestId(container, 'topic-name')[0].textContent).toBe(cardTitle);
	}
});
test('renders with correct sidejobs', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const sidejob = {
		position: 'Mitglied des Verwaltungsrates',
		organisation: 'Sparkasse Uecker-Randow',
	};

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getAllByTestId(container, 'profile-sidejob-organisation')[0].textContent).toBe(
			sidejob.organisation
		);

		expect(getAllByTestId(container, 'profile-sidejob-position')[0].textContent).toBe(
			sidejob.position
		);
	}
});
