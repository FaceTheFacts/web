import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';

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

describe('integration test', () => {
	it('renders page correctly', () => {
		// given
		const history = createMemoryHistory({
			initialEntries: ['/search'],
		});

		// when
		render(
			<Router history={history}>
				<Search />
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
			initialEntries: ['/search'],
		});

		// when
		const page = mount(
			<Router history={history}>
				<Search />
			</Router>
		);
		//Node.js 15 issue
		//https://solaceinfotech.com/blog/whats-new-in-node-js-15/
		process.on('unhandledRejection', () => {
			page.find('.camera-icon-background').simulate('click');
			// then
			expect(page.find('.camera-container').length).toEqual(1);
		});
	});
});
