import React from 'react';
import { IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./NebenCard.css";



interface ContainerProps {
	title: string;
	subtitle: string;
}


const NebenCard: React.FC<ContainerProps> = ({ title, subtitle }) => {
	
	return (
	
			<IonCard className = "neben-layout">
				<IonCardHeader>
					<IonCardTitle className="neben-minor">{subtitle}</IonCardTitle>
					<IonCardTitle className="neben-major">{title}</IonCardTitle>
				</IonCardHeader>
			</IonCard>

        
	);
};

export default NebenCard;
