import { IonContent, IonPage } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';
import BioCard from '../components/BioCard';

interface BioProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Bio: React.FC<BioProps> = ({ candidate }: BioProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { id } = useParams<{ id: string }>();
	const [bio, setBio] = useState('');
	const url = `https://virtserver.swaggerhub.com/Face-the-Facts/REST-API/0.0.4-1/candidates/${id}`;
	const loadData = async (): Promise<void> => {
		const response = await fetch(url);
		const data = await response.json();
		setBio(data.bio);
	};
	useEffect(() => {
		loadData();
	});

	/* This is returned when using this component */
	return (
		<IonPage>
			{' '}
			{/* Page Tag */}
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>
				<BioCard bio={bio} />
			</IonContent>
		</IonPage>
	);
};

export default Bio;
