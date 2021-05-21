import React, { useState } from 'react';
import './VoteExplainerCard.css';
import { IonCardSubtitle, IonButton, IonIcon } from '@ionic/react';
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
			{showModal ? (
				<button className="explainer-modal" onClick={(): void => setShowModal(!showModal)}>
					<div className="explainer-modalcard-container">{props.children}</div>
				</button>
			) : undefined}
		</React.Fragment>
	);
};

export default VoteExplainerCard;
