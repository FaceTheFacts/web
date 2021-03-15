import {IonContent, IonPage, IonBackButton, IonCardSubtitle, IonCardTitle, useIonViewDidEnter } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router'
import ElectionchancesCard from '../components/ElectionChancesCard';
import SecondVoteCard from '../components/SecondVoteCard';
import SegmentButtons from '../components/SegmentButtons';
import PoliticianProfile from '../components/PoliticianProfile'
import Tabs from '../components/Tabs'
import './ElectionChances.css';
import { Candidate } from '../Types';

interface ElectionchancesProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();

	const [tab, setTab] = React.useState('0'); // eslint-disable-line @typescript-eslint/no-unused-vars
/* Second Vote Code */

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
		const cardNums = cardNumsHandler(candidate.secondVote);
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


	/* This is returned when using this component */
	return (
		<IonPage className="black-back">
			{/* Here the content of our page starts */}
				<PoliticianProfile candidate={candidate} />
				<Tabs candidate={candidate}></Tabs>
				<SegmentButtons tab={tab} setTab={setTab}/>
				
				{tab=='0' ? 
					<div className="election-chances-title">
						<IonCardSubtitle>Wahlergebnis 2017</IonCardSubtitle>
					</div>
					
				:
					<div className="election-chances-title">
						
					<div>
					<IonCardSubtitle>Wie funktioniert die Zweitstimme?</IonCardSubtitle>
					<IonBackButton className="forward-button" defaultHref="profile" text="" />
					</div>

					<IonCardSubtitle>Landesliste</IonCardSubtitle>
					<IonCardTitle>CDU Mecklenburg-Vorpommern</IonCardTitle>
					</div>
				}
							
				{tab=="0" ?
					<ElectionchancesCard firstCandidate={true} vote={candidate.electionResults[0]} />
					: null
					}

				<div className="last-grey-back">
					{tab === '0'
						? candidate.electionResults.map((Election, index) => {
							return (
								<ElectionchancesCard
									vote={Election}
									key={`electionResults-${index}`}
								/>
							);
						})
						: candidate.electionResults.map((Election, index) => {
							return (
								<StateListCard
									vote={Election}
									key={`electionResults-${index}`}
								/>
							);
						})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Electionchances;
