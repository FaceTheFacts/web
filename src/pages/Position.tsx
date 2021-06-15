import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import PositionCards from '../components/PositionCards/PositionCards';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';
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
