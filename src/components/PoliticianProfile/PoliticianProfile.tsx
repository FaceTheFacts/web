import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonChip } from '@ionic/react';
import Placeholder from '../../assets/images/placeholder.svg';
import './PoliticianProfile.css';
import { Politician } from '../../Types';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';
import { occupationHandler } from '../../functions/occupationHandler';

interface ContainerProps {
	candidate: Politician;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ candidate }: ContainerProps) => (
	<div className="header">
		<IonGrid>
			<IonRow>
				<IonCol className="profile-image">
					<img className="politician-image" src={Placeholder} alt="placeholder" />
				</IonCol>
				<IonCol className="profile-details">
					<div className="politician-name">
						<IonCardTitle>{candidate.label}</IonCardTitle>
					</div>
					<div className="politician-details">
						<PartyChip party={candidate.party.label} />
						{candidate.occupation !== null
							? occupationHandler(candidate.occupation).map(
								(occupation: string, index: number) => {
									return (
										<IonChip key={index} className="politician-detail">
											{occupation}
										</IonChip>
									);
								}
							)
							: null}
					</div>
				</IonCol>
			</IonRow>
		</IonGrid>
	</div>
);

export default PoliticianProfile;
