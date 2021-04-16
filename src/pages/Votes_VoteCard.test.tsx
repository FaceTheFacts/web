import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import 'jest-canvas-mock';
import Votes from './Votes';

import { amthor } from '../amthor';
import { getAllByTestId } from '@testing-library/dom';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	if (container !== null) {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}
});
//given
const candidate = amthor;
const poll = candidate.polls[0];
const title = poll.title;

test('render with the correct title', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/votes`],
	});
	//when
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);
	//then
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-title')[0].textContent).toBe(title);
	}
});
