import React from 'react';
import classnames from 'classnames';
import { IonGrid, IonRow, IonCol, IonChip, IonCardTitle } from '@ionic/react';
import './PoliticianProfile.css';
import { Candidate } from '../Types';
import '../index.css';

interface ContainerProps {
	candidate: Candidate;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ candidate }: ContainerProps) => {
	const partyClassName = candidate.party.toLowerCase().replace(/\s/g, '');

	return (
		<div className="header">
			<IonGrid>
				<IonRow>
					<IonCol className="profile-image">
						<img
							className="politician-image"
							src={String(candidate.image)}
							alt={candidate.name}
						></img>
					</IonCol>
					<IonCol className="profile-details">
						<div className="politician-name">
							<IonCardTitle data-testid="profile-name">{candidate.name}</IonCardTitle>
						</div>
						<div className="politican-details">
							{candidate.chips.map((chip: string, index: number) => {
								return (
									<IonChip
										className={classnames(
											'politician-detail',
											`${partyClassName + index}`
										)}
										key={index}
										data-testid="profile-detail"
									>
										{chip}
									</IonChip>
								);
							})}
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default PoliticianProfile;
