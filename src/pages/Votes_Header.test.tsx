import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import 'jest-canvas-mock';

import Votes from './Votes';

import { amthor } from '../amthor';

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

test('', () => {
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
});
