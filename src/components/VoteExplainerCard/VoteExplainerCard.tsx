import React, { useState } from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonButton, IonIcon, IonModal, IonContent } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
interface ContainerProps {
	vote: string;
	children?: JSX.Element;
}

const VoteExplainerCard: React.FC<ContainerProps> = (props: ContainerProps) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<React.Fragment>
			<div className="vote-explainer-card">
				<IonCardSubtitle>Wie funktioniert die {props.vote}?</IonCardSubtitle>
				<IonButton
					className="forward-button"
					fill="clear"
					onClick={(): void => setShowModal(!showModal)}
				>
					<IonIcon slot="icon-only" icon={chevronForward} />
				</IonButton>
			</div>
			<IonContent>
				<IonModal
					isOpen={showModal}
					swipeToClose={true}
					onDidDismiss={(): void => setShowModal(false)}
					cssClass= 'explainer-modal'

				>
				<div className="explainer-modalcard-container">
					{props.children}
				</div>
				</IonModal>
			</IonContent>
		</React.Fragment>
	);
};

export default VoteExplainerCard;
