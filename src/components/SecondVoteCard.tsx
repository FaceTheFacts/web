import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { ElectionResult } from '../Types';
import './SecondVoteCard.css';

interface CandidateInfoProps {
	secondVote: ElectionResult;
	candidateName: string;
}

const SecondVoteCard: React.FC<CandidateInfoProps> = ({ secondVote, candidateName }: CandidateInfoProps) => {
	return (
		<IonCard className={ candidateName === secondVote.politician.label ? "secondvote-card blue" : "secondvote-card"}>
			<IonCardHeader className="secondvote-card-header">
				<IonCardTitle className="secondvote-card-name" data-testid="rank-secondVote">
					<span className="rank">#{secondVote.electoral_data.list_position}</span>{' '}
					{secondVote.politician.label}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};
export default SecondVoteCard;
