import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import './SecondVoteCard.css';

interface CandidateInfoProps {
	candidateName: string;
	electionChance: number;
	rank: number;
	cardColor: 'clear' | 'faded';
	setFixedPosition: number | undefined;
	lastCandidate: 'notlast' | 'last';
}

const postionChanger = (rank: number, fixedPosition: number | undefined): string => {
	let position = 'away';
	if (rank === fixedPosition) {
		position = 'touched';
	}
	return position;
};

const SecondVoteCard: React.FC<CandidateInfoProps> = ({
	candidateName,
	electionChance,
	rank,
	cardColor,
	setFixedPosition,
	lastCandidate,
}: CandidateInfoProps) => {
	const isTouched = postionChanger(rank, setFixedPosition);
	return (
		<div className={['secondvote-card', isTouched].join(' ')} id="second-vote-card">
			<IonCard className={['secondvote-card', lastCandidate].join(' ')} key={`rank=${rank}`}>
				<IonCardHeader className="secondvote-card-header">
					<IonCardTitle className={['secondvote-card-name', cardColor].join(' ')}>
						#{rank} {candidateName}
					</IonCardTitle>
					{setFixedPosition === rank ? (
						<IonCardTitle className="secondvote-card-chance">
							{electionChance}%
						</IonCardTitle>
					) : null}
				</IonCardHeader>
			</IonCard>
		</div>
	);
};
export default SecondVoteCard;
