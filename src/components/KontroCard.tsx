import React from "react";
import {
	IonCardContent,
	IonButton,
	IonCard,
	IonContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";

import KontroArticle from "./KontroArticle";
import "./KontroCard.css";

interface Article {
	image: string;
	url: string;
	label: string;
}
interface ContainerProps {
	kontro: {
		label: string;
		articles: Array<Article>;
	};
}

const KontroCard: React.FC<ContainerProps> = ({ kontro }) => {
	//State Hook to alter state when clicked
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<IonCard className="kontro-layout">
			<IonCardHeader
				className="accordion"
				onClick={() => setIsOpen(!isOpen)}
			>
				{kontro.label} {isOpen ? "open" : "closed"}
			</IonCardHeader>
			{kontro.articles.map((article, index) => {
				return <KontroArticle article={article}></KontroArticle>;
			})}
		</IonCard>
	);
};

export default KontroCard;
