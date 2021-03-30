import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { amotherNews } from '../amther_news';
import NewsCard from './NewsCard';

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

it('renders with correct title', () => {
	const firstNewsData = amotherNews[0];
	act(() => {
		render(<NewsCard newsData={firstNewsData} />, container);
	});
	if (container !== null) {
		expect(container.getElementsByClassName('news-card-title')[0].textContent).toBe(
			firstNewsData.newsTitle
		);
	}
});
