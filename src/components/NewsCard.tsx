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
	key: string;
	newsData: NewsInput;
}

const NewsCard: React.FC<NewsCardProps> = ({ key, newsData }: NewsCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<React.Fragment>
			<IonCard key={key}>
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
