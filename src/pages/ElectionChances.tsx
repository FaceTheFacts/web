import {IonContent, IonPage, IonCardSubtitle} from '@ionic/react';
import React from 'react';
import ElectionchancesCard from '../components/ElectionChancesCard';
import SecondVoteCard from '../components/SecondVoteCard';
import SegmentButtons from '../components/SegmentButtons';
import PoliticianProfile from '../components/PoliticianProfile'
import Tabs from '../components/Tabs'
import VoteExplainerCard from '../components/VoteExplainerCard'
import './ElectionChances.css';
import { Candidate } from '../Types';

interface ElectionchancesProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const [segment, setSegment] = React.useState('0'); // eslint-disable-line @typescript-eslint/no-unused-vars
	/* Second Vote Code */


	/* This is returned when using this component */
	return (
		<IonPage className="black-back">
			{/* Here the content of our page starts */}
			<PoliticianProfile candidate={candidate} />
			<Tabs></Tabs>
			<SegmentButtons tab={segment} setTab={setSegment}/>
			{segment==='0' ? 
				<div>
					<VoteExplainerCard vote="Erststimme" />
					<div className="election-chances-title">
						<IonCardSubtitle>Wahlergebnis 2017</IonCardSubtitle>
					</div>
				</div>
				:
				<div>
					<VoteExplainerCard vote="Zweitstimme" />
					<div className="election-chances-title">
						<IonCardSubtitle className="statelist">Landesliste 2021</IonCardSubtitle>
						<IonCardSubtitle className="state"><span className="party">CDU</span> Mecklenburg-Vorpommern</IonCardSubtitle>
					</div>
				</div>
			}
			{segment==='0"' ?
				<ElectionchancesCard firstCandidate={true} vote={candidate.electionResults[0]} />
				: null}
			<IonContent>
				<div className="blue-back">
					{segment==='1' ?
						candidate.secondVote.slice(1).map((StateList, index) => {
							return <SecondVoteCard
								secondVote={StateList}
								key={`secondvote-${index}`}
								rank={index + 1}
							/>;
						})
						:
						candidate.electionResults.slice(1).map((Election, index) => {
						
							return <ElectionchancesCard firstCandidate={false} vote={Election} key={`electionResults-${index}`}/>;
						})
					}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Electionchances;
