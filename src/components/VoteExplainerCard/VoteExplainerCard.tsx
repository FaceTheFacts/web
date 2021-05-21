import React, { useState } from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonIcon, IonModal, IonContent } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
interface ContainerProps {
	vote: string;
	children?: JSX.Element;
}

const VoteExplainerCard: React.FC<ContainerProps> = (props: ContainerProps) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<React.Fragment>
			<span
				role="button"
				tabIndex={0}
				className="vote-explainer-card"
				onClick={(): void => setShowModal(!showModal)}
				onKeyDown={(): void => setShowModal(!showModal)}
			>
				<IonCardSubtitle>Wie funktioniert die {props.vote}?</IonCardSubtitle>
				<IonIcon className="forward-button" slot="icon-only" icon={chevronForward} />
			</span>
			<IonContent>
				<IonModal
					isOpen={showModal}
					swipeToClose={true}
					onDidDismiss={(): void => setShowModal(false)}
					cssClass="explainer-modal"
				>
					<span
						role="button"
						tabIndex={0}
						className="explainer-modalcard-container"
						onClick={(): void => setShowModal(!showModal)}
						onKeyDown={(): void => setShowModal(!showModal)}
					>
						{props.children}
					</span>
				</IonModal>
			</IonContent>
		</React.Fragment>
	);
};

export default VoteExplainerCard;
