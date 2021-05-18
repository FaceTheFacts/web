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
import Positioning from '../Positioning';
import VoteDetails from './VoteDetails/VoteDetails';

interface ContainerProps {
	vote: Poll;
}

const majorityJudge = (yes: number, no: number, abstain: number, noShow: number) => {
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
) => {
	const majority = majorityJudge(yes, no, abstain, noShow);
	const voteResult = {
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

	const modalCloser = () => {
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

	const partyVoteResult: any = [];
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

	//Temporal Input
	// const preview = {
	// 	title: 'Verlängerung des Bundeswehreinsatzes in Südsudan (Friedensmission UNMISS)',
	// 	content:
	// 		'Die Bundesregierung beruft sich bei ihrem Antrag auf das Schutzmandat der Vereinten Nationen und das System gegenseitiger kollektiver Sicherheit. Die Zivilbevölkerung müsse vor der bewaffneten Auseinandersetzung zwischen Regierungs- und Oppositionsgruppen geschützt werden.',
	// };
	// const totalVote = {
	// 	votes: {
	// 		ja: 432,
	// 		nein: 176,
	// 		enthalten: 21,
	// 		abwesend: 79,
	// 	},
	// 	majority: 'ja',
	// };

	// const partyVoteInputs = [
	// 	{
	// 		party: 'cdu',
	// 		votes: {
	// 			ja: 244,
	// 			nein: 0,
	// 			enthalten: 0,
	// 			abwesend: 20,
	// 		},
	// 		majority: 'ja',
	// 	},
	// 	{
	// 		party: 'spd',
	// 		votes: {
	// 			ja: 126,
	// 			nein: 7,
	// 			enthalten: 2,
	// 			abwesend: 17,
	// 		},
	// 		majority: 'ja',
	// 	},
	// 	{
	// 		party: 'fdp',
	// 		votes: {
	// 			ja: 68,
	// 			nein: 2,
	// 			enthalten: 5,
	// 			abwesend: 5,
	// 		},
	// 		majority: 'ja',
	// 	},
	// 	{
	// 		party: 'grüne',
	// 		votes: {
	// 			ja: 14,
	// 			nein: 32,
	// 			enthalten: 14,
	// 			abwesend: 7,
	// 		},
	// 		majority: 'nein',
	// 	},
	// ];
	// const tempInput = {
	// 	totalVote,
	// 	partyVoteInputs,
	// };
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
					swipeToClose={true}
				>
					<VoteDetails
						clicked={modalCloser}
						title={vote.title}
						content={vote.abstract}
						positioning={vote.candidateVote}
						result={judgeStatement}
						totalVote={totalVoteJudge}
						partyVote={partyVoteResult}
					/>
				</IonModal>
			</IonContent>
		</React.Fragment>
	);
};

export default VoteCard;
