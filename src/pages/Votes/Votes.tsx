import { IonPage } from '@ionic/react';
import React from 'react';
import './Votes.css';
import { Candidate } from '../../Types';
import LinkButton from '../../components/LinkButton';
import { iconEnum } from '../../enums/icon.enum';

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
			</div>
		</IonPage>
	);
};

export default Votes;
