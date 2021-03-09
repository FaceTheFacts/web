import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { StateList } from '../Types';
import './SecondVoteCard.css';

interface CandidateInfoProps {
	secondVote: StateList;
	rank: number;
	// cardColor: 'clear' | 'faded';
	setFixedPosition: number | undefined;
	// lastCandidate: 'notlast' | 'last';
	lastCandidate: number;
}

const postionChanger = (rank: number, fixedPosition: number | undefined): string => {
	let position = 'away';
	if (rank === fixedPosition) {
		position = 'touched';
	}
	return position;
};

const cardColorChanger = (rank: number, fixedPosition: number | undefined): string => {
	let cardColor = 'faded';
	if (!fixedPosition) {
		return cardColor;
	}
	if (rank <= fixedPosition) {
		cardColor = 'clear';
	}
	return cardColor;
};

const lastCandidateHandler = (rank: number, lastCandidate: number): string => {
	let isLastCandidate = 'notlast';
	if (rank === lastCandidate) {
		isLastCandidate = 'last';
	}
	return isLastCandidate;
};

const SecondVoteCard: React.FC<CandidateInfoProps> = ({
	secondVote,
	rank,
	setFixedPosition,
	lastCandidate,
}: CandidateInfoProps) => {
	const isTouched = postionChanger(rank, setFixedPosition);
	const cardColor = cardColorChanger(rank, setFixedPosition);
	const isLast = lastCandidateHandler(rank, lastCandidate);

	return (
		<IonCard
			className={['secondvote-card', isTouched, isLast].join(' ')}
			id="second-vote-card"
			key={`rank=${rank}`}
		>
			<IonCardHeader className="secondvote-card-header">
				<IonCardTitle className={['secondvote-card-name', cardColor].join(' ')}>
					#{rank} {secondVote.name}
				</IonCardTitle>
				{setFixedPosition === rank ? (
					<IonCardTitle className="secondvote-card-chance">
						{secondVote.electionChance}%
					</IonCardTitle>
				) : null}
			</IonCardHeader>
		</IonCard>
	);
};
export default SecondVoteCard;
