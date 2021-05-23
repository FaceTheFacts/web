import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import Positioning from '../Positioning/Positioning';

import './PositionCard.css';
import { chevronForwardOutline } from 'ionicons/icons';

interface PostionCardProps {
	candidateId: number;
	title: string;
	answer: string;
}

const PositionCard: React.FC<PostionCardProps> = ({ title, answer }: PostionCardProps) => {
	return (
		<IonCard className="position-card">
			<IonCardHeader className="position-card-header">
				<div className="position-card-container">
					<div className="position-card-title">
						<IonCardTitle
							className="position-card-title"
							data-testid="position-card-title"
						>
							{title}
						</IonCardTitle>
					</div>
					<div className="position-card-sub-content">
						<div className="position-positioning">
							<Positioning positioning={answer} />
						</div>
						<IonIcon slot="icon-only" icon={chevronForwardOutline} />
					</div>
				</div>
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
