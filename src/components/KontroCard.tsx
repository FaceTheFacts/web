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
import { imag } from "@tensorflow/tfjs-core";
import { Controversy } from '../Types';

interface Article {
	image: string;
	url: string;
	label: string;
	publisher: string;
}
interface ContainerProps {
	kontro: Controversy;
}

const KontroCard: React.FC<ContainerProps> = ({ kontro }) => {
	//State Hook to alter state when clicked
	const [isOpen, setIsOpen] = React.useState(false);

	const kontroClassName = `kontro-layout ${
		isOpen ? "kontro-open" : "kontro-closed"
	}`;
	return (
		<IonCard className={kontroClassName}>
			<IonCardHeader
				className="accordion kontro-card-header"
				onClick={() => setIsOpen(!isOpen)}
			>
				<IonCardTitle className="kontro-title">
					{kontro.label}
				</IonCardTitle>

				{
					<img
						className="kontro-expand-icon"
						src={
							isOpen
								? "../assets/icon/ausgeklappt.png"
								: "../assets/icon/eingeklappt.png"
						}
					></img>
				}
			</IonCardHeader>
			<IonCardContent className="kontro-card-content">
				<div className="article-row">
					{kontro.articles.map((article, index) => {
						const key = `${kontro.label}-${index}`;
						return (
							<KontroArticle
								article={article}
								key={key}
							></KontroArticle>
						);
					})}
				</div>
			</IonCardContent>
		</IonCard>
	);
};

export default KontroCard;
