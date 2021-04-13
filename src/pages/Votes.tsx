import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import VoteCard from '../components/VoteCard';
import './Votes.css';
import { Candidate } from '../Types';

interface VoteProps {
	candidate: Candidate;
}

const Votes: React.FC<VoteProps> = ({ candidate }: VoteProps) => {
	return (
		<IonPage>
			<IonContent>
				<div className="votes-black-back">
					{candidate.polls.map((vote, index) => {
						return <VoteCard vote={vote} key={`poll-${index}`} />;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
