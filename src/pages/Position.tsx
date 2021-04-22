import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import PositionCards from '../components/PositionCards';

interface PositionProps {
	candidate: Candidate;
}

const examplePositionData = [
	{
		title: 'Pfleger:innen aus dem Ausland',
		answer: 'yes',
	},
	{
		title: 'Lobbyismusgesetz verschärfen',
		answer: 'no',
	},
	{
		title: 'Abitur aussetzen',
		answer: 'yes',
	},
];

const Position: React.FC<PositionProps> = ({ candidate }: PositionProps) => {
	return (
		<IonPage>
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>
				<PositionCards positions={examplePositionData} />
			</IonContent>
		</IonPage>
	);
};

export default Position;
