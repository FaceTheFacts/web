import {
	IonButton,
	IonInput,
	IonContent,
	IonImg,
	IonModal,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import CameraView from "../components/CameraView";
import "./Discover.css";

const Discover: React.FC = () => {
	const { name } = useParams<{ name: string }>();
	const [text, setText] = useState<string>();
	const [showCamera, setShowCamera] = useState<boolean>(false);
	return (
		<IonPage>
			{/* <IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Discover</IonTitle>
				</IonToolbar>
			</IonHeader> */}

			<IonContent fullscreen>
				<IonModal isOpen={showCamera} cssClass="my-custom-class">
					<CameraView />
					<IonButton onClick={() => setShowCamera(false)}>
						Close Camera
					</IonButton>
				</IonModal>
				<div
					className="discover-page"
					onClick={() => setShowCamera(true)}
				>
					<div className="camera-icon-background">
						<IonImg
							id="camera-square"
							src="../assets/icon/camera-square.svg"
						></IonImg>
						<IonImg
							id="camera-icon"
							src="../assets/icon/camera-solid.svg"
						></IonImg>
					</div>

					<IonInput
						className="search-bar"
						value={text}
						placeholder="Kandidat:in, PLZ oder Ort suchen"
						disabled={true}
						onIonChange={(e) => setText(e.detail.value!)}
					></IonInput>
					{/* <IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Discover</IonTitle>
					</IonToolbar>
				</IonHeader> */}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Discover;
