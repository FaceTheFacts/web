import React from "react";
import VoteChart from "./VoteChart";
import "./VoteCard.css";
import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonGrid,
	IonCol,
	IonRow,
} from "@ionic/react";

interface ContainerProps {
	vote: any;
}

const VoteCard: React.FC<ContainerProps> = ({ vote }) => {
	/* 
	Dynamically create the className for the candidate's vote, so we have all the colours.
	In VoteCard.css these correspond to vote-yes, vote-no, vote-abstain, and vote-none
	*/
	const candidateVoteClassName = `candidate-vote vote-${vote.candidateVote.toLowerCase()}`;

	return (
		<div className="grey-background">
			<IonCard className="vote-card">
				{/* 
				Card header with Vote name, vote subtitle which holds the type of vote it was and the candidate's vote.
				It's inside a css grid so we can more easily arrange the items.
				*/}
				<IonCardHeader className="vote-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="8">
								<IonCardSubtitle className="vote-card-subtitle">
									{vote.subtitle}
								</IonCardSubtitle>
								<IonCardTitle className="vote-card-title">
									{vote.title}
								</IonCardTitle>
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
					{/* We also use a grid here to more easily arrange the indivdual components. */}
					<IonGrid>
						{/* Vote Result Chart */}
						<IonRow>
							<IonCol size="12">
								<div className="vote-chart-container">
									{/* Render a VoteChart component for the vote result */}
									<VoteChart vote={vote} />
								</div>
							</IonCol>
						</IonRow>

						{/* Vote Result Legend */}
						<IonRow>
							<IonCol size="1"></IonCol>
							<IonCol size="2">
								<div className="vote-legend-circle vote-ja"></div>
								<span className="vote-legend-text">Ja</span>
							</IonCol>
							<IonCol size="2">
								<div className="vote-legend-circle vote-nein"></div>
								<span className="vote-legend-text">Nein</span>
							</IonCol>
							<IonCol size="3">
								<div className="vote-legend-circle vote-abstain"></div>
								<span className="vote-legend-text">
									Enthalten
								</span>
							</IonCol>
							<IonCol size="4">
								<div className="vote-legend-circle vote-none"></div>
								<span className="vote-legend-text">
									Nicht Abg.
								</span>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>
		</div>
	);
};

export default VoteCard;
