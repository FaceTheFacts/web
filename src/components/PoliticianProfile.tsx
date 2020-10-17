import React from 'react';
import {
	IonChip,
} from '@ionic/react';
import './PoliticianProfile.css';
import PropTypes from 'prop-types';

interface ContainerProps {
	politician: any;
}

const PoliticianProfile: React.FC<ContainerProps> = ({ politician }) => {
	return (
		<div>
			<div className="imgContainer">
				<img src={politician.image} data-testid="profile-img-url"></img>
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

PoliticianProfile.propTypes = {
	politician: PropTypes.any.isRequired
}

export default PoliticianProfile;
