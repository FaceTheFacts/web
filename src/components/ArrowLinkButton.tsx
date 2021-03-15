import { IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import './ArrowLinkButton.css';

interface ArrowLinkButtonProps {
	linkTo: string;
}

const ArrowLinkButton: React.FC<ArrowLinkButtonProps> = ({ linkTo }: ArrowLinkButtonProps) => (
	<Link to={linkTo}>
		<IonButton className = "ArrowLinkButton" size="small">
			<IonIcon slot="icon-only" icon={arrowForwardOutline} />
		</IonButton>
	</Link>
);

export default ArrowLinkButton;
