import React, { useState } from 'react';
import {
	IonGrid,
	IonRow,
	IonCol,
	IonImg,
	IonChip,
	IonIcon,
	IonItem,
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import './DetectedCandidate.css';
import { useHistory } from 'react-router';
import log from 'loglevel';
interface ContainerProps {
	setShowPopover: Function;
	setShowCamera: Function;
	candidateId: number;
}

const DetectedCandidate: React.FC<ContainerProps> = ({
	setShowPopover,
	setShowCamera,
	candidateId,
}) => {
	const history = useHistory();

	const navigateToProfile = () => {
		log.debug(`navigating to profile ${candidateId}`);
		history.push(`/politician/${candidateId}/profile`);
		setShowCamera(false);
		setShowPopover(false);
	};
	return (
		<div className="detected-candidate-popover">
			<IonGrid className="detected-candidate-grid">
				<IonRow className="constituency-row">
					<IonCol size="6">
						<p className="constituency-number">Wahlkreis 016</p>
						<p className="constituency-label">
							Mecklenburgische Seenplatte I -
							Vorpommern-Greifswald II
						</p>
					</IonCol>
					<IonCol size="6">
						<p className="postcode-label">
							Postleitzahlen im Wahlkreis
						</p>
						<p className="constituency-postcodes">
							98559, 99102, 99189, 99310
						</p>
					</IonCol>
				</IonRow>
				<IonRow className="candidate-row">
					<IonItem
						className="candidate-item"
						onClick={navigateToProfile}
					>
						<IonCol size="4">
							<div className="detected-candidate-image-container">
								<IonImg
									className="detected-candidate-image"
									src="https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr"
								/>
							</div>
						</IonCol>
						<IonCol size="8">
							<h3 className="detected-candidate-name">
								Philipp Amthor
							</h3>
							<IonChip className="detected-candidate-chip">
								CDU/CSU
							</IonChip>
							{/* <IonIcon
							className="detected-candidate-icon"
							icon={chevronForwardOutline}
						></IonIcon> */}
						</IonCol>
					</IonItem>
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default DetectedCandidate;
