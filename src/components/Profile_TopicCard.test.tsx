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

test('renders with the correct topic card', () => {
	//given
	const cardTitle = 'Finanzen';
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
  //when
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);
  //then
	if (container !== null) {
		expect(getAllByTestId(container, 'topic-name')[0].textContent).toBe(cardTitle);
	}
});