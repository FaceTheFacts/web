import React from 'react';
import './CVComponent.css';
import { Steps } from '../../Types';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

interface CVComponentProps {
	step: Steps;
}

const CVComponentCard: React.FC<CVComponentProps> = ({ step }: CVComponentProps) => {
    return (
        <IonCard className="sideJob-layout">
			<IonCardHeader>
                <IonCardTitle className="sideJob-minor" data-testid="profile-sidejob-organisation">
					{step.Date}
				</IonCardTitle>
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{step.Label}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
    )
};
export default CVComponentCard;