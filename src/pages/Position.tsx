import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import PositionCards from '../components/PositionCards/PositionCards';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';

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

const Position: React.FC = () => {
		/* Here we define the variable 'name' to be used as a parameter in components */
		const { id } = useParams<{ id: string }>();
		const { data, status, error } = useQuery(
			`politicianProfile-${id}`,
			() => fetch(`politicians/${id}?related_data=show_information`),
			{
				staleTime: 60 * 10000000, // 10000 minute = around 1 week
				cacheTime: 60 * 10000000,
			}
		);
	
		if (status === 'loading') {
			// eslint-disable-next-line
			return <iframe src="https://lottiefiles.com/iframe/58266-quad-cube-shifter-1"></iframe>;
		}
	
		if (status === 'error') {
			return <p>Error: {error}</p>;
		}
	return (
		<IonPage className="Profile-Mobile">
			{data !== undefined ? <PoliticianProfile candidate={data.data} /> : null}
			<Tabs />
			<IonContent>
				<PositionCards candidateId={data.data.id} positions={examplePositionData} />
			</IonContent>
		</IonPage>
	);
};

export default Position;
