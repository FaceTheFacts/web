import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getAllByTestId } from '@testing-library/react';
import 'jest-canvas-mock';

import Profile from './Profile';

import { amthor } from '../../amthor';
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

const candidate = amthor;
const id = String(candidate.id);
//given
const poll = candidate.polls[0];
const title = poll.title;

//Integration Test
//Card Title
test('renders with the correct judge statement', () => {
	//given
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	//when
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
		</Router>,
		container
	);
	//then
	if (container !== null) {
		expect(getAllByTestId(container, 'vote-card-title')[0].textContent).toBe(title);
	}
});

//judge statement
test('renders with the correct judge statement', () => {
	//given
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/profile`],
	});
	//when
	render(
		<Router history={history}>
			<Profile candidate={candidate} profileId={id} />
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
