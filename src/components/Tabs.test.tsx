import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import 'jest-canvas-mock';

import Tabs from './Tabs';

Enzyme.configure({ adapter: new Adapter() });

describe('Test TabButton Route', () => {
	it('Test click event', () => {
		//given
		const history = ['/politician/undefined/election'];
		//when
		const button = mount(
			<MemoryRouter initialEntries={history}>
				<Tabs />
			</MemoryRouter>
		);
		//then
		expect(button.find('#Profile').at(0).props().to).toBe('/politician/undefined/profile');
	});
});
