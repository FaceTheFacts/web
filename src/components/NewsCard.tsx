import React, {useState} from 'react';

import {
	IonCardContent,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonHeader,
} from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

type NewsInput = {
	newsTitle: string;
	articles: Array<string>;
};
interface NewsCardProps {
	news: Array<NewsInput>;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }: NewsCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<React.Fragment>
			{news.map((newsItem, index) => {
				const key = `${newsItem.newsTitle}-${index}`;
				return (
					<IonCard key={key}>
						<IonHeader>
							<IonCardTitle className="news-card-title">
								{newsItem.newsTitle}
							</IonCardTitle>
							<IonIcon
								className="news-card-icon"
								icon={isOpen ? chevronUpOutline : chevronDownOutline}
							/>
						</IonHeader>
					</IonCard>
				);
			})}
		</React.Fragment>

	);
};

export default NewsCard;
