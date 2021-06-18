import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import ProfileComponent from '../components/Profile/Profile';
import { useQuery } from 'react-query';
import axios from 'axios';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC = () => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();
	const { data, status, error } = useQuery(
		`politicianProfile-${id}`,
		async () => {
			const res = await axios.get(`/politicians/${id}`);
			return await res.data;
		},
		{
			staleTime: 60 * 10000000, // 10000 minute = around 1 week
			cacheTime: 60 * 10000000,
		}
	);

	switch (status) {
	case 'loading':
		// eslint-disable-next-line
			return <iframe src="https://lottiefiles.com/iframe/58266-quad-cube-shifter-1"></iframe>;
	case 'error':
		return <p>Error: {error}</p>;
	default:
		/* This is returned when using this component */
		return (
			<IonPage className="Profile-Mobile">
				{data !== undefined ? <PoliticianProfile candidate={data} /> : null}
				<Tabs />
				<IonContent>
					<ProfileComponent candidate={data} profileId={id} />
				</IonContent>
			</IonPage>
		);
	}
};

export default Profile;
