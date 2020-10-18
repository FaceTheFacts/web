import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PartyVoteChart from './PartyVoteChart';
import {amthor} from '../amthor';
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

it('renders with correct paths', () => {
	// given data from amthor.tsx
	const partyVote = amthor.polls[0].result.partyResult[0];

	// when
	act(() => {
		render(<PartyVoteChart partyVote={partyVote} />, container);
	});

	// then
	if (container !== null) {
		const paths = container.getElementsByTagName('path');
		expect(paths[0].getAttribute('d')).toBe("M 11.75 50.00000000000001 A 38.25 38.25 0 1 0 35.249609488328815 14.70852114527927");
		// expect(paths[0].getAttribute('stroke')).toBe(partyVote.colour)

	}
});



