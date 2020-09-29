import React from 'react';
import { IonCardContent, IonButton, IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import "./KontroCard.css";



interface ContainerProps {
	kontro: string;
}



const KontroCard: React.FC<ContainerProps> = ({ kontro }) => {
	
	//State Hook to alter state when clicked
	const [isOpen, setIsOpen] = React.useState (false);


	return (
			<IonCard className = "kontro-layout">
				<IonCardHeader className="accordion" onClick={() => setIsOpen(!isOpen)}>
						{kontro} {isOpen? "open" : "closed"}
				</IonCardHeader>
			</IonCard>        
	);
};

export default KontroCard;
