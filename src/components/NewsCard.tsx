import React from 'react';

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
						</IonHeader>
					</IonCard>
				);
			})}
		</React.Fragment>

		// <IonCard>
		// 	<IonCardHeader>
		// 		<div>
		// 			<IonCardTitle>{news.title}</IonCardTitle>
		// 			<IonIcon
		// 				className="kontro-title"
		// 				icon={isOpen ? chevronUpOutline : chevronDownOutline}
		// 			/>
		// 		</div>
		// 	</IonCardHeader>
		// 	<IonCardContent className="kontro-card-content">
		// 		<div className="article-row">
		// 			{kontro.articles.map((article, index) => {
		// 				const key = `${kontro.label}-${index}`;
		// 				return <KontroArticle article={article} key={key}></KontroArticle>;
		// 			})}
		// 		</div>
		// 	</IonCardContent>
		// </IonCard>
	);
};

export default NewsCard;
