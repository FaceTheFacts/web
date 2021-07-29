import React, { useEffect } from 'react';
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
import { voteDetailsHandler } from '../../functions/voteDetailsHandler';
import VoteDetails from './VoteDetails/VoteDetails';

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

	const Poll = voteDetailsHandler(props.vote?.politician_poll.poll.id);

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
											{/* {Poll.judge} */}
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
											<VoteChart totalvotes={[Poll.Gesamt[0], Poll.Gesamt[1], Poll.Gesamt[2], Poll.Gesamt[3]]} />
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
									result={Poll.judge}
									totalVote={Poll.Gesamt}
									partyVote={[Poll.CDU, Poll.SPD, Poll.FDP, Poll.Grünen, Poll.LINKE, Poll.AfD, Poll.fraktionslos]}
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