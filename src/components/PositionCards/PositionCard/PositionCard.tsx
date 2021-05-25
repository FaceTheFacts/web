import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonIcon, IonModal } from '@ionic/react';
import Positioning from '../Positioning/Positioning';

import './PositionCard.css';
import { chevronForwardOutline } from 'ionicons/icons';
import PositionPopup from '../../PopupCard/PositionPopup/PositionPopup';

interface PostionCardProps {
	candidateId: number;
	title: string;
	answer: string;
	reason: string;
}

const PositionCard: React.FC<PostionCardProps> = (props: PostionCardProps) => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<React.Fragment>
			<IonCard className="position-card" onClick={(): void => setShowModal(!showModal)}>
				<IonCardHeader className="position-card-header">
					<div className="position-card-container">
						<div className="position-card-title">
							<IonCardTitle
								className="position-card-title"
								data-testid="position-card-title"
							>
								{props.title}
							</IonCardTitle>
						</div>
						<div className="position-card-sub-content">
							<div className="position-positioning">
								<Positioning positioning={props.answer} />
							</div>
							<IonIcon slot="icon-only" icon={chevronForwardOutline} />
						</div>
					</div>
				</IonCardHeader>
				<IonContent>
					<IonModal
						isOpen={showModal}
						swipeToClose={true}
						onDidDismiss={(): void => setShowModal(false)}
						cssClass="explainer-modal"
					>
						<div className="position-card-popup">
							<PositionPopup
								title={props.title}
								positioning={props.answer}
								reason={props.reason}
							/>
						</div>
					</IonModal>
				</IonContent>
			</IonCard>
		</React.Fragment>
	);
};

export default PositionCard;
