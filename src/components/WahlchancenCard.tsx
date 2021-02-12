import React from 'react';
import './VoteCard.css';
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
	IonChip,
	IonText,
	IonIcon,
	IonLabel,
} from '@ionic/react';
import { Election } from '../Types';
import '../index.css';

interface ContainerProps {
	vote: Election;
}

const WahlchancenCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	/* 
	Internationalisation to keep the code in English but print the national language
	*/

	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);


	/* 
	Dynamically create the className for the candidate's vote, so we have all the colours.
	In VoteCard.css these correspond to vote-yes, vote-no, vote-abstain, and vote-none
	*/
	const candidateElectionClassName = `candidate-vote vote-${vote.candidate.toLowerCase()}`;

	/* 
	Dynamically create the className for the candidate's reason for voting
	*/
	const partyClassName = `reason-vote vote-${vote.party.toLowerCase()}`;

	/* 
	Dynamically calculate the total number of votes
	*/
	const percentageElectionClassName = `${vote.percentage}`;

	/* 
	Let Typescript know that candidateVote will always have one of these four values. 
	The cleaner refactored version of this would be to change "vote" into it's own datatype where vote.candidateVote is 
	predefined to only have one of these four values.
	
	Absolutely need to figure out how to use this datatype, currently it is different from string which causes problems
	*/
	// const voteString = vote.candidateVote;

	return (
		<div className="grey-background">
			<IonCard className="vote-card" onClick={(): void => setShowDetails(!showDetails)}>
				{/* 
				Card header with Vote name, vote subtitle which holds the type of vote it was and the candidate's vote.
				It's inside a css grid so we can more easily arrange the items.
				*/}
				<IonCardHeader className="vote-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="8">
								<IonCardSubtitle className="vote-card-subtitle">
									{vote.party}
								</IonCardSubtitle>
								<IonCardTitle className="vote-card-title">
									{vote.candidate}
								</IonCardTitle>
							</IonCol>
							<IonCol size="4">
								<div className={candidateElectionClassName}>
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
								</div>
							</IonCol>
						</IonRow>

						{/* Vote Result Legend */}
						<IonRow>
							<IonCol size="1"></IonCol>
							<IonCol size="2">
								<div className="vote-legend-circle vote-yes"></div>
								<span className="vote-legend-text">Ja</span>
							</IonCol>
							<IonCol size="2">
								<div className="vote-legend-circle vote-no"></div>
								<span className="vote-legend-text">Nein</span>
							</IonCol>
							<IonCol size="3">
								<div className="vote-legend-circle vote-abstain"></div>
								<span className="vote-legend-text">Enthalten</span>
							</IonCol>
							<IonCol size="4">
								<div className="vote-legend-circle vote-none"></div>
								<span className="vote-legend-text">Nicht abg.</span>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>

			{/*Vote Detail Modal*/}

			<IonContent>
				<IonModal
					isOpen={showDetails}
					cssClass="details-open"
					backdropDismiss={true}
					swipeToClose={true}
				>
					<div className="title-div">
						<IonCardSubtitle className="subtitle-styling">
							{vote}
						</IonCardSubtitle>
						<IonCardTitle className="title-styling">{vote.candidate}</IonCardTitle>

						<IonChip className="chip-styling">
							

							<IonLabel>{vote.percentage}</IonLabel>
						</IonChip>
					</div>

					<div className="abstract-div">
						<p className="abstract-title">Abstrakt:</p>
						<p className="abstract-text">{vote.party}</p>
					</div>

					<div>
						<IonButton fill="clear" className="abstract-button">
							zum Gesetz
						</IonButton>
					</div>

					<hr className="first-line-style"></hr>

					<div className="reason-div">
						<IonGrid fixed={true}>
							<IonRow>
								<IonCol className={partyClassName}>
								</IonCol>
								<IonCol className="reason-reason">
									<div>
										<p className="reason-title">Begründung des Abgeordneten:</p>
										
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
										<span className="result-vote-title">
											Abstimmungsergebnis
										</span>
										<span className="result-vote-members">
										XoXo
											
										</span>
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
										
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</div>		
				

				</IonModal>
			</IonContent>
		</div>
	);
};

export default WahlchancenCard;
