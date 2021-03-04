import { IonButtons, IonContent, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonTitle, IonBackButton, IonText, IonToolbar, IonSegment, IonSegmentButton, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import ElectionchancesCard from '../components/ElectionChancesCard';
import StateListCard from '../components/StateListCard';
/* import SegmentButtons from '../components/SegmentButtons'; */
import './ElectionChances.css';
import { Candidate } from '../Types';

interface ElectionchancesProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const [firstTab, setFirstTab] = React.useState("");
	const [firstCandidate, setFirstCandidate] = React.useState();
	
	/* function ShowFirstTab(segment) {
			setFirstTab(segment);
	} */

	/* This is returned when using this component */
	return (
		<IonPage>
			
			{/* Here the content of our page starts */}
				{/* <SegmentButtons /> */}
				
				{/* {firstTab=='FirstVote' ?  */}
					<div className="election-chances-title">
						<IonCardSubtitle>Wahlergebnis 2017</IonCardSubtitle>
					</div>
				{/* :
					<div className="election-chances-title">
						
					<IonCardSubtitle>Wie funktioniert die Zweitstimme?</IonCardSubtitle>
					<IonBackButton className="forward-button" defaultHref="profile" text="" />
					
					
					<IonCardSubtitle>Landesliste</IonCardSubtitle>
					<IonCardTitle>CDU Mecklenburg-Vorpommern</IonCardTitle>
					</div>
					} */}
						<IonContent>
			<div className="grey-back">		
           
					{firstTab ?
					<ElectionchancesCard firstCandidate={true} vote={candidate.electionResults[0]} />
					: null
					}

					{firstTab=="FirstVote" ?
					candidate.electionResults.slice(1).map((Election, index) => {
						return <StateListCard vote={Election} key={`electionResults-${index}`}/>;
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
