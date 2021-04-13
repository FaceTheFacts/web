import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { unmountComponentAtNode } from 'react-dom';
import 'jest-canvas-mock';

import SegmentButtons from './SegmentButtons';

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

describe('Test Button component', () => {
	it('Test click event', () => {
		const setCandidate = jest.fn();

		const button = shallow(<SegmentButtons tab="0" setTab={setCandidate} />);
		button.find('#ZweitStimme').simulate('click');
		expect(setCandidate.mock.calls[0]).toEqual(['1']);
	});
});
