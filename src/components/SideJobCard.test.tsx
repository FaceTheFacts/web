import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { amthor } from '../amthor';
import {getByTestId} from '@testing-library/react';
import SideJobCard from './SideJobCard';

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

it('renders with correct position', () => {
	// given
	const sideJob = amthor.sideJobs[0]

	// when
	act(() => {
		render(<SideJobCard sideJob={sideJob} />, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'profile-sidejob-position').textContent).toBe(
			sideJob.position
		);
	}
});

it('renders with correct organisation', () => {
	// given
	const sideJob = amthor.sideJobs[0]

	// when
	act(() => {
		render(<SideJobCard sideJob={sideJob} />, container);
	});

	// then
	if (container !== null) {
		expect(getByTestId(container, 'profile-sidejob-organisation').textContent).toBe(
			sideJob.organisation
		);
	}
});
