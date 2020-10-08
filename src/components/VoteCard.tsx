import React, { useState } from "react";
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
	IonModal,
	IonButton,
	IonContent,
	IonBackdrop,
	IonChip,
	IonText,
} from "@ionic/react";



interface ContainerProps {
	vote: any;
}

const VoteCard: React.FC<ContainerProps> = ({ vote }) => {
	

	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	/* 
	Dynamically create the className for the candidate's vote, so we have all the colours.
	In VoteCard.css these correspond to vote-yes, vote-no, vote-abstain, and vote-none
	*/
	const candidateVoteClassName = `candidate-vote vote-${vote.candidateVote.toLowerCase()}`;
	const reasonVoteClassName = `reason-vote vote-${vote.candidateVote.toLowerCase()}`;
	const totalvotes= `${vote.result.yes + vote.result.no + vote.result.abstain + vote.result.none}`
	return (
		<div className="grey-background">
			<IonCard className="vote-card" onClick={() => setShowDetails(!showDetails)}>
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
									Nicht abg.
								</span>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>

			{/*Vote Detail Modal*/}
			
				<IonContent>
					<IonModal isOpen={showDetails} cssClass="details-open" backdropDismiss={true} swipeToClose={true}>
						<div className="title-div">
							<IonCardSubtitle className="subtitle-styling">{vote.subtitle}</IonCardSubtitle>
							<IonCardTitle className="title-styling">{vote.title}</IonCardTitle>	
							<IonChip className="chip-styling">{vote.chip}</IonChip>
						</div>

						<div className="abstract-div">
							<p className="abstract-title">Abstrakt:</p>
							<p className="abstract-text">{vote.abstract}</p>
						</div>

						<div>
							<IonButton className= "abstract-button">zum Gesetz</IonButton>
						</div>

						<hr className="first-line-style"></hr>

						<div className="reason-div">
							<IonGrid fixed={true}>
								<IonRow>
									<IonCol className={reasonVoteClassName}>
										<div>
											{vote.candidateVote}
										</div>
									</IonCol>
									<IonCol className="reason-reason">
										<div>
											<p className="reason-title">Begründung des Abgeordneten:</p>
											<p className="reason-text">{vote.reason}</p>
										</div>
									</IonCol>
								</IonRow>
							</IonGrid>
						</div>
						
						<hr className="second-line-style"></hr>

						<div className="result-div">
							<IonGrid>
								<IonRow>
									<IonCol size="12">
										<IonText>
											<span className="result-vote-title">Abstimmungsergebnis</span> 
											<span className="result-vote-members"> {totalvotes} Mitglieder</span> 
										</IonText>
									</IonCol>
								</IonRow>
							</IonGrid>


							{/* We also use a grid here to more easily arrange the indivdual components. */}
							<IonGrid>
								{/* Vote Result Chart */}
								<IonRow className="result-row-spacing">
									<IonCol size="12">
										<div className="result-chart-container">
											{/* Render a VoteChart component for the vote result */}
											<VoteChart vote={vote} />
										</div>
									</IonCol>
								</IonRow>

								{/* Vote Result Legend */}
								<IonRow>
									<IonCol size="auto"></IonCol>
									<IonCol size="auto">
										<div className="result-legend-circle vote-ja"></div>
										<span className="result-legend-text">Ja: {vote.result.yes}</span>
									</IonCol>
									<IonCol size="auto">
										<div className="result-legend-circle vote-nein"></div>
										<span className="result-legend-text">Nein: {vote.result.no}</span>
									</IonCol>
									<IonCol size="auto">
										<div className="result-legend-circle vote-abstain"></div>
										<span className="result-legend-text">
											Enthalten: {vote.result.abstain}
										</span>
									</IonCol>
									<IonCol size="auto">
										<div className="result-legend-circle vote-none"></div>
										<span className="result-legend-text">
											Nicht abg.: {vote.result.none}
										</span>
									</IonCol>
								</IonRow>
							</IonGrid>
						</div>

						<div className="round-chart-div">
							<IonCard className="round-chart-card">
								<IonCardHeader>
									<IonGrid>

									</IonGrid>
								</IonCardHeader>
							</IonCard>
						</div>
					</IonModal>	
				</IonContent>			
		</div>
	
	);
};

export default VoteCard;