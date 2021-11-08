import React from 'react';
import { Steps } from '../../Types';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './CVComponentCard.css';

interface CVComponentProps {
	step: Steps;
}

const CVComponentCard: React.FC<CVComponentProps> = ({ step }: CVComponentProps) => {
	return (
		<IonCard className="cv-card">
			<IonCardHeader className="cv-container">
				<IonCardTitle className="cv-date" data-testid="profile-sidejob-organisation">
					{step.Date}
				</IonCardTitle>
				<IonCardTitle className="cv-text" data-testid="profile-sidejob-position">
					{step.Label}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};
export default CVComponentCard;
