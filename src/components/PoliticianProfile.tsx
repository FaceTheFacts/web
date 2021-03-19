import React from 'react';
import { IonGrid, IonRow, IonCol, IonChip, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './PoliticianProfile.css';
import { Candidate } from '../Types';
import '../index.css';

interface ContainerProps {
	candidate: Candidate;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ candidate }: ContainerProps) => {
	return (
		<div className="header" ion-fixed>
			<IonGrid>
				<IonRow>
					<IonCol className="profile-image">
						<img className="politician-image"
							src={String(candidate.image)}
							alt={candidate.name}
							data-testid="profile-img-url"
						></img>
					</IonCol>
					<IonCol className="profile-details">
						<div className="politician-name"><IonCardTitle>{candidate.name}</IonCardTitle></div>
						<div className="politician-job"><IonCardSubtitle>Jurist</IonCardSubtitle></div>
						<div className="politican-details">

							{candidate.chips.map((chip: string, index: number) => {
								return (
									<IonChip className="politician-detail" key={index}>
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
