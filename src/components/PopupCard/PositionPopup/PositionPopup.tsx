import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import Positioning from '../../PositionCards/Positioning/Positioning';

import './PositionPopup.css';

interface PositionPopupProps {
	title: string;
	positioning: string | undefined;
	reason: string;
}
const PositionPopup: React.FC<PositionPopupProps> = (props: PositionPopupProps) => (
	<IonCard className="PopupCard">
		<IonCardHeader className="popup-header">
			<IonCardTitle className="popup-title">{props.title}</IonCardTitle>
		</IonCardHeader>
		<div className="popup-border"></div>
		<div className="position-popup-positioning">
			<Positioning positioning={props.positioning} />
		</div>
		<IonCardContent className="popup-content">
			<div className="position-popup-bottom">{props.reason}</div>
		</IonCardContent>
	</IonCard>
);

export default PositionPopup;
