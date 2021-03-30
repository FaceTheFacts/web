import React, { useState } from 'react';
import { NewsInput } from '../Types';
import './NewsCard.css';
import {
	// IonCardContent,
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
	const NewsCardClassName = `newscard-layout ${isOpen ? 'news-open' : 'news-closed'}`;
	return (
		<React.Fragment>
			<IonCard className={NewsCardClassName}>
				<IonCardHeader
					className="accordion news-card-header"
					onClick={(): void => setIsOpen(!isOpen)}
				>
					<IonHeader onClick={(): void => setIsOpen(!isOpen)}>
						<div className="news-title-container">
							<IonCardTitle className="news-card-title">
								{newsData.newsTitle}
							</IonCardTitle>
							<IonIcon
								className="news-card-icon"
								icon={isOpen ? chevronUpOutline : chevronDownOutline}
							/>
						</div>
					</IonHeader>
				</IonCardHeader>
			</IonCard>
		</React.Fragment>
	);
};

export default NewsCard;
