import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { amotherNews } from '../amother_news';

let container: HTMLDivElement | null = null;
import NewsCard from './NewsCard';

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

it('renders with correct title', () => {
	act(() => {
		render(<NewsCard news={amotherNews} />, container);
	});
	if (container !== null) {
		expect(container.getElementsByClassName('news-card-title')[0].textContent).toBe(
			amotherNews[0].newsTitle
		);
	}
});
