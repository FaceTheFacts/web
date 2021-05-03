import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SideJobCard.css';
import '../index.css';
import { SideJobData } from '../Types';

interface SideJobCardProps {
	sideJob: SideJobData;
}

const SideJobCard: React.FC<SideJobCardProps> = ({ sideJob }: SideJobCardProps) => {
	return (
		<IonCard className="sideJob-layout">
			<IonCardHeader>
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{sideJob.label}
				</IonCardTitle>
				<IonCardTitle className="sideJob-minor" data-testid="profile-sidejob-organisation">
					{sideJob.sidejob_organization.label}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default SideJobCard;
