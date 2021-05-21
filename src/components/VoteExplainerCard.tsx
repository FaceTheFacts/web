import React, { useState } from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonButton, IonIcon, IonContent, IonModal, IonPopover, IonBackdrop} from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import FirstVotePopup from './PopupCard/FirstVotePopup/FirstVotePopup';
interface ContainerProps {
	vote: string;
}
// eslint-disable-next-line
const VoteExplainerCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<React.Fragment>
			<div className="vote-explainer-card">
				<IonCardSubtitle>Wie funktioniert die {vote}?</IonCardSubtitle>
				<IonButton className="forward-button" fill = "clear" onClick={(): void=>setShowModal(!showModal)}>
					<IonIcon slot="icon-only" icon={chevronForward} />
				</IonButton>
			</div>
			{showModal ?
			<button className='explainer-modal' onClick={(): void=>setShowModal(!showModal)}>
				<div className='explainer-modalcard-container'>
					<FirstVotePopup/>
				</div>
			</button> 	
			: undefined}
		</React.Fragment>
	);
};

export default VoteExplainerCard;
