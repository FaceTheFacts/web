import React from 'react';
// import {renderHook} from '@testing-library/react-hooks'
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getByTestId } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
import 'jest-canvas-mock';

import Votes from './Votes';

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

const voteStrings = {
	yes: 'Ja',
	no: 'Nein',
	abstain: 'Enthalten',
	none: 'Nicht Abg.',
};

test('renders with correct votes', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/votes`],
	});
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		const firstVote = container.getElementsByClassName('vote-card')[0];
		expect(firstVote.getElementsByClassName('vote-card-subtitle')[0].textContent).toBe(
			candidate.polls[0].subtitle
		);

		expect(firstVote.getElementsByClassName('vote-card-title')[0].textContent).toBe(
			candidate.polls[0].title
		);

		expect(firstVote.getElementsByClassName('candidate-vote')[0].textContent).toBe(
			voteStrings[candidate.polls[0].candidateVote]
		);

		expect(container.getElementsByClassName('vote-card').length).toBe(candidate.polls.length);
	}
});

test('renders with correct subheadings', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getByTestId(container, 'votes-subheading-votes').textContent).toBe('Abstimmungen');

		expect(getByTestId(container, 'votes-subheading-topics').textContent).toBe(
			'Filtern nach Themen'
		);

		expect(getByTestId(container, 'votes-subheading-parties').textContent).toBe(
			'Übereinstimmung mit anderen Fraktionen'
		);


	}
});

test('render with party images', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(
			getByTestId(container, 'votes-party-matches').getElementsByTagName('img').length
		).toBeGreaterThan(0);
	}
})

test('renders with correct topic filters', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		const filterRows = container.getElementsByClassName('topic-filter-row');
		expect(filterRows[0].textContent).toBe('FinanzenHeimatAuswärtigesWirtschaft und Energie');
		expect(filterRows[1].textContent).toBe('JustizSozialesVerteidigungLandwirtschaftFamilie');
		expect(filterRows[2].textContent).toBe('GesundheitInfrastrukturUmweltBildung/Forschung');
	}
});

test('renders with correct other parties', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		const partyMatches = container.getElementsByClassName('party-item');
		expect(partyMatches.length).toBe(candidate.partyMatches.length);
		expect(partyMatches[0].textContent).toBe(candidate.partyMatches[0].percentage);
		expect(partyMatches[0].getElementsByTagName('img')[0].src).toContain(
			candidate.partyMatches[0].image
		);
	}
});
