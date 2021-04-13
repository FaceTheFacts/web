import { IonButtons, IonContent, IonPage, IonTitle, IonBackButton, IonText } from '@ionic/react';
import React from 'react';
import TopicFilter from '../components/TopicFilter';
import PartyMatch from '../components/PartyMatch';
import SubHeading from '../components/SubHeading';
import VoteCard from '../components/VoteCard';
import Tabs from '../components/Tabs';
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
