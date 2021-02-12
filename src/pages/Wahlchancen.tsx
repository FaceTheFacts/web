import { IonButtons, IonContent, IonPage, IonTitle, IonBackButton, IonText, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';
import PartyMatch from '../components/PartyMatch';
import SubHeading from '../components/SubHeading';
import WahlchancenCard from '../components/WahlchancenCard';
import './Votes.css';
import { Candidate } from '../Types';

interface WahlchancenProps {
	candidate: Candidate;
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Wahlchancen: React.FC<WahlchancenProps> = ({ candidate }: WahlchancenProps) => {
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
                    <IonSegment value="all">
                        <IonSegmentButton value="all">Erststimme</IonSegmentButton>
                        <IonSegmentButton value="favorites">Zweitstimme</IonSegmentButton>
                    </IonSegment>
                    </IonToolbar>
				</div>

				<div className="votes-title" data-testid="votes-subheading-votes">
					<IonText>Wahlergebnis</IonText>
				</div>

                <div className="last-grey-back">
					{candidate.electionResults.map((Election, index) => {
						return <WahlchancenCard vote={Election} key={`electionResults-${index}`}/>;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Wahlchancen;
