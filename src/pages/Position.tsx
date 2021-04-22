import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Page.css';
import Tabs from '../components/Tabs';
import PoliticianProfile from '../components/PoliticianProfile';
import { Candidate } from '../Types';

interface PositionProps {
	candidate: Candidate;
}

const Position: React.FC<PositionProps> = ({ candidate }: PositionProps) => {
	return (
		<IonPage>
			<PoliticianProfile candidate={candidate} />
			<Tabs />
			<IonContent>{/* Here is for postion component */}</IonContent>
		</IonPage>
	);
};

export default Position;
