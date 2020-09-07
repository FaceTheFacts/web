import React from "react";
import VoteChart from "./VoteChart";
import "./VoteCard.css";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
	ViewStacks,
	IonGrid,
	IonCol,
	IonRow,
} from "@ionic/react";

interface ContainerProps {
	vote: any;
}

const VoteCard: React.FC<ContainerProps> = ({ vote }) => {

	const candidateVoteClassName = `candidate-vote vote-${vote.candidateVote.toLowerCase()}`;
	
	return (
		<IonCard>
			<IonCardHeader>
				<IonGrid>
					<IonRow>
						<IonCol size="8">
							<IonCardSubtitle>{vote.subtitle}</IonCardSubtitle>
							<IonCardTitle>{vote.title}</IonCardTitle>
						</IonCol>
						<IonCol size="4">
							<div className={candidateVoteClassName}>
								{vote.candidateVote}
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardHeader>

			<IonCardContent className="vote-card-content">
				<IonGrid>
					<IonRow>
						<IonCol size="12">
							<div className="vote-chart-container">
								<VoteChart vote={vote} />
							</div>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="1"></IonCol>
						<IonCol size="2">
							<div className="vote-legend-circle vote-yes"></div>
							<span className="vote-legend-text">Yes</span>
						</IonCol>
						<IonCol size="2">
							<div className="vote-legend-circle vote-no"></div>
							<span className="vote-legend-text">No</span>
						</IonCol>
						<IonCol size="3">
							<div className="vote-legend-circle vote-abstain"></div>
							<span className="vote-legend-text">Abstain</span>
						</IonCol>
						<IonCol size="4">
							<div className="vote-legend-circle vote-none"></div>
							<span className="vote-legend-text">Nicht Abg.</span>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardContent>
		</IonCard>
	);
};

export default VoteCard;
