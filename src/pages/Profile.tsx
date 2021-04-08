import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
<<<<<<< HEAD
import { Candidate } from '../Types';
import ProfileComponent from '../components/Profile/Profile';
=======
import { Candidate, Politician } from '../Types';
import ProfileComponent from '../components/Profile';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

>>>>>>> Fetch Data for PoliticianProfile with ReactQuery and Axios
interface ProfileProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC<ProfileProps> = ({ candidate }: ProfileProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const data = useQuery('politicianProfile', () => axios(`https://www.abgeordnetenwatch.de/api/v2/politicians/${id}?related_data=show_information`))
	const { id } = useParams<{ id: string }>();
	const politicianProfileData: AxiosResponse<any> | undefined = data.data

	/* This is returned when using this component */
	return (
		<IonPage className="Profile-Mobile">
			{' '}
			{/* Page Tag */}
			{politicianProfileData !== undefined ? <PoliticianProfile candidate={politicianProfileData.data.data} /> : null}
			<Tabs />
			<IonContent>
				<ProfileComponent candidate={candidate} profileId={id} />
			</IonContent>
		</IonPage>
	);
};

export default Profile;
