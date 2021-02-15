import { IonButtons, IonContent, IonPage, IonTitle, IonBackButton, IonText, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';
import ElectionchancesCard from '../components/ElectionChancesCard';
import './ElectionChances.css';
import { Candidate } from '../Types';

interface ElectionchancesProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */

	/* This is returned when using this component */
	return (
		<IonPage>
			{/* Here the content of our page starts */}
			<IonContent fullscreen>
				<div className="votes-toolbar">
					<IonButtons slot="start">
						<IonBackButton className="back-button" defaultHref="profile" text="" />
					</IonButtons>
					{/* Add a page title */}
					<IonTitle className="page-title">Wahlchancen</IonTitle>
				</div>

				<div data-testid="votes-subheading-parties">
                <IonToolbar>
                    <IonSegment /*onIonChange={e => }*/>
                        <IonSegmentButton value="FirstVote">Erststimme</IonSegmentButton>
                        <IonSegmentButton value="SecondVote">Zweitstimme</IonSegmentButton>
                    </IonSegment>
                    </IonToolbar>
				</div>

				<div className="election-chances-title" data-testid="votes-subheading-votes">
					<IonText>Wahlergebnis</IonText>
				</div>

                <div className="last-grey-back">
					{candidate.electionResults.map((Election, index) => {
						return <ElectionchancesCard vote={Election} key={`electionResults-${index}`}/>;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Electionchances;
