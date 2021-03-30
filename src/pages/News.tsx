import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
//
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
// import NewsComponent from '../components/News';
import { amthor } from '../amthor';
import { Candidate } from '../Types';
import KontroCard from '../components/KontroCard';
interface ProfileProps {
	candidate: Candidate;
}

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const News: React.FC<ProfileProps> = ({ candidate }: ProfileProps) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	// const { id } = useParams<{ id: string }>();

	/* This is returned when using this component */
	return (
		<IonPage>
			{' '}
			{/* Page Tag */}
			<PoliticianProfile candidate={amthor} />
			<Tabs />
			<IonContent>
				{/* <NewsComponent candidate={candidate} news={amotherNews} /> */}
				{candidate.controversies.map((kontro, index) => {
					return <KontroCard kontro={kontro} key={index} />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default News;
