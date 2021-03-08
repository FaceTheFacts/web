import React from 'react';
import PartyVoteChart from './PartyVoteChart';
import VoteChart from './VoteChart';
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
import { Poll } from '../Types';
import '../index.css';

interface ContainerProps {
	vote: Poll;
}

const VoteCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	/* 
	Internationalisation to keep the code in English but print the national language
	*/

	const voteStrings = {
		yes: 'Ja',
		no: 'Nein',
		abstain: 'Enthalten',
		none: 'Nicht Abg.',
	};

	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	/* 
	Dynamically create the className for the candidate's vote, so we have all the colours.
	In VoteCard.css these correspond to vote-yes, vote-no, vote-abstain, and vote-none
	*/
	const candidateVoteClassName = `candidate-vote vote-${vote.candidateVote.toLowerCase()}`;

	/* 
	Dynamically create the className for the candidate's reason for voting
	*/
	const reasonVoteClassName = `reason-vote vote-${vote.candidateVote.toLowerCase()}`;

	/* 
	Dynamically calculate the total number of votes
	*/
	const totalvotes = `${
		vote.result.total.yes +
		vote.result.total.no +
		vote.result.total.abstain +
		vote.result.total.none
	}`;

	/* 
	Let Typescript know that candidateVote will always have one of these four values. 
	The cleaner refactored version of this would be to change "vote" into it's own datatype where vote.candidateVote is 
	predefined to only have one of these four values.
	
	Absolutely need to figure out how to use this datatype, currently it is different from string which causes problems
	*/
	// const voteString = vote.candidateVote;
	const voteString = vote.candidateVote;

	return (
		<div>
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
									{vote.subtitle}
								</IonCardSubtitle>
								<IonCardTitle className="vote-card-title">
									{vote.title}
								</IonCardTitle>
								{/* Vote Result will show here e.g., Antrag abgelehnt */}
							</IonCol>
							<IonCol size="4">
								<div className={candidateVoteClassName}>
									{voteStrings[voteString]}
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
							{vote.subtitle}
						</IonCardSubtitle>
						<IonCardTitle className="title-styling">{vote.title}</IonCardTitle>

						<IonChip className="chip-styling">
							<IonIcon icon={vote.chip.icon} />

							<IonLabel>{vote.chip.name}</IonLabel>
						</IonChip>
					</div>

					<div className="abstract-div">
						<p className="abstract-title">Abstrakt:</p>
						<p className="abstract-text">{vote.abstract}</p>
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
								<IonCol className={reasonVoteClassName}>
									<div className="reason-vote-text">
										{voteStrings[voteString]}
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
										<span className="result-vote-title">
											Abstimmungsergebnis
										</span>
										<span className="result-vote-members">
											{' '}
											{totalvotes} Mitglieder
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
										<VoteChart vote={vote} />
									</div>
								</IonCol>
							</IonRow>

							{/* Vote Result Legend */}
							<IonRow>
								<IonCol size="auto"></IonCol>
								<IonCol size="auto">
									<div className="result-legend-circle vote-yes"></div>
									<span className="result-legend-text">
										Ja: {vote.result.total.yes}
									</span>
								</IonCol>
								<IonCol size="auto">
									<div className="result-legend-circle vote-no"></div>
									<span className="result-legend-text">
										Nein: {vote.result.total.no}
									</span>
								</IonCol>
								<IonCol size="auto">
									<div className="result-legend-circle vote-abstain"></div>
									<span className="result-legend-text">
										Enthalten: {vote.result.total.abstain}
									</span>
								</IonCol>
								<IonCol size="auto">
									<div className="result-legend-circle vote-none"></div>
									<span className="result-legend-text">
										Nicht abg.: {vote.result.total.none}
									</span>
								</IonCol>
							</IonRow>
						</IonGrid>
					</div>

					<div className="round-chart-div">
						<IonCard className="round-chart-card">
							<IonCardHeader>
								<IonGrid>
									<IonRow>
										<IonCol size="6">
											<div>
												{/* Render a partyVoteChart component for the vote result.
													All partyResult[0] instances below will need to be altered when multiple parties are added to the dataset. 
													*/}
												<PartyVoteChart
													partyVote={vote.result.partyResult[0]}
												/>
											</div>
										</IonCol>
										<IonCol size="6">
											<IonRow>
												<IonText>
													<span className="chart-vote-title">
														{vote.result.partyResult[0].partyName}
													</span>
													<p className="chart-vote-members">
														{' '}
														{vote.result.partyResult[0].partyTotal}{' '}
														Mitglieder
													</p>
												</IonText>
											</IonRow>
											<IonRow className="chart-row-spacing">
												<div className="result-legend-circle vote-yes"></div>
												<span className="result-legend-text">
													Ja: {vote.result.partyResult[0].yes}
												</span>
											</IonRow>
											<IonRow className="chart-row-spacing">
												<div className="result-legend-circle vote-no"></div>
												<span className="result-legend-text">
													Nein: {vote.result.partyResult[0].no}
												</span>
											</IonRow>
											<IonRow className="chart-row-spacing">
												<div className="result-legend-circle vote-abstain"></div>
												<span className="result-legend-text">
													Enthalten: {vote.result.partyResult[0].abstain}
												</span>
											</IonRow>
											<IonRow className="chart-row-spacing">
												<div className="result-legend-circle vote-none"></div>
												<span className="result-legend-text">
													Nicht abg.: {vote.result.partyResult[0].none}
												</span>
											</IonRow>
										</IonCol>
									</IonRow>
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
