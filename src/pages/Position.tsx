import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import PositionCards from '../components/PositionCards/PositionCards';

interface PositionProps {
	candidate: Candidate;
}

const examplePositionData = [
	{
		title: 'Pfleger:innen aus dem Ausland',
		answer: 'yes',
		reason:
			'"Wir sollten aktive Pfleger:innen aus dem Ausland anwerben um die Personalnot in der Pflege zu lindern."',
	},
	{
		title: 'Lobbyismusgesetz verschärfen',
		answer: 'no',
		reason:
			'"Wir sollten ein Lobbyregister einführen, um den legislativen Fußabdruck von Oganisation und Unternehmen transparent zu machen."',
	},
	{
		title: 'Abitur aussetzen',
		answer: 'yes',
		reason:
			'"Wir sollten das Abitur aussetzen, weil Corona die Leistungen zu stark beeinträchtigt hat."',
	},
	{
		title: 'Bedigungsloses Grundeinkommen',
		answer: 'no',

		reason:
			'"Wir sollten ein bedingungsloses Grundeinkommen einführen, das jedem Bürger den Lebensunterhalt sichert."',
	},
	{
		title: 'Spitzensteuersatz senken',
		answer: 'yes',
		reason:
			'"Wir sollten den Spitzensteuersatz senken, um Investitionen und Konsum anzukurbeln."',
	},
	{
		title: 'Mehr Subventionen für erneuerbare Energien',
		answer: 'no',

		reason:
			'"Wir sollten den Spitzensteuersatz senken, um Investitionen und Konsum anzukurbeln."',
	},
	{
		title: 'Mehr Geld für Pflegekräfte',
		answer: 'yes',
		reason:
			'"Wir sollten Gehälter in der Pflege mit staatlichen Eingriffen erhöhen, um den Beruf attraktiver zu machen."',
	},
	{
		title: 'Soziale Start-ups fördern',
		answer: 'yes',
		reason:
			'"Wir sollten soziale Start-ups finanziell fördern, um nachhaltige Lösungen wettbewerbsfähig zu machen."',
	},
	{
		title: 'Amazon und Co. angemessen besteuern',
		answer: 'yes',
		reason:
			'"Wir sollten uns dafür einsetzen, dass große Internetfirmen im gleichen Maße besteuert werden wie konventionelle Unternehmen."',
	},
	{
		title: 'Mietpreise deckeln',
		answer: 'no',

		reason:
			'"Wir sollten Mietpreise deckeln, um begehrten Wohnungsraum für alle Schichten finanzierbar zu machen."',
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
