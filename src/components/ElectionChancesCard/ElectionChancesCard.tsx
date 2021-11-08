import React from 'react';
import './ElectionChancesCard.css';
import { IonCard, IonCardHeader, IonCardTitle, IonGrid, IonCol, IonRow } from '@ionic/react';
import { ElectionResult } from '../../Types';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';

interface ContainerProps {
	vote: ElectionResult;
}

const ElectionchancesCard: React.FC<ContainerProps> = ({ vote }: ContainerProps) => {
	return (
		<IonCard className="election-chances-card">
			<IonCardHeader className="election-chances-card-header">
				<IonGrid>
					<IonRow>
						<IonCol size="9">
							<div>
								<IonCardTitle
									className="election-chances-card-title"
									data-testid="election-chances-card-title"
								>
									{vote.politician.label}
								</IonCardTitle>
								<PartyChip party={vote.party.label} />
							</div>
						</IonCol>
						<IonCol className="percentage" size="3">
							<IonCardTitle
								className="election-chances-card-title"
								data-testid="election-chances-card-percentage"
							>
								{vote.electoral_data.constituency_result} %
							</IonCardTitle>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCardHeader>
		</IonCard>
	);
};

export default ElectionchancesCard;
