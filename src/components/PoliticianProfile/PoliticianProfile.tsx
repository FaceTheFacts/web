import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonChip } from '@ionic/react';
import Placeholder from '../../assets/images/placeholder.svg';
import './PoliticianProfile.css';
import { Politician } from '../../Types';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';
import classNames from 'classnames';
import { TotalDataObj } from '../../json/TestJsonData';


interface ContainerProps {
	candidate: TotalDataObj;
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
							<IonCardTitle>{candidate.name}</IonCardTitle>
						</div>
						<div className="politician-details">
							<PartyChip party={candidate.party} />
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
