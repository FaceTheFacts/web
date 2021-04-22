import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
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
				<IonGrid>
					<IonRow>
						<IonCol size="8">
							<IonCardTitle data-testid="position-card-title">{title}</IonCardTitle>
						</IonCol>
						<IonCol size="4">
							<Positioning positioning={answer} />
							<LinkButton
								linkTo={`/politician/${candidateId}/position`}
								icon={iconEnum.CHEVRON_FORWARD}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
