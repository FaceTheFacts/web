//import './mediaDevices.mock'
import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import 'jest-canvas-mock';
import CameraView from './CameraView';

import { getByTestId } from '@testing-library/react';


const setShowPopover = jest.fn()
const setCandidate = jest.fn()


// test('component renders correctly', () => {
//     const history = createMemoryHistory({
//         initialEntries: [`/discover`],
//     });

//     const component = renderer.create(
//         <Router history={history}>
//         <CameraView
//             setShowPopover={setShowPopover}
//             setCandidate={setCandidate}
//         ></CameraView>
//         </Router>
//         );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })


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