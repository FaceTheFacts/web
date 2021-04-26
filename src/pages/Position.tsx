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
	{
		title: 'Bedigungsloses Grundeinkommen',
		answer: 'no',
	},
	{
		title: 'Spitzensteuersatz senken',
		answer: 'yes',
	},
	{
		title: 'Mehr Subventionen für erneuerbare Energien',
		answer: 'no',
	},
	{
		title: 'Mehr Geld für Pflegekräfte',
		answer: 'yes',
	},
	{
		title: 'Soziale Start-ups fördern',
		answer: 'yes',
	},
	{
		title: 'Amazon und Co. angemessen besteuern',
		answer: 'yes',
	},
	{
		title: 'Mietpreise deckeln',
		answer: 'no',
	},
];

const Position: React.FC<PositionProps> = ({ candidate }: PositionProps) => {
	return (
		<IonPage>
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>
				<PositionCards candidateId={candidate.id} positions={examplePositionData} />
			</IonContent>
		</IonPage>
	);
};

export default Position;
