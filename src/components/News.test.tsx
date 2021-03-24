import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';
import { amthor } from '../amthor';
import News from './News';


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

test('renders with the correct Title Header', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/news`],
	});
  const titleInput = "kontroversen"
	render(
		<Router history={history}>
			<News candidate={candidate} />
		</Router>,
		container
	);
	if (container !== null) {
		expect(getAllByTestId(container, 'category-title')[0].textContent).toBe(titleInput);
	}
});
