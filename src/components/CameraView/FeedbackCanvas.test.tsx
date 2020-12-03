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
describe('integration test', () => {
	it('renders with correct size', () => {
		// given
		const ref: React.RefObject<FeedbackCanvas> = React.createRef();
		const width: number = 100;
		const height: number = 100;

		//when
		act(() => {
			render(<FeedbackCanvas ref={ref}></FeedbackCanvas>, container);
			ref.current?.init(width, height);
		});

		// then
		if (container !== null) {
			const canvas = container.getElementsByTagName('canvas')[0];
			expect(canvas.width).toBe(width);
			expect(canvas.height).toBe(height);
		}
	});
	it('draws without errors', () => {
		// given
		const ref: React.RefObject<FeedbackCanvas> = React.createRef();
		const predictions: Array<{ topLeft: [number, number]; bottomRight: [number, number] }> = [
			{ topLeft: [20, 50], bottomRight: [80, 100] },
		];
		const width: number = 100;
		const height: number = 100;

		// when
		act(() => {
			render(<FeedbackCanvas ref={ref}></FeedbackCanvas>, container);
			ref.current?.init(width, height);
		});

		// then
		expect(() => ref.current?.draw(predictions)).not.toThrow();
	});

	it('draws detections correctly', () => {
		// given
		const ref: React.RefObject<FeedbackCanvas> = React.createRef();
		const predictions: Array<{ topLeft: [number, number]; bottomRight: [number, number] }> = [
			{ topLeft: [20, 50], bottomRight: [80, 100] },
		];
		const width: number = 100;
		const height: number = 100;

		// when
		act(() => {
			render(<FeedbackCanvas ref={ref}></FeedbackCanvas>, container);
			ref.current?.init(width, height);
			ref.current?.draw(predictions);
		});

		// then
		const path = ref.current?.ref.current?.getContext('2d')?.__getPath;
		expect(path).toMatchSnapshot();
	});
});
