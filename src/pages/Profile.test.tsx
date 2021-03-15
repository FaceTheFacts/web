import React from 'react';
// import {renderHook} from '@testing-library/react-hooks'
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getByTestId, getAllByTestId } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
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

test('renders with correct profile header', () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	// we will also have to mock the API responses

	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	render(
		<Router history={history}>
			<Profile candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getByTestId(container, 'profile-name').textContent).toBe(candidate.name+" "+"29");

		expect(getByTestId(container, 'profile-img-url').getAttribute('src')).toBe(
			String(candidate.image)
		);
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
			<Profile candidate={candidate} />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getAllByTestId(container, 'profile-sidejob-organisation')[0].textContent).toBe(
			sidejob.organisation
		);

		expect(getAllByTestId(container, 'profile-sidejob-position')[0].textContent).toBe(
			sidejob.position
		);
	}
});
