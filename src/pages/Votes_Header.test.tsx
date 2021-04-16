import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Votes from './Votes';

import { amthor } from '../amthor';
import { getByTestId } from '@testing-library/dom';

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

const candidate = amthor;

test('render the correct title', () => {
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
		expect(getByTestId(container, 'votes-header').textContent).toBe('wichtige Abstimmungen');
	}
});
