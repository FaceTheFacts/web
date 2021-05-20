import React, { useState } from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonBackButton, IonButton, IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
interface ContainerProps {
	vote: string;
}
// eslint-disable-next-line
const VoteExplainerCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className="vote-explainer-card">
			<IonCardSubtitle>Wie funktioniert die {vote}?</IonCardSubtitle>
			<IonButton className="forward-button" fill = "clear" onClick={(): void=>setShowModal(!showModal)}>
				<IonIcon slot="icon-only" icon={chevronForward} />
			</IonButton>
		</div>
	);
};

export default VoteExplainerCard;
