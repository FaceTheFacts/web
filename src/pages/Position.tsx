import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Politician } from '../Types';
import PositionCards from '../components/PositionCards/PositionCards';

interface PositionProps {
	candidate: Politician;
}
const reason =
	'"Das ist nur ein Platzhalter. Für die Bundestagswahl haben Kandidat:innen  hier die Möglichkeit ihre Position zu begründen"';
const examplePositionData = [
	{
		title: 'Pfleger:innen aus dem Ausland',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Lobbyismusgesetz verschärfen',
		answer: 'no',
		reason: reason,
	},
	{
		title: 'Abitur aussetzen',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Bedigungsloses Grundeinkommen',
		answer: 'no',

		reason: reason,
	},
	{
		title: 'Spitzensteuersatz senken',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Mehr Subventionen für erneuerbare Energien',
		answer: 'no',

		reason: reason,
	},
	{
		title: 'Mehr Geld für Pflegekräfte',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Soziale Start-ups fördern',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Amazon und Co. angemessen besteuern',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Mietpreise deckeln',
		answer: 'no',

		reason: reason,
	},
];

const Position: React.FC<PositionProps> = ({ candidate }: PositionProps) => {
	return (
		<IonPage className="Profile-Mobile">
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>
				<PositionCards candidateId={candidate.id} positions={examplePositionData} />
			</IonContent>
		</IonPage>
	);
};

export default Position;
