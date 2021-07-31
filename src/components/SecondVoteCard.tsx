import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { ElectionResult } from '../Types';
import './SecondVoteCard.css';
import classNames from 'classnames';

interface CandidateInfoProps {
	secondVote: ElectionResult;
	candidateName: string;
}

const SecondVoteCard: React.FC<CandidateInfoProps> = ({
	secondVote,
	candidateName,
}: CandidateInfoProps) => {
	const secondVoteClass = classNames('secondvote-card-name', secondVote.politician.label.length > 20 ? 'secondvote-long':'')
	return (
		<IonCard
			className={
				candidateName === secondVote.politician.label
					? 'secondvote-card blue'
					: 'secondvote-card'
			}
		>
			<IonCardHeader className="secondvote-card-header">
				<IonCardTitle className= {secondVoteClass} data-testid="rank-secondVote">
					<span className="rank">#{secondVote.electoral_data.list_position}</span>{' '}
					{secondVote.politician.label}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};
export default SecondVoteCard;
