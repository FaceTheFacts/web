import {
	IonInput,
	IonContent,
	IonImg,
	IonModal,
	IonFabButton,
	IonPage,
	IonIcon,
	IonPopover,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import CameraView from '../components/CameraView';
import DetectedCandidate from '../components/DetectedCandidate';
import './Discover.css';
import { Candidate } from '../Types';

interface DiscoverProps {
	candidate: Candidate;
	setCandidate: Function;
}
const Discover: React.FC<DiscoverProps> = ({ candidate, setCandidate }: DiscoverProps) => {
	const { name } = useParams<{ name: string }>();
	const [text, setText] = useState<string>();
	const [showCamera, setShowCamera] = useState<boolean>(false);
	const [showPopover, setShowPopover] = useState<boolean>(false);

	// animation for the popover
	/* const popoverAnimation = (baseEl: any) => {
		return createAnimation()
		.addElement(baseEl)
		.duration(500)
		.fromTo("bottom", "-20%", "20%")
	} */

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonModal isOpen={showCamera} cssClass="my-custom-class">
					<IonFabButton
						className="camera-close-button"
						onClick={() => setShowCamera(false)}
					>
						<IonIcon icon={closeOutline}></IonIcon>
					</IonFabButton>
					<CameraView setShowPopover={setShowPopover} setCandidate={setCandidate} />
				</IonModal>
				<div className="discover-page">
					<div className="camera-icon-background" onClick={() => setShowCamera(true)}>
						<IonImg id="camera-square" src="../assets/icon/camera-square.svg"></IonImg>
						<IonImg id="camera-icon" src="../assets/icon/camera-solid.svg"></IonImg>
					</div>

					<IonInput
						className="search-bar"
						value={text}
						placeholder="Kandidat:in, PLZ oder Ort suchen"
						disabled={true}
						onIonChange={(e) => setText(e.detail.value!)}
					></IonInput>
					<IonPopover
						isOpen={showPopover}
						cssClass="popover"
						onDidDismiss={(e) => setShowPopover(false)}
						translucent={true}
						id="detected-candidate-popover"
						/* enterAnimation={popoverAnimation} */
					>
						<DetectedCandidate
							setShowPopover={setShowPopover}
							setShowCamera={setShowCamera}
							candidate={candidate}
						/>
					</IonPopover>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Discover;
