import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';
import ElectionchancesCard from '../components/ElectionChancesCard';
import StateListCard from '../components/StateListCard';
import './ElectionChances.css';
import { Candidate } from '../Types';
/* import SegmentButtons from '../components/SegmentButtons'; */

interface ElectionchancesProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Electionchances: React.FC<ElectionchancesProps> = ({ candidate }: ElectionchancesProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */

	const [tab, setTab] = React.useState('0'); // eslint-disable-line @typescript-eslint/no-unused-vars

	/* This is returned when using this component */
	return (
		<IonPage>
			{/* Here the content of our page starts */}
			<IonContent fullscreen>
				<div data-testid="votes-subheading-parties">
					{/* <SegmentButtons tab={tab} setTab={setTab} /> */}
				</div>

				<div className="election-chances-title" data-testid="votes-subheading-votes">
					<IonText>Wahlergebnis</IonText>
				</div>

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
