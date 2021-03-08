import {
	IonButtons,
	IonButton,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";
import {
	useCamera,
	availableFeatures,
} from "@capacitor-community/react-hooks/camera";
import { CameraResultType } from "@capacitor/core";
import {
	CameraPreview,
	CameraPreviewPictureOptions,
	CameraPreviewOptions,
	CameraPreviewDimensions,
} from "@ionic-native/camera-preview";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

const Scan: React.FC = () => {
	const { name } = useParams<{ name: string }>();
	const { photo, getPhoto } = useCamera();

	const handleTakePhoto = () => {
		if (availableFeatures.getPhoto) {
			getPhoto({
				quality: 100,
				allowEditing: false,
				resultType: CameraResultType.DataUrl,
			});
		}
	};
	const cameraPreviewOpts: CameraPreviewOptions = {
		x: 0,
		y: 0,
		width: window.screen.width,
		height: window.screen.height*0.8,
		camera: "rear",
		tapPhoto: true,
		previewDrag: false,
		toBack: true,
		alpha: 1,
	};

	const startCamera = async () => {
		await CameraPreview.startCamera(cameraPreviewOpts).then((res) => {
			console.log("Open Camera");
			console.log(res);
		}).catch((err) =>{
			console.log(err);
		});
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{availableFeatures.getPhoto ? (
					<div>
						<div>
							<IonButton onClick={startCamera}>
								Take Photo
							</IonButton>
						</div>
						<div>{photo && <img alt="" src={photo.dataUrl} />}</div>
					</div>
				) : (
					<div>Camera not available on this platform</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Scan;
