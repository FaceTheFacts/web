import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SideJobCard.css';
import '../index.css';
// import { SideJobData } from '../Types';
import { incomeMonthHandler } from '../functions/incomeMonthHandler';
import { incomeLevelHandler } from '../functions/incomeLevelHandler';
import { Sidejob } from '../interfaces';


interface SideJobCardProps {
	sideJob: Sidejob;
}

const SideJobCard: React.FC<SideJobCardProps> = ({ sideJob }: SideJobCardProps) => {
	return (
		<IonCard className="sideJob-layout">
			<IonCardHeader>
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{sideJob.label}
				</IonCardTitle>
				<IonCardTitle className="sideJob-minor" data-testid="profile-sidejob-organisation">
					{sideJob.organisation}
				</IonCardTitle>
				<div className="vote-card-border"></div>
				<div className="sideJob-income">
					<div className="income">{sideJob.income_level?incomeLevelHandler(sideJob.income_level):undefined}</div>
					<div className="income-date">
						{incomeMonthHandler(sideJob.date)}
					</div>
				</div>
			</IonCardHeader>
		</IonCard>
	);
};

export default SideJobCard;
