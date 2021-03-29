import React from 'react';
import { IonCard } from '@ionic/react';
import './BioCard.css';

interface BioCardProps {
	bio: string;
}

const BioCard: React.FC<BioCardProps> = ({ bio }: BioCardProps) => {
	return (
		<IonCard >
			${bio}
		</IonCard>
	);
};

export default BioCard;
