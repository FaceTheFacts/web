import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile/PoliticianProfile';
import { Politician } from '../Types';
import ProfileComponent from '../components/Profile/Profile';
import { useQuery } from 'react-query';
import fetch from '../functions/queries';

interface ProfileProps {
	candidate: Politician;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC<ProfileProps> = ({ candidate }: ProfileProps) => {
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

	/* This is returned when using this component */
	return (
		<IonPage className="Profile-Mobile">
			{' '}
			{/* Page Tag */}
			{data !== undefined ? <PoliticianProfile candidate={data.data} /> : null}
			<Tabs />
			<IonContent>
				<ProfileComponent candidate={data.data} profileId={id} />
			</IonContent>
		</IonPage>
	);
};

export default Profile;
