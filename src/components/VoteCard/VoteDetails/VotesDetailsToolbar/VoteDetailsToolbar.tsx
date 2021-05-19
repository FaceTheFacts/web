import { IonButton, IonIcon } from '@ionic/react';
import React from 'react';

import CrossImage from '../../../../assets/images/cross.svg';
import './VoteDetailsToolbar.css';

interface VoteDetailsToolbarProps {
	clicked: Function;
}

const VoteDetailsToolbar: React.FC<VoteDetailsToolbarProps> = (props: VoteDetailsToolbarProps) => (
	<div className="details-toolbar-container">
		<div data-testid="votes-details-toolbar-title">Gesetzesentwurf</div>
		<IonButton onClick={(): void => props.clicked()} fill="clear">
			<IonIcon slot="icon-only" icon={CrossImage} />
		</IonButton>
	</div>
);

export default VoteDetailsToolbar;
