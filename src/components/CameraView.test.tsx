//import './mediaDevices.mock'
import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import 'jest-canvas-mock';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { amthor } from '../amthor';

Enzyme.configure({ adapter: new Adapter() })

import CameraView from './CameraView';

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

jest.mock('./CameraView/CameraFeed');


describe('unittest', () => {

    it('renders with all components', () => {
        // given
        const history = createMemoryHistory({
            initialEntries: [`/discover`],
        });
        const setShowPopover = jest.fn()
        const setCandidate = jest.fn()

        // when
        act(() => {
            render(
            <Router history={history}>
                <CameraView
                    setShowPopover={setShowPopover}
                    setCandidate={setCandidate}
                ></CameraView>
            </Router>, container)
        })

        // then
        if(container) {
            expect(container.getElementsByTagName('canvas').length).toBe(2)
            expect(container.getElementsByTagName('video').length).toBe(1)
        }
        
    })

})

describe('integration test', () => {
    test.skip('shows popover', () => {

        // given
        const history = createMemoryHistory({
            initialEntries: [`/discover`],
        });

        const setCandidate = jest.fn()
        const setShowPopover = jest.fn()

        // when
        const page = mount((
                <Router history={history}>
                    <CameraView setShowPopover={setShowPopover} setCandidate={setCandidate} />
                </Router>
        ))
        console.log(page.children().invoke('setShowPopover'))
 

        // then
        expect(page.find('.detected-candidate-popover').length).toEqual(1);

    })
})