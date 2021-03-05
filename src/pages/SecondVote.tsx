import React, { useState } from 'react';
import { IonPage, useIonViewDidEnter } from '@ionic/react';

import './SecondVote.css';
import { Candidate } from '../Types';

import SecondVoteCardItem from '../components/SecondVoteCard';

//Add Scroll Event listener

interface ProfileProps {
	candidate: Candidate;
}

//Just for testing
const secondVote = [
	{
		name: 'Thomas Racheal',
		electionChance: 60.4,
	},
	{
		name: 'Dr.Günter Krings',
		electionChance: 50.4,
	},
	{
		name: 'Hermann Gröhe',
		electionChance: 30.4,
	},
	{
		name: 'Oliver Wittke',
		electionChance: 28.6,
	},
	{
		name: 'Micheala Noll',
		electionChance: 19.6,
	},
	{
		name: 'Karl-Josef Laumann',
		electionChance: 12.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
	{
		name: 'Elisabeth Winkelmeier-Becker',
		electionChance: 9.4,
	},
];

const SecondVote: React.FC<ProfileProps> = () => {
	const [fixedPosition, setFixedPosition] = useState<number | undefined>();
	const [previousScrollHeight, setpreviousScrollHeight] = useState<number>(0);
	const [lastCandidate, setLastcandidate] = useState<number>(0);

	const initialFixedPositionHandler = (): undefined | number => {
		const windowHeight: number | undefined = document.getElementById('second-vote-results')
			?.clientHeight;
		const cardHeight: number | undefined = document.getElementById('second-vote-card')
			?.clientHeight;
		console.log(cardHeight, windowHeight);
		if (typeof windowHeight === 'number' && typeof cardHeight === 'number') {
			const halfWindowHeight = windowHeight / 2;
			const cardNums = Math.round(halfWindowHeight / cardHeight);
			return cardNums + 1;
		}
	};

	useIonViewDidEnter(() =>
		setTimeout(function () {
			setFixedPosition(initialFixedPositionHandler());
			setLastCandidateHandler();
		}, 100)
	);

	const cardNumsHandler = (voteRes: { name: string; electionChance: number }[]): number => {
		const cardNums = voteRes.length;
		return cardNums;
	};

	const setFixedPositionHandler = (): void => {
		const cardNums = cardNumsHandler(secondVote);
		const voteResults = document.getElementById('second-vote-results');
		const initialPos = initialFixedPositionHandler();
		const cardHeight = 57;
		const cardblank = 10;
		const oneScroll = cardHeight + cardblank;
		if (!fixedPosition || !voteResults || !initialPos) {
			return;
		}
		//margin top 10px
		const scrollHeight = voteResults.scrollTop - 10;
		const scrollDistance = Math.abs(scrollHeight - previousScrollHeight);

		let direction;
		if (previousScrollHeight < scrollHeight) {
			direction = 1;
		} else {
			direction = -1;
		}
		//If a user scroll at the bottom of screen
		if (fixedPosition === cardNums && scrollDistance >= oneScroll) {
			setFixedPosition(fixedPosition - 1);
		}

		if (fixedPosition < cardNums && scrollDistance >= oneScroll) {
			setpreviousScrollHeight(scrollHeight);
			const scrollNums = (scrollDistance / oneScroll) >> 0;
			setFixedPosition(fixedPosition + scrollNums * direction);
		}
		//If a user try to scroll up above the initial position
		if (fixedPosition < initialPos) {
			setFixedPosition(fixedPosition + 1);
		}
	};

	const setLastCandidateHandler = (): void => {
		//if we get deta from backend, we should write calculation logic here
		//But now I detemine last candidate is rank #4
		//this function should excute after rendering this page
		setLastcandidate(4);
	};

	const testingResult = secondVote.map((candidate, index) => {
		return (
			<SecondVoteCardItem
				key={`secondvote-${index}`}
				candidateName={candidate.name}
				electionChance={candidate.electionChance}
				rank={index + 1}
				setFixedPosition={fixedPosition}
				lastCandidate={lastCandidate}
			/>
		);
	});

	return (
		<IonPage>
			<div
				className="secondvote-black-back"
				id="second-vote-results"
				onScroll={setFixedPositionHandler}
			>
				{testingResult}
			</div>
		</IonPage>
	);
};
export default SecondVote;
