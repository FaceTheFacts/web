import React from 'react';
import { IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./NebenCard.css";



interface ContainerProps {
	neben: any;
}


const NebenCard: React.FC<ContainerProps> = ({ neben }) => {
	
	
	return (
	
			<IonCard className = "neben-layout">
				<IonCardHeader>
					<IonCardTitle className="neben-minor">{neben.subtitle}</IonCardTitle>
					<IonCardTitle className="neben-major">{neben.title}</IonCardTitle>
				</IonCardHeader>
			</IonCard>

        
	);
};

export default NebenCard;
