import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import SegmentButtons from './SegmentButtons';

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

describe('Test Button component', () => {
    it('Test click event', () => {
        const setCandidate = jest.fn();
  
        const button = shallow((<SegmentButtons tab="0" setTab={setCandidate} />));
        button.find("#ZweitStimme").simulate('click');
        expect(setCandidate.mock.calls[0]).toEqual(["1"]);
    });
  });