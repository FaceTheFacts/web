import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import CameraFeed from './CameraFeed';

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

jest.mock('./CameraFeed');

describe('unittest', () => {
	it('renders correctly', () => {
		// given
		const cameraOpts = {
			x: 0,
			y: 0,
			width: window.innerWidth,
			height: (window.innerWidth * 4) / 3,
			camera: 'rear',
			tapPhoto: true,
			previewDrag: false,
			toBack: true,
			alpha: 1,
		};
		const setCameraReady = jest.fn();

		// when
		render(
			<CameraFeed cameraOpts={cameraOpts} setCameraReady={setCameraReady}></CameraFeed>,
			container
		);

		// then
		expect(container?.getElementsByTagName('video')[0]).toBeInTheDocument();
	});
});
