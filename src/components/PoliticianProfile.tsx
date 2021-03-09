import React from 'react';
import { IonGrid, IonRow, IonCol, IonChip, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './PoliticianProfile.css';
import { Candidate } from '../Types';
import '../index.css';

interface ContainerProps {
	politician: Candidate;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ politician }: ContainerProps) => {
	return (
		<div className="header">
			<IonGrid>
				<IonRow>
					<IonCol size="3">
						<img className="politician-image"
							src={String(politician.image)}
							alt={politician.name}
							data-testid="profile-img-url"
						></img>
					</IonCol>
					<IonCol size="9">
						<div className="politician-name"><IonCardTitle>{politician.name} <span className="politician-age">29</span></IonCardTitle></div>
						<div className="politician-job"><IonCardSubtitle>Jurist</IonCardSubtitle></div>
						<div className="politican-details">

							{politician.chips.map((chip: string, index: number) => {
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
