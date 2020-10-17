import React from 'react';
import { IonCard, IonContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import "./NebenCard.css";

import {SideJob} from '../Types'

interface sideJobCardProps {
	sideJob: SideJob
}

const SideJobCard: React.FC<sideJobCardProps> = ({sideJob}) => {
	
	
	return (
	
			<IonCard className = "neben-layout">
				<IonCardHeader>
					<IonCardTitle className="neben-minor" data-testid="profile-sidejob-position">{sideJob.position}</IonCardTitle>
					<IonCardTitle className="neben-major" data-testid="profile-sidejob-organisation">{sideJob.organisation}</IonCardTitle>
				</IonCardHeader>
			</IonCard>

        
	);
};

export default SideJobCard;
