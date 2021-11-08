import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

import './PopupCard.css';

interface PopupCardProps {
	title: string;
	children?: JSX.Element;
	bottomContent?: Array<string> | undefined;
}
const PopupCard: React.FC<PopupCardProps> = (props: PopupCardProps) => (
	<IonCard className="PopupCard">
		<IonCardHeader className="popup-header">
			<IonCardTitle className="popup-title">{props.title}</IonCardTitle>
		</IonCardHeader>
		<div className="popup-border"></div>
		<IonCardContent className="popup-content">{props.children}</IonCardContent>
		<div className="popup-border"></div>
		<IonCardContent className="popup-content">
			{props.bottomContent?.map((sentence, index) => (
				<div className="bottom-sentence" key={`bottom-sentence-${index}`}>
					{sentence}
				</div>
			))}
		</IonCardContent>
	</IonCard>
);

export default PopupCard;
