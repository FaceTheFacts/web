import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Discover from './Discover';
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

Enzyme.configure({ adapter: new Adapter() });

// navigator.getUserMedia() is not available in testing environment
jest.mock('../components/CameraView/CameraFeed');

describe('integration test', () => {
	it('renders page correctly', () => {
		// given
		const history = createMemoryHistory({
			initialEntries: ['/discover'],
		});

		const setCandidate = jest.fn();

		// when
		render(
			<Router history={history}>
				<Discover candidate={amthor} setCandidate={setCandidate} />
			</Router>,
			container
		);

		// then

		if (container !== null) {
			expect(container).toMatchSnapshot();
		}
	});

	it('opens camera view', () => {
		// given
		const history = createMemoryHistory({
			initialEntries: ['/discover'],
		});

		const setCandidate = jest.fn();

		// when
		const page = mount(
			<Router history={history}>
				<Discover candidate={amthor} setCandidate={setCandidate} />
			</Router>
		);
		page.find('.camera-icon-background').simulate('click');

		// then
		expect(page.find('.camera-container').length).toEqual(1);
	});
});
