import React from 'react';
import { IonGrid, IonRow, IonCol, IonChip } from '@ionic/react';
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
						<img
							src={String(politician.image)}
							alt={politician.name}
							data-testid="profile-img-url"
						></img>
					</IonCol>
					<IonCol size="6">
				{politician.name}
			

			{politician.chips.map((chip: string, index: number) => {
				return (
					<IonChip className="politician-details" key={index}>
						{chip}
					</IonChip>
				);
			})}
					</IonCol>
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default PoliticianProfile;
