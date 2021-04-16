import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import 'jest-canvas-mock';
import Votes from './Votes';

import { amthor } from '../amthor';
import { getAllByTestId } from '@testing-library/dom';
import { voteJudgeHandler } from '../functions/voteJudgeHandler';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	if (container !== null) {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}
});
//given
const candidate = amthor;
const poll = candidate.polls[0];
const title = poll.title;

test('render with the correct title', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/votes`],
	});
	//when
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);
	//then
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-title')[0].textContent).toBe(title);
	}
});

test('renders with the correct judge statement', () => {
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/votes`],
	});
	//when
	render(
		<Router history={history}>
			<Votes candidate={candidate} />
		</Router>,
		container
	);
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
