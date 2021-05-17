import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import VoteCard from '../components/VoteCard/VoteCard';
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
		<IonPage className="votes-black-back">
			<div className="votes-header-container">
				<LinkButton
					linkTo={`/politician/${candidateId}/profile`}
					icon={iconEnum.CHEVRON_BACK}
				/>
				<div data-testid="votes-header">wichtige Abstimmungen</div>
				{/* Since filter screen doesn't exist yet, Search button is routed to votes screen */}
				<LinkButton linkTo={`/politician/${candidateId}/votes`} icon={iconEnum.SEARCH} />
			</div>
			<IonContent>
				<div className="votes-black-back">
					{candidate.polls.map((vote, index) => {
						return (
							<div className="votes-vote-card" key={`poll-${index}`}>
								<VoteCard vote={vote} />
							</div>
						);
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
