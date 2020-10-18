import React from 'react';
import {
	IonChip,
} from '@ionic/react';
import './PoliticianProfile.css';
import {Candidate} from '../Types'

interface ContainerProps {
	politician: Candidate;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ politician }: ContainerProps) => {
	return (
		<div>
			<div className="imgContainer">
				<img src={String(politician.image)} alt={politician.name} data-testid="profile-img-url"></img>
			</div>

			<div className="politician-name" data-testid="profile-name">
				{politician.name}
			</div>

			{politician.chips.map((chip: string, index: number) => {
				return (
					<IonChip className="politician-details" key={index}>
						{chip}
					</IonChip>
				);
			})}
		</div>
	);
};


export default PoliticianProfile;
