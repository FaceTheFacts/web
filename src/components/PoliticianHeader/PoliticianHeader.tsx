import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonChip } from '@ionic/react';
import Placeholder from '../../assets/images/placeholder.svg';
import { Politician } from '../../Types';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';
import classNames from 'classnames';

interface HeaderProps {
	candidate: Politician;
	image: string;
}

const PoliticianHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<div className="header">
			<IonGrid>
				<IonRow>
					<IonCol className="profile-image">
						<img className="politician-image" src={props.image !== null ? props.image : Placeholder} alt="placeholder" />
					</IonCol>
					<IonCol className="profile-details">
						<div className="politician-name">
							<IonCardTitle>{props.candidate.label}</IonCardTitle>
						</div>
						<div className="politician-details">
							<PartyChip party={props.candidate.party.label} />
							{/* Check Toni Jaschinski */}
							{props.candidate.occupation.map(
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

export default PoliticianHeader;
