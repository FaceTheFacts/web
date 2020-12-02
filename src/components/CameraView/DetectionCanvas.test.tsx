import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import 'jest-canvas-mock';
import DetectionCanvas from './DetectionCanvas';

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
describe('unittest', () => {
	it('renders with correct size', () => {
		// given
		const ref: React.RefObject<DetectionCanvas> = React.createRef()
		const width: number = 100;
		const height: number = 100;

		//when
		act(() => {
			render(<DetectionCanvas ref={ref}></DetectionCanvas>, container);
			ref.current?.init(width, height)
		})
	
		// then
		if (container !== null) {
			const canvas = container.getElementsByTagName('canvas')[0];
			expect(canvas.width).toBe(width);
			expect(canvas.height).toBe(height);
		}
	})
	it('draws image without errors', () => {
		// given 
		const ref: React.RefObject<DetectionCanvas> = React.createRef()
        const image: HTMLVideoElement = document.createElement('video');
        image.src = "./__mocks__/test_scan_video_large.mp4";
    
		const width: number = 100;
		const height: number = 100;

		// when
		act(() => {
			render(<DetectionCanvas ref={ref}></DetectionCanvas>, container);
			ref.current?.init(width, height)
			
		})

		// then
		expect(() => ref.current?.draw(image, width, height)).not.toThrow();
	})

	it('draws image correctly', () => {
		// given 
		const ref: React.RefObject<DetectionCanvas> = React.createRef()
        const image: HTMLVideoElement = document.createElement('video');
        image.src = "./test_scan_video_large.mp4";
		const width: number = 100;
		const height: number = 100;

		// when
		act(() => {
			render(<DetectionCanvas ref={ref}></DetectionCanvas>, container);
			ref.current?.init(width, height)
			ref.current?.draw(image, width, height);
		})

		// then
		const calls = ref.current?.ref.current?.getContext('2d')?.__getDrawCalls;
		expect(calls).toMatchSnapshot();
	})
})
