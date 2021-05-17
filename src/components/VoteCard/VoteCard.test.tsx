import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { amthor } from '../../amthor';
import 'jest-canvas-mock';
import VoteCard from './VoteCard';
import { getAllByTestId } from '@testing-library/dom';
import { voteJudgeHandler } from '../../functions/voteJudgeHandler';
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
// given data from amthor.tsx
const poll = amthor.polls[0];
const title = poll.title;

//Test for title
it('renders with the correct title', () => {
	// when
	act(() => {
		render(<VoteCard vote={poll} />, container);
	});

	// then
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-title')[0].textContent).toBe(title);
	}
});
//Test for judgement
it('renders with the correct judge statement', () => {
	// when
	act(() => {
		render(<VoteCard vote={poll} />, container);
	});
	//given
	const numberOfYes = +poll.result.total.yes;
	const numberOfNo = +poll.result.total.no;
	const numberOfAbstain = +poll.result.total.abstain;
	const numberOfNone = +poll.result.total.none;
	const TotalVote = numberOfYes + numberOfNo + numberOfAbstain + numberOfNone;
	const voteJudge = voteJudgeHandler(numberOfYes, TotalVote);
	const pollResult = `${poll.subtitle} ${voteJudge}`;
	//then
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-judgement')[0].textContent).toBe(pollResult);
	}
});
