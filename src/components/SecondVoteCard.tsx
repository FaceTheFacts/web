import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { StateList } from '../Types';
import './SecondVoteCard.css';

interface CandidateInfoProps {
	secondVote: StateList;
	rank: number;
}

const SecondVoteCard: React.FC<CandidateInfoProps> = ({ secondVote, rank }: CandidateInfoProps) => {
	return (
		<IonCard className="secondvote-card">
			<IonCardHeader className="secondvote-card-header">
				<IonCardTitle className="secondvote-card-name">
					<span className="rank">#{rank}</span> {secondVote.name}
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);
};
export default SecondVoteCard;
