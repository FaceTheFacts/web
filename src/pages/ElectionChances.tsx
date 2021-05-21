import {IonContent, IonPage, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import React from 'react';
import className from 'classnames'
import ElectionchancesCard from '../components/ElectionChancesCard';
import SecondVoteCard from '../components/SecondVoteCard';
import SegmentButtons from '../components/SegmentButtons';
import PoliticianProfile from '../components/PoliticianProfile'
import Tabs from '../components/Tabs';
import VoteExplainerCard from '../components/VoteExplainerCard/VoteExplainerCard';
import './ElectionChances.css';
import { Candidate } from '../Types';
import FirstVotePopup from '../components/PopupCard/FirstVotePopup/FirstVotePopup';

interface ElectionchancesProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const [segment, setSegment] = React.useState('0'); // eslint-disable-line @typescript-eslint/no-unused-vars
	const partyClassName = candidate.party.toLowerCase().replace(/\s/g, '');
	const stateListClass = className('state', partyClassName)


	/* This is returned when using this component */
	return (
		<IonPage className="Profile-Mobile">
			{/* Here the content of our page starts */}
			<PoliticianProfile candidate={candidate} />
			<Tabs></Tabs>
			<SegmentButtons tab={segment} setTab={setSegment}/>
			<IonContent>
				{segment==='0' ? 
					<div>
						<VoteExplainerCard vote="Erststimme">
							<FirstVotePopup/>
						</VoteExplainerCard>
						<div className="election-chances-firstVote">
							<IonCardSubtitle className="electionresult">Wahlergebnis 2017</IonCardSubtitle>
							<IonCardTitle className="constituency">Wahlkreis - {candidate.constituency.label}</IonCardTitle>
						</div>
					</div>
					:
					<div>
						<VoteExplainerCard vote="Zweitstimme" />
						<div className="election-chances-secondVote">
							<IonCardSubtitle className="statelist">Landesliste 2021</IonCardSubtitle>
							<IonCardTitle className={stateListClass}><span>CDU Mecklenburg-Vorpommern</span></IonCardTitle>
						</div>
						<IonCardSubtitle className="result-text">Über diese Liste kamen 2017</IonCardSubtitle>
						<IonCardTitle className="result-total">20 Kandidat:innen in den Bundestag.</IonCardTitle>
					</div>
				}

			
				<div>
					{segment==='1' ?
						candidate.secondVote.map((StateList, index) => {
							return <SecondVoteCard
								secondVote={StateList}
								key={`secondvote-${index}`}
								rank={index + 1}
							/>;
						})
						:
						candidate.electionResults.map((Election, index) => {
						
							return <ElectionchancesCard vote={Election} key={`electionResults-${index}`}/>;
						})
					}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Electionchances;
