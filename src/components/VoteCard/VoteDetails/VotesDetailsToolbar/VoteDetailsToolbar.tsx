import { IonButton, IonIcon, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { closeCircle } from 'ionicons/icons';
import './VoteDetailsToolbar.css';
import CrossImage from '../../../../assets/images/cross.svg';
import { getMobileOperatingSystem } from '../../../../functions/getMobileOperatingSystem/getMobileOperatingSystem';

interface VoteDetailsToolbarProps {
	clicked: Function;
}

const VoteDetailsToolbar: React.FC<VoteDetailsToolbarProps> = (props: VoteDetailsToolbarProps) => {
	const [toolbar, setToolbar] = useState<JSX.Element | null>(null);
	let operatingSystem;
	useEffect(() => {
		operatingSystem = getMobileOperatingSystem();
		if (operatingSystem === 'iOS') {
			setToolbar(
				<IonToolbar className="details-toolbar-container">
					<div data-testid="votes-details-toolbar-title">Gesetzesentwurf</div>
					<IonButton
						className="details-toolbar-button"
						onClick={(): void => props.clicked()}
						slot="end"
						fill="clear"
					>
						<IonIcon slot="icon-only" icon={closeCircle} />
					</IonButton>
				</IonToolbar>
			);
		} else {
			setToolbar(
				<IonToolbar className="details-toolbar-container">
					<div data-testid="votes-details-toolbar-title">Gesetzesentwurf</div>
					<IonButton onClick={(): void => props.clicked()} 	slot="end" fill="clear">
						<IonIcon slot="icon-only" icon={CrossImage} />
					</IonButton>
				</IonToolbar>
			);
		}
	}, []);

	return <React.Fragment>{toolbar}</React.Fragment>;
};

export default VoteDetailsToolbar;
