import { IonButton, IonIcon, IonToolbar } from '@ionic/react';
import React from 'react';
import { closeCircle } from 'ionicons/icons';
import './VoteDetailsToolbar.css';

interface VoteDetailsToolbarProps {
	clicked: Function;
}

const VoteDetailsToolbar: React.FC<VoteDetailsToolbarProps> = (props: VoteDetailsToolbarProps) => (
	<IonToolbar className="details-toolbar-container">
		<div data-testid="votes-details-toolbar-title">Gesetzesentwurf</div>
		<IonButton
			className="details-toolbar-button"
			onClick={(): void => props.clicked()}
			slot="end"
			fill="clear"
		>
			<IonIcon slot="icon-only" icon={closeCircle} />
		</IonButton>
	</IonToolbar>
);

export default VoteDetailsToolbar;
