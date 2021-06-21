import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './SideJobCard.css';
import '../index.css';
import { SideJobData } from '../Types';
import { incomeMonthHandler } from '../functions/incomeMonthHandler';
import { incomeLevelHandler } from '../functions/incomeLevelHandler';

interface SideJobCardProps {
	sideJob: SideJobData;
}

const SideJobCard: React.FC<SideJobCardProps> = ({ sideJob }: SideJobCardProps) => {
	return (
		<IonCard className="sideJob-layout">
			<IonCardHeader>
				<IonCardTitle className="sideJob-major" data-testid="profile-sidejob-position">
					{sideJob.label}
				</IonCardTitle>
				<IonCardTitle className="sideJob-minor" data-testid="profile-sidejob-organisation">
					{sideJob.sidejob_organization.label}
				</IonCardTitle>
				<div className="vote-card-border"></div>
				<div className="sideJob-income">
					<div className="income">{incomeLevelHandler(sideJob.income_level)}</div>
					<div className="income-date">{incomeMonthHandler(sideJob.data_change_date)}</div>
				</div>
			</IonCardHeader>
		</IonCard>
	);
};

export default SideJobCard;
