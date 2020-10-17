import React from 'react';
import { IonGrid, IonRow, IonCol, IonImg, IonChip, IonItem } from '@ionic/react';
import './DetectedCandidate.css';
import { useHistory } from 'react-router';
import log from 'loglevel';
import { Candidate } from '../Types';
interface ContainerProps {
	setShowPopover: Function;
	setShowCamera: Function;
	candidate: Candidate;
}

const DetectedCandidate: React.FC<ContainerProps> = ({
	setShowPopover,
	setShowCamera,
	candidate,
}) => {
	const history = useHistory();

	const navigateToProfile = () => {
		if (candidate !== null) {
			log.debug(`navigating to profile ${candidate.id}`);
			history.push(`/politician/${candidate.id}/profile`);
			setShowCamera(false);
			setShowPopover(false);
		}
	};
	return (
		<div className="detected-candidate-popover">
			<IonGrid className="detected-candidate-grid">
				<IonRow className="constituency-row">
					<IonCol size="6">
						<p className="constituency-number">{candidate.constituency.numberLabel}</p>
						<p className="constituency-label">{candidate.constituency.label}</p>
					</IonCol>
					<IonCol size="6">
						<p className="postcode-label">Postleitzahlen im Wahlkreis</p>
						<p className="constituency-postcodes">
							{candidate.constituency.postcodes.map((postcode) => {
								return postcode;
							})}
						</p>
					</IonCol>
				</IonRow>
				<IonRow className="candidate-row">
					<IonItem className="candidate-item" onClick={navigateToProfile}>
						<IonCol size="4">
							<div className="detected-candidate-image-container">
								<IonImg
									className="detected-candidate-image"
									src={String(candidate.image)}
								/>
							</div>
						</IonCol>
						<IonCol size="8">
							<h3 className="detected-candidate-name">{candidate.name}</h3>
							<IonChip className="detected-candidate-chip">{candidate.party}</IonChip>
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
