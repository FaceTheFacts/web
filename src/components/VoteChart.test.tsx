import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import VoteChart from './VoteChart';
import { amthor } from '../amthor';
import 'jest-canvas-mock';
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

it('renders with chart canvas', () => {
	// given data from amthor.tsx
	const vote = amthor.polls[0];

	// when
	act(() => {
		render(<VoteChart vote={vote} />, container);
	});

	// then
	if (container !== null) {
		const canvas = container.getElementsByTagName('canvas')[0];
		expect(canvas).toBeInTheDocument();
		// expect(paths[0].getAttribute('stroke')).toBe(partyVote.colour)
	}
});
