import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

interface PostionCardProps {
	title: string;
}

const PositionCard: React.FC<PostionCardProps> = ({ title }: PostionCardProps) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle data-testid="position-card-title">{title}</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
