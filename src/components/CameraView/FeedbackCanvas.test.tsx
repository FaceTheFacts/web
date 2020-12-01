import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import 'jest-canvas-mock';
import FeedbackCanvas from './FeedbackCanvas';

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
		const ref: React.RefObject<FeedbackCanvas> = React.createRef()
		const width: number = 100;
		const height: number = 100;
		act(() => {
			render(<FeedbackCanvas ref={ref}></FeedbackCanvas>, container);
			ref.current?.init(width, height)
		})
	
		if (container !== null) {
			const canvas = container.getElementsByTagName('canvas')[0];
			expect(canvas.width).toBe(width);
			expect(canvas.height).toBe(height);
		}
	})
})
