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
		<IonCard className="neben-layout">
			<IonCardHeader className="neben-position">
				<IonCardTitle className="neben-major" data-testid="profile-sidejob-organisation">
					{sideJob.position}
				</IonCardTitle>
				<IonCardTitle className="neben-minor" data-testid="profile-sidejob-position">
					{sideJob.organisation}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default SideJobCard;
