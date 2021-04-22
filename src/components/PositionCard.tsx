import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import Positioning from './Positioning';
import LinkButton from './LinkButton';
import { iconEnum } from '../enums/icon.enum';

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
		<IonCard>
			<IonCardHeader>
				<IonCardTitle data-testid="position-card-title">{title}</IonCardTitle>
				<Positioning positioning={answer} />
				<LinkButton
					linkTo={`/politician/${candidateId}/position`}
					icon={iconEnum.CHEVRON_FORWARD}
				/>
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
