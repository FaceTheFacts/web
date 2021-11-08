import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonChip } from '@ionic/react';
import Placeholder from '../../assets/images/placeholder.svg';
import './PoliticianProfile.css';
import { Politician } from '../../Types';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';
import classNames from 'classnames';

interface ContainerProps {
	candidate: Politician;
	image: string;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ candidate, image }: ContainerProps) => {
	return (
		<div className="header">
			<IonGrid>
				<IonRow>
					<IonCol className="profile-image">
						<img className="politician-image" src={image !== null ? image : Placeholder} alt="placeholder" />
					</IonCol>
					<IonCol className="profile-details">
						<div className="politician-name">
							<IonCardTitle>{candidate.label}</IonCardTitle>
						</div>
						<div className="politician-details">
							<PartyChip party={candidate.party.label} />
							{/* Check Toni Jaschinski */}
							{candidate.occupation.map(
								(occupation: string, index: number) => {
									const ocupationClass = classNames ('politician-detail', occupation.length < 36 ? 'politician-detail-short':'')
									return (
										<IonChip key={index} className={ocupationClass}>
											{occupation}
										</IonChip>
									);
								}
							)}
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default PoliticianProfile;
