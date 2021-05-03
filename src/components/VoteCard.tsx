import React, { useState } from 'react';
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
import { PollData } from '../Types';
import { voteJudgeHandler } from '../functions/voteJudgeHandler';
import Positioning from './Positioning';
import { useQuery } from 'react-query';
import fetch from '../functions/queries'

interface ContainerProps {
	vote: PollData;
	name: string;
}

const VoteCard: React.FC<ContainerProps> = ({ vote, name }: ContainerProps) => {
	/* 
	Internationalisation to keep the code in English but print the national language
	*/

	const votequery = useQuery(`vote-${vote.id}`, () => fetch(`votes?poll=${vote.id}&mandate[entity.label][cn]=${name}`))
	const yes = useQuery(`yes-${vote.id}`, () => fetch(`votes?poll=${vote.id}&vote=yes&range_end=1`))
	const no = useQuery(`no-${vote.id}`, () => fetch(`votes?poll=${vote.id}&vote=no&range_end=1`))
	const noShow = useQuery(`noShow-${vote.id}`, () => fetch(`votes?poll=${vote.id}&vote=no_show&range_end=1`))
	const abstain = useQuery(`abstain-${vote.id}`, () => fetch(`votes?poll=${vote.id}&vote=abstain&range_end=1`))
	
	if (votequery.status === 'loading' ) {
		return (<p>Loading</p>);
	}

	if ( yes.status === 'error') {
		return (<p>Error: {votequery.error}</p>);
	}
	
	const voteStrings = {
		yes: 'Ja',
		no: 'Nein',
		abstain: 'Enthalten',
		none: 'Nicht Abg.',
	};

	//State Hook to alter state when clicked and open vote detail modal
	/*const [showDetails, setShowDetails] = React.useState(false);
	 
	Dynamically create the className for the candidate's reason for voting
	*/
	/* const reasonVoteClassName = `reason-vote vote-${vote.candidateVote.toLowerCase()}`; */

	/* 
	Dynamically calculate the total number of votes
	*/
	let judge, noTotal: number, yesTotal: number , abstainTotal: number, noShowTotal: number;
	let totalvotes: [number, number, number, number]= [0, 0, 0, 0];
	/* const voteString = vote.candidateVote; */

	if ( yes.status === 'success' && no.status === 'success' && abstain.status === 'success' && noShow.status === 'success') {
		yesTotal = yes.data.meta.result.total;
		noTotal = no.data.meta.result.total;
		abstainTotal = abstain.data.meta.result.total;
		noShowTotal= noShow.data.meta.result.total;
		totalvotes = [yesTotal, noTotal, abstainTotal, noShowTotal];
		judge = 'Antrag ' + voteJudgeHandler(yesTotal, (yesTotal+noTotal+abstainTotal));
	}
		
	return (
		<React.Fragment>
			<IonCard className="vote-card" /* onClick={(): void => setShowDetails(!showDetails) }*/>
				<IonCardHeader className="vote-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="8">
								<IonCardTitle
									className="vote-card-title"
									data-testid="vote-card-title"
								>
									{vote.label}
								</IonCardTitle>
							</IonCol>
							<IonCol size="4">
								<div className="candidate-vote">
									<Positioning positioning={votequery.data.data[0].vote} />
								</div>
							</IonCol>
							<IonCol size="12">
								<div className="vote-card-border"></div>
								<div className="judgement" data-testid="vote-card-judgement">
									{judge}
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
									{totalvotes !== undefined ? <VoteChart totalvotes={totalvotes} /> : null }
								</div>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>

			{/*Vote Detail Modal*/}

			{/* <IonContent>
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
						</IonGrid> */}

						{/* We also use a grid here to more easily arrange the indivdual components. */}
						{/* <IonGrid>
							{/* Vote Result Chart
							<IonRow className="result-row-spacing">
								<IonCol size="12">
									<div className="result-chart-container">
										{/* Render a VoteChart component for the vote result
										<VoteChart vote={vote} />
									</div>
								</IonCol>
							</IonRow> */}

							{/* Vote Result Legend */}
							{/* <IonRow>
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
					</div>*/}

					{/* <div className="round-chart-div">
						<IonCard className="round-chart-card">
							<IonCardHeader>
								<IonGrid>
									<IonRow>
										<IonCol size="6">
											<div>
												 Render a partyVoteChart component for the vote result.
													All partyResult[0] instances below will need to be altered when multiple parties are added to the dataset. 
													
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
			</IonContent> */}
		</React.Fragment>
	)
};

export default VoteCard;
