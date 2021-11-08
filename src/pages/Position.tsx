import React from 'react';
import PositionCards from '../components/PositionCards/PositionCards';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';
import MobileScreen from '../hoc/MobileScreen';
const reason =
	'"Das ist grade noch ein Platzhalter. Die Positionen werden Anfang September hinzugefügt."';
const answer = undefined;
const examplePositionData = [
	{
		title: 'Pfleger:innen aus dem Ausland',
		answer: answer,
		reason: reason,
	},
	{
		title: 'Lobbyismusgesetz verschärfen',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Abitur aussetzen',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Bedigungsloses Grundeinkommen',
		answer: 'answer',

		reason: reason,
	},
	{
		title: 'Spitzensteuersatz senken',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Mehr Subventionen für erneuerbare Energien',
		answer: 'answer',

		reason: reason,
	},
	{
		title: 'Mehr Geld für Pflegekräfte',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Soziale Start-ups fördern',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Amazon und Co. angemessen besteuern',
		answer: 'answer',
		reason: reason,
	},
	{
		title: 'Mietpreise deckeln',
		answer: 'answer',

		reason: reason,
	},
];

const Position: React.FC = () => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();
	const { data } = useQuery(
		`politicianProfile-${id}`,
		() => fetch(`politicians/${id}?related_data=show_information`),
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);
	return (
		<MobileScreen>
			{data !== undefined ? (
				<PositionCards candidateId={data.data.id} positions={examplePositionData} />
			) : undefined}
		</MobileScreen>
	);
};

export default Position;
