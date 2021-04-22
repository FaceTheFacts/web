import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import Positioning from './Positioning';
import LinkButton from './LinkButton';
import { iconEnum } from '../enums/icon.enum';

import './PositionCard.css';

interface PostionCardProps {
	candidateId: number;
	title: string;
	answer: string;
}

const PositionCard: React.FC<PostionCardProps> = ({
	candidateId,
	title,
	answer,
}: PostionCardProps) => {
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
						<div>
							<Positioning positioning={answer} />
						</div>
						<div className="position-card-button">
							<LinkButton
								linkTo={`/politician/${candidateId}/position`}
								icon={iconEnum.CHEVRON_FORWARD}
							/>
						</div>
					</div>
				</div>
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
