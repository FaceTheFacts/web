import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SideJobCard.css';
import '../index.css';
import { SideJob } from '../Types';

interface SideJobCardProps {
	sideJob: SideJob;
}

const SideJobCard: React.FC<SideJobCardProps> = ({ sideJob }: SideJobCardProps) => {
	return (
		<IonCard className="sideJob-layout">
			<IonCardHeader className="sideJob-position">
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{sideJob.label}
				</IonCardTitle>
				<IonCardTitle className="sideJob-minor" data-testid="profile-sidejob-organisation">
					{sideJob.organisation}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default SideJobCard;
