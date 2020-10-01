import React from "react";
import {
	IonCardContent,
	IonCard,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";

interface ContainerProps {
	article: {
		image: string;
		url: string;
		label: string;
	};
}

const KontroArticle: React.FC<ContainerProps> = ({ article }) => {
	//State Hook to alter state when clicked
	//const [isOpen, setIsOpen] = React.useState(false);

	return (
		<IonCard>
			{article.label}
			{article.url}
		</IonCard>
	);
};

export default KontroArticle;
