import React from "react";
import {
	IonCardContent,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
} from "@ionic/react";

import "./KontroArticle.css";
interface ContainerProps {
	article: {
		image: string;
		url: string;
		label: string;
		publisher: string;
	};
}

const KontroArticle: React.FC<ContainerProps> = ({ article }) => {
	//State Hook to alter state when clicked
	//const [isOpen, setIsOpen] = React.useState(false);
	const publisher_logo = `../assets/image/${article.publisher}.png`;
	return (
		<IonCard className="article-card" href={article.url}>
			<img className="publisher-image" src={publisher_logo}></img>
			<img className="article-image" src={article.image}></img>
			<IonCardHeader className="article-header">
				<IonCardSubtitle className="article-label">
					{article.label}
				</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default KontroArticle;
