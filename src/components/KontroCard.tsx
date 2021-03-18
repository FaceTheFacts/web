import React from 'react';
import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import KontroArticle from './KontroArticle';
import './KontroCard.css';
import { Controversy } from '../Types';
import '../index.css';

interface Article {
	image: string;
	url: string;
	label: string;
	publisher: string;
}
interface ContainerProps {
	kontro: Controversy;
}

const KontroCard: React.FC<ContainerProps> = ({ kontro }: ContainerProps) => {
	//State Hook to alter state when clicked
	const [isOpen, setIsOpen] = React.useState(false);

	const kontroClassName = `kontro-layout ${isOpen ? 'kontro-open' : 'kontro-closed'}`;
	return (
		<IonCard className={kontroClassName}>
			<IonCardHeader
				className="accordion kontro-card-header"
				onClick={(): void => setIsOpen(!isOpen)}
			>
				<div className="kontro-title-container">
					<IonCardTitle className="kontro-title">{kontro.label}</IonCardTitle>
					<IonIcon
						className="kontro-title"
						icon={isOpen ? chevronUpOutline : chevronDownOutline}
					/>
				</div>
			</IonCardHeader>
			<IonCardContent className="kontro-card-content">
				<div className="article-row">
					{kontro.articles.map((article, index) => {
						const key = `${kontro.label}-${index}`;
						return <KontroArticle article={article} key={key}></KontroArticle>;
					})}
				</div>
			</IonCardContent>
		</IonCard>
	);
};

export default KontroCard;
