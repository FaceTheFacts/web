import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import VoteCard from '../components/VoteCard';
import './Votes.css';
import { Candidate } from '../Types';
import LinkButton from '../components/LinkButton';
import { iconEnum } from '../enums/icon.enum';

interface VoteProps {
	candidate: Candidate;
}

const Votes: React.FC<VoteProps> = ({ candidate }: VoteProps) => {
	const candidateId = candidate.id;
	return (
		<IonPage>
			<IonContent>
				<LinkButton
					linkTo={`/politician/${candidateId}/profile`}
					icon={iconEnum.CHEVRON_BACK}
				/>
				<div>wichtige Abstimmungen</div>
				{/* Since filter screen doesn't exist yet, Search button is routed to votes screen */}
				<LinkButton linkTo={`/politician/${candidateId}/votes`} icon={iconEnum.SEARCH} />
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
