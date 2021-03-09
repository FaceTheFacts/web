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
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
	useCamera,
	availableFeatures,
} from "@capacitor-community/react-hooks/camera";
import { CameraResultType, Camera } from "@capacitor/core";
import {
	CameraPreview,
	CameraPreviewPictureOptions,
	CameraPreviewOptions,
	CameraPreviewDimensions,
} from "@ionic-native/camera-preview";

import { Plugins } from "@capacitor/core";
//import "capacitor-plugin-camera-preview"

import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import CameraView from "../components/CameraView";

class Scan extends React.PureComponent<RouteComponentProps> {
	//name = useParams<{ name: string }>();
	name = "Scan";
	/* photo = useCamera();
	getPhoto = useCamera(); */

	CameraPreview = Plugins;

	/* const handleTakePhoto = () => {
		if (availableFeatures.getPhoto) {
			this.getPhoto({
				quality: 100,
				allowEditing: false,
				resultType: CameraResultType.DataUrl,
			});
		}
	}; */
	cameraPreviewOpts: CameraPreviewOptions = {
		x: 0,
		y: 0,
		width: window.screen.width,
		height: window.screen.height * 0.8,
		camera: "rear",
		tapPhoto: true,
		previewDrag: false,
		toBack: true,
		alpha: 1,
	};

	/* startCamera = async () => {
		const video = React.createRef();
		const canvas = React.createRef();
		await CameraPreview.startCamera(this.cameraPreviewOpts, video, canvas)
			.then((res: {}) => {
				console.log("Opened Camera");
				console.log(res);
			})
			.catch((err: {}) => {
				console.log(err);
			});
		/* await CameraPreview.startCamera(cameraPreviewOpts).then((res) => {
			console.log("Open Camera");
			console.log(res);
		}).catch((err) =>{
			console.log(err);
		}); */
	//};

	takeSnapshot = async () => {
		await CameraPreview.takeSnapshot().then((res: {}) => console.log(res));
	};

	state = {
		showingCamera: false,
	};

	showCamera = () => {
		this.setState({ showingCamera: true });
	};

	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton />
						</IonButtons>
						<IonTitle>{this.name}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonContent fullscreen>
					<IonHeader collapse="condense">
						<IonToolbar>
							<IonTitle size="large">{this.name}</IonTitle>
						</IonToolbar>
					</IonHeader>
					{/*
				
				{availableFeatures.getPhoto ? (
					<div>
						<div>
							<IonButton onClick={startCamera}>
								Start Camera Preview
							</IonButton>
						</div>
						<div>{photo && <img alt="" src={photo.dataUrl} />}</div>
					</div>
				) : (
					<div>Camera not available on this platform</div>
				)}
				
				<div id='camera-preview'></div>
				<IonButton onClick={takeSnapshot}>
								Take Snapshot
							</IonButton>
							*/}
					<IonButton onClick={this.showCamera}>
						Start Camera Preview
					</IonButton>

					{/* { this.state.showingCamera ? <CameraView /> : null } */}
				</IonContent>
			</IonPage>
		);
	}
}

export default withRouter(Scan);
