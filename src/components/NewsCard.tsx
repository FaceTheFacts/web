import React, { useState } from 'react';
import { NewsInput } from '../Types';
import {
	IonCardContent,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonHeader,
} from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

interface NewsCardProps {
	newsData: NewsInput;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsData }: NewsCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<React.Fragment>
			<IonCard>
				<IonHeader onClick={(): void => setIsOpen(!isOpen)}>
					<IonCardTitle className="news-card-title">{newsData.newsTitle}</IonCardTitle>
					<IonIcon
						className="news-card-icon"
						icon={isOpen ? chevronUpOutline : chevronDownOutline}
					/>
				</IonHeader>
			</IonCard>
		</React.Fragment>
	);
};

export default NewsCard;
