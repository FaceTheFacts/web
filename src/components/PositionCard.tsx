import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import Positioning from './Positioning';

interface PostionCardProps {
	title: string;
	answer: string;
}

const PositionCard: React.FC<PostionCardProps> = ({ title, answer }: PostionCardProps) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle data-testid="position-card-title">{title}</IonCardTitle>
				<Positioning positioning={answer} />
			</IonCardHeader>
		</IonCard>
	);
};

export default PositionCard;
