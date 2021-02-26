import React from 'react';
import './ElectionChancesCard.css';
import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonGrid,
	IonCol,
	IonRow,
} from '@ionic/react';
import { Election } from '../Types';
import '../index.css';

interface ContainerProps {
	vote: Election;
}

const ElectionchancesCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	/* 
	Internationalisation to keep the code in English but print the national language
	*/

	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);


	/* 
	Dynamically create the className for the candidate's name
	*/
	const candidateElectionClassName = `${vote.candidate.toLowerCase()}`;

	/* 
	Dynamically create the className for the candidate's party
	*/
	const partyClassName = `${vote.party.toLowerCase()}`;

	/* 
	Dynamically create the className for the candidate's election result
	*/
	const percentageElectionClassName = `${vote.percentage}`;

	/* 
	Let Typescript know that candidateVote will always have one of these four values. 
	The cleaner refactored version of this would be to change "vote" into it's own datatype where vote.candidateVote is 
	predefined to only have one of these four values.
	
	Absolutely need to figure out how to use this datatype, currently it is different from string which causes problems
	*/
	// const voteString = vote.candidateVote;

	return (
		<div className="grey-background">
			<IonCard className="election-chances-card" onClick={(): void => setShowDetails(!showDetails)}>
				{/* 
				Card header with Vote name, vote subtitle which holds the type of vote it was and the candidate's vote.
				It's inside a css grid so we can more easily arrange the items.
				*/}
				<IonCardHeader className="election-chances-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="3">
								<div className="election-chances-card-image">
									<img src={String(vote.image)}></img>
								</div>
							</IonCol>
							<IonCol size="6">
								<IonCardSubtitle className="election-chances-card-subtitle">
									{vote.party}
								</IonCardSubtitle>
								<IonCardTitle className="election-chances-card-title">
									{vote.candidate}
								</IonCardTitle>
							</IonCol>
							<IonCol size="3">
								<IonCardTitle className="election-chances-card-title">
									{vote.percentage}%
								</IonCardTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardHeader>
			</IonCard>
		</div>
	);
};

export default ElectionchancesCard;
