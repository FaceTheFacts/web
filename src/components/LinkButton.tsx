import { IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import './LinkButton.css';

interface LinkButtonProps {
	linkTo: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ linkTo }: LinkButtonProps) => (
	<Link to={linkTo}>
		<IonButton className="LinkButton" size="small">
			<IonIcon slot="icon-only" icon={arrowForwardOutline} />
		</IonButton>
	</Link>
);

export default LinkButton;
