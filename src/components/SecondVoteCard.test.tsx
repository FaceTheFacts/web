import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import SecondVoteCard from './SecondVoteCard';

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

test('renders with the correct ElectionChancesCard', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/election`],
	});
	render(
		<Router history={history}>
			<SecondVoteCard secondVote={candidate.secondVote[0]} rank={1}/>
		</Router>,
		container
	);
    const secondVote = candidate.secondVote[0]
    const rank = 1
	if (container !== null) {
		expect(getAllByTestId(container, 'rank-secondVote')[0].textContent).toBe(`#${rank} ${secondVote.name}`);
	}
});