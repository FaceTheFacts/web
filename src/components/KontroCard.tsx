import React from 'react';
import { IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./KontroCard.css";



interface ContainerProps {
	title: string;
}


const KontroCard: React.FC<ContainerProps> = ({ title }) => {
	
	return (
	
			<IonCard className = "kontro-layout">
				<IonCardHeader>
					<IonCardTitle className="kontro-major">{title}</IonCardTitle>
				</IonCardHeader>
			</IonCard>

        
	);
};

export default KontroCard;
