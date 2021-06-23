import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './NoDataCard.css';

interface NoDataCardProps {
	type: string;
}

const NoDataCard: React.FC<NoDataCardProps> = (props: NoDataCardProps) =>
	props.type === 'sideJob' ? (
		<IonCard className="sideJob-layout">
			<IonCardHeader>
				<IonCardTitle className="sideJob-major">Keine</IonCardTitle>
				<IonCardTitle className="sideJob-minor">
					Soweit uns bekannt, hat diese:r Kandidat:in keine Nebentätigkeiten.
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	) : (
		<IonCard className="vote-layout">
			<IonCardHeader>
				<IonCardTitle className="vote-major">Keine Abstimmungsergebnisse</IonCardTitle>
				<IonCardTitle className="vote-minor">
					Diese:r Kandidat:in ist nicht Teil des Parlaments und konnte deshalb nicht
					abstimmen.
				</IonCardTitle>
			</IonCardHeader>
		</IonCard>
	);

export default NoDataCard;
