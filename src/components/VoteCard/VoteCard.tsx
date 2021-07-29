import React from 'react';
import VoteChart from './VoteChart/VoteChart';
import './VoteCard.css';
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonGrid,
	IonCol,
	IonRow,
	IonContent,
	IonModal,
} from '@ionic/react';
import { PollData } from '../../Types';
import Positioning from '../PositionCards/Positioning/Positioning';
import VoteDetails from './VoteDetails/VoteDetails';
import { voteJudgeHandler } from '../../functions/voteJudgeHandler';

interface ContainerProps {
	vote: PollData|undefined;
	name: string;
	setArrow: Function;
}

const VoteCard: React.FC<ContainerProps> = (props: ContainerProps) => {
	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	const modalCloser = (): void => {
		setShowDetails(false);
	};

	const PartyVotes = props.vote?.party_votes
	if (!PartyVotes) {
		return <div></div>
	}
	const SPD = [PartyVotes['1'].yes , PartyVotes['1'].no , PartyVotes['1'].abstain , PartyVotes['1'].no_show]

	const CDU = [PartyVotes['2'].yes , PartyVotes['2'].no , PartyVotes['2'].abstain , PartyVotes['2'].no_show]
	
	const CSU = [PartyVotes['3'].yes , PartyVotes['3'].no , PartyVotes['3'].abstain , PartyVotes['3'].no_show]

	const FDP = [PartyVotes['4'].yes , PartyVotes['4'].no , PartyVotes['4'].abstain , PartyVotes['4'].no_show]

	const Grünen = [PartyVotes['5'].yes , PartyVotes['5'].no , PartyVotes['5'].abstain , PartyVotes['5'].no_show]

	const Linke = [PartyVotes['8'].yes , PartyVotes['8'].no , PartyVotes['8'].abstain , PartyVotes['8'].no_show]

	const AfD = [PartyVotes['16'].yes , PartyVotes['16'].no , PartyVotes['16'].abstain , PartyVotes['16'].no_show]

	const Fraktionslos = [PartyVotes['185'].yes , PartyVotes['185'].no , PartyVotes['185'].abstain , PartyVotes['185'].no_show]

	const voteCounter = (): Array<number> => {
		let yesVote = 0;
		let noVote = 0;
		let abstainVote = 0;
		let noShowVote =0;
		const GermanPartyId = ['1','2','3','4','5','8','9','16','185']
		if (PartyVotes) {
			// eslint-disable-next-line
			GermanPartyId.map(id => {
				yesVote += PartyVotes[id].yes
				noVote += PartyVotes[id].no
				abstainVote += PartyVotes[id].abstain
				noShowVote += PartyVotes[id].no_show
			})
		}
		const total = [yesVote,noVote,abstainVote,noShowVote]
		return total
	}
	const totalVotes = voteCounter()

	const judgeStatement =
		'Antrag '+ voteJudgeHandler(totalVotes[0], totalVotes[0] + totalVotes[1]+ totalVotes[2] +totalVotes[3]);

	return (
		<React.Fragment>
			{props.vote && props.vote?.politician_poll.vote !== 'no_show'? (
				<div>
					<IonCard className='vote-card' onClick={(): void => setShowDetails(!showDetails)} >
						<IonCardHeader className="vote-card-header">
							<IonGrid>
								<IonRow>
									<IonCol size="9">
										<IonCardTitle
											className={props.vote.politician_poll.poll.label.length < 50 ? 'vote-card-title' : 'vote-card-title large-label'}
											data-testid="vote-card-title"
										>
											{props.vote.politician_poll.poll.label}
										</IonCardTitle>
									</IonCol>
									<IonCol size="3">
										<div className="candidate-vote">
											<Positioning positioning={props.vote.politician_poll.vote} />
										</div>
									</IonCol>
									<IonCol size="12">
										<div className="vote-card-border"></div>
										<div className="judgement" data-testid="vote-card-judgement">
											{judgeStatement}
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
											<VoteChart totalvotes={[totalVotes[0], totalVotes[1], totalVotes[2], totalVotes[3]]} />
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
							swipeToClose={false}
						>
							<div className = 'vote-modal'>
								<VoteDetails
									clicked={modalCloser}
									title={props.vote.politician_poll.poll.label}
									content={props.vote.poll_detail.intro}
									positioning={props.vote.politician_poll.vote}
									result={judgeStatement}
									totalVote={totalVotes}
									partyVote={[CDU, CSU, SPD, FDP, Grünen, Linke, AfD, Fraktionslos]}
								/>
							</div>
						</IonModal>
					</IonContent>
				</div>
			):undefined}
			
		</React.Fragment>
	);
};

export default VoteCard