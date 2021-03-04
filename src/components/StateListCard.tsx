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
}

const StateListCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	return (
		<div className="grey-background">
			<IonCard className="election-chances-card">
				{/* 
				Card header with Vote name, vote subtitle which holds the type of vote it was and the candidate's vote.
				It's inside a css grid so we can more easily arrange the items.
				*/}
				<IonCardHeader className="election-chances-card-header">
					<IonGrid>
						<IonRow>
							<IonCol size="3">
								<div className="election-chances-card-image">
									<img alt="candidate" src={String(vote.image)}></img>
								</div>
							</IonCol>
							<IonCol size="6">
								<IonCardSubtitle className="election-chances-card-subtitle"></IonCardSubtitle>
								<IonCardTitle className="election-chances-card-title">
									{vote.candidate}
								</IonCardTitle>
							</IonCol>
							<IonCol size="3">
								<IonCardTitle className="election-chances-card-title"></IonCardTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardHeader>
			</IonCard>
		</div>
	);
};

export default StateListCard;
