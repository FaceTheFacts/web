import React, { useState } from 'react';
// import {renderHook} from '@testing-library/react-hooks'
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getByTestId } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
import 'jest-canvas-mock';

import Profile from './Profile';

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

const candidate = {
	id: '1',
	name: 'Philipp Amthor',
	image:
		'https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr',
	party: 'CDU/CSU',
};

test('renders with correct profile header', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getByTestId(container, 'profile-name').textContent).toBe(
			candidate.name
		);

		expect(
			getByTestId(container, 'profile-img-url').getAttribute('src')
		).toBe(candidate.image);
	}
});

test('renders with correct subheadings', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile />
		</Router>,
		container
	);

	if (container !== null) {
		expect(
			getByTestId(
				getByTestId(container, 'profile-subheading-votes'),
				'subheading-button'
			).textContent
		).toBe('Abstimmungsverhalten >');

		expect(
			getByTestId(container, 'profile-subheading-controversies')
				.textContent
		).toBe('Kontroversen');

		expect(
			getByTestId(container, 'profile-subheading-sidejobs').textContent
		).toBe('Bekannte Nebentätigkeiten');
	}
});

test('renders with correct sidejobs', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const sidejob = {
		position: 'Mitglied des Verwaltungsrates',
		organisation: 'Sparkasse Uecker-Randow',
	};

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getByTestId(container, 'profile-sidejob-organisation').textContent).toBe(
			sidejob.organisation
		);

		expect(
			getByTestId(container, 'profile-sidejob-position').textContent
		).toBe(sidejob.position);
	}
});
