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
	IonModal,
	IonContent,
} from '@ionic/react';
import { Poll } from '../../Types';
import { voteJudgeHandler } from '../../functions/voteJudgeHandler';
import Positioning from '../PositionCards/Positioning/Positioning';
import VoteDetails from './VoteDetails/VoteDetails';
import { ColumnType } from './VoteDetails/Table/Content/Columns/Column/Column';

interface ContainerProps {
	vote: Poll;
}

const majorityJudge = (yes: number, no: number, abstain: number, noShow: number): string => {
	const majority = Math.max(yes, no, abstain, noShow);
	let judge = 'ja';

	switch (majority) {
	case yes:
		judge = 'ja';
		break;
	case no:
		judge = 'nein';
		break;
	case abstain:
		judge = 'enthalten';
		break;
	case noShow:
		judge = 'abwesend';
		break;
	default:
		judge = 'ja';
	}
	return judge;
};

const voteObjectHandler = (
	yes: number,
	no: number,
	abstain: number,
	noShow: number,
	party?: string
): ColumnType => {
	const majority = majorityJudge(yes, no, abstain, noShow);
	const voteResult: ColumnType = {
		party: party,
		votes: {
			ja: yes,
			nein: no,
			enthalten: abstain,
			abwesend: noShow,
		},
		majority: majority,
	};
	return voteResult;
};

const VoteCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	const modalCloser = (): void => {
		setShowDetails(false);
	};

	/* 
	Dynamically calculate the total number of votes
	*/
	const totalvotes = `${
		vote.result.total.yes +
		vote.result.total.no +
		vote.result.total.abstain +
		vote.result.total.none
	}`;
	const judgeStatement =
		vote.subtitle + ' ' + voteJudgeHandler(vote.result.total.yes, +totalvotes);

	const totalVoteJudge = voteObjectHandler(
		vote.result.total.yes,
		vote.result.total.no,
		vote.result.total.abstain,
		vote.result.total.none
	);

	const partyVoteResult: ColumnType[] = [];
	vote.result.partyResult.forEach((partyVote) => {
		partyVoteResult.push(
			voteObjectHandler(
				partyVote.yes,
				partyVote.no,
				partyVote.abstain,
				partyVote.none,
				partyVote.partyName
			)
		);
	});

	return (
		<React.Fragment>
			<IonCard className="vote-card" onClick={(): void => setShowDetails(!showDetails)}>
				<IonCardHeader className="vote-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="8">
								<IonCardTitle
									className="vote-card-title"
									data-testid="vote-card-title"
								>
									{vote.title}
								</IonCardTitle>
							</IonCol>
							<IonCol size="4">
								<div className="candidate-vote">
									<Positioning positioning={vote.candidateVote} />
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
					swipeToClose={false}
				>
					<div className = 'vote-modal'>
						<VoteDetails
							clicked={modalCloser}
							title={vote.title}
							content={vote.abstract}
							positioning={vote.candidateVote}
							result={judgeStatement}
							totalVote={totalVoteJudge}
							partyVote={partyVoteResult}
						/>
					</div>
				</IonModal>
			</IonContent>
		</React.Fragment>
	);
};

export default VoteCard;
