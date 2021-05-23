import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import ProfileComponent from '../components/Profile/Profile';
interface ProfileProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC<ProfileProps> = ({ candidate }: ProfileProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();

	/* This is returned when using this component */
	return (
		<IonPage className="Profile-Mobile">
			{' '}
			{/* Page Tag */}
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>
				<ProfileComponent candidate={candidate} profileId={id} />
			</IonContent>
		</IonPage>
	);
};

export default Profile;
