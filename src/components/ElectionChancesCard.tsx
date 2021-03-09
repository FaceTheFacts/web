import React from 'react';
import './ElectionChancesCard.css';
import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonGrid,
	IonCol,
	IonRow,
} from '@ionic/react';
import { Election } from '../Types';
import '../index.css';

interface ContainerProps {
	vote: Election;
	firstCandidate: boolean;
}

const ElectionchancesCard: React.FC<ContainerProps> = ({ vote, firstCandidate }: ContainerProps) => {
	/* 
	Internationalisation to keep the code in English but print the national language
	*/

	//State Hook to alter state when clicked and open vote detail modal
	const [showDetails, setShowDetails] = React.useState(false);

	/* 
	Let Typescript know that candidateVote will always have one of these four values. 
	The cleaner refactored version of this would be to change "vote" into it's own datatype where vote.candidateVote is 
	predefined to only have one of these four values.
	
	Absolutely need to figure out how to use this datatype, currently it is different from string which causes problems
	*/
	const partyClassName = vote.party.toLowerCase().replace(/\s/g, '');

	return (
			<IonCard className={["election-chances-card", partyClassName].join(" ")}>
				{/* 
				Card header with Vote name, vote subtitle which holds the type of vote it was and the candidate's vote.
				It's inside a css grid so we can more easily arrange the items.
				*/}
				<IonCardHeader className="election-chances-card-header">
					<IonGrid>
						<IonRow>
							{firstCandidate ? 
								<IonCol size="3">
									<div className="election-chances-card-image">
										<img id="img" src={String(vote.image)}></img>
									</div>
								</IonCol>
							: 
								<IonCol size="0">
									<p>IF</p>
								</IonCol>}
							<IonCol size="6">
								<div id="center-column">
								<IonCardTitle className="election-chances-card-title">
									{vote.candidate}
								</IonCardTitle>
								<IonCardSubtitle className={["election-chances-card-subtitle", partyClassName].join(" ")}>
									<span>{vote.party}</span>
								</IonCardSubtitle>
								</div>
							</IonCol>
							<IonCol size="3">
								<div id="center-column">
							<IonCardTitle className="election-chances-card-title">
									{vote.percentage}%
								</IonCardTitle>
								</div>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardHeader>
			</IonCard>
	);
};

export default ElectionchancesCard;
