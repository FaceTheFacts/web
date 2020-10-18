import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PartyMatch from './PartyMatch';
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

it('renders with correct parties', () => {
	// given
	const subheading = 'Sub Heading';

	// when
	act(() => {
		render(<PartyMatch parties={amthor.partyMatches} />, container);
	});

	// then
	if (container !== null) {
		const firstParty = container.getElementsByClassName('party-item')[0];
		expect(firstParty.getElementsByTagName('img')[0].src).toContain(amthor.partyMatches[0].image);
		expect(container.getElementsByClassName('party-item').length).toBe(amthor.partyMatches.length);
	}
});


