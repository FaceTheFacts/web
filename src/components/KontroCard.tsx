import React from 'react';
import { IonCardContent, IonButton, IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import "./KontroCard.css";



interface ContainerProps {
	kontro: string;
}



const KontroCard: React.FC<ContainerProps> = ({ kontro }) => {
	
	return (
			<IonCard className = "kontro-layout">
				<IonCardHeader className="accordion">
						{kontro}
				</IonCardHeader>
			</IonCard>        
	);
};

export default KontroCard;
