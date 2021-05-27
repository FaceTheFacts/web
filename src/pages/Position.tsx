import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import PositionCards from '../components/PositionCards/PositionCards';

interface PositionProps {
	candidate: Candidate;
}
const reason =
	'"Das ist nur ein Platzhalter.\n Für die Bundestagswahl haben Kandidat:innen  hier die Möglichkeit ihre Position zu begründen"';
const examplePositionData = [
	{
		title: 'Pfleger:innen aus dem Ausland',
		extendedTitle:
			'Wir sollten aktive Pfleger:innen aus dem Ausland anwerben um die Personalnot in der Pflege zu lindern.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Lobbyismusgesetz verschärfen',
		extendedTitle:
			'Wir sollten ein Lobbyregister einführen, um den legislativen Fußabdruck von Oganisation und Unternehmen transparent zu machen.',
		answer: 'no',
		reason: reason,
	},
	{
		title: 'Abitur aussetzen',
		extendedTitle:
			'Wir sollten das Abitur aussetzen, weil Corona die Leistungen zu stark beeinträchtigt hat.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Bedigungsloses Grundeinkommen',
		extendedTitle:
			'Wir sollten ein bedingungsloses Grundeinkommen einführen, das jedem Bürger den Lebensunterhalt sichert.',
		answer: 'no',

		reason: reason,
	},
	{
		title: 'Spitzensteuersatz senken',
		extendedTitle:
			'Wir sollten den Spitzensteuersatz senken, um Investitionen und Konsum anzukurbeln.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Mehr Subventionen für erneuerbare Energien',
		extendedTitle:
			'Wir sollten erneuerbare Energien stärker subventionieren, um den Ausbau in Deutschland voranzutreiben und schneller CO2 neutral zu werden.',
		answer: 'no',
		reason: reason,
	},
	{
		title: 'Mehr Geld für Pflegekräfte',
		extendedTitle:
			'Wir sollten Gehälter in der Pflege mit staatlichen Eingriffen erhöhen, um den Beruf attraktiver zu machen.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Soziale Start-ups fördern',
		extendedTitle:
			'Wir sollten soziale Start-ups finanziell fördern, um nachhaltige Lösungen wettbewerbsfähig zu machen.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Amazon und Co. angemessen besteuern',
		extendedTitle:
			'Wir sollten uns dafür einsetzen, dass große Internetfirmen im gleichen Maße besteuert werden wie konventionelle Unternehmen.',
		answer: 'yes',
		reason: reason,
	},
	{
		title: 'Mietpreise deckeln',
		extendedTitle:
			'Wir sollten Mietpreise deckeln, um begehrten Wohnungsraum für alle Schichten finanzierbar zu machen.',
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
