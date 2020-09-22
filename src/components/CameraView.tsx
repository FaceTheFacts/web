import React from "react";
import { CameraPreviewOptions } from "@ionic-native/camera-preview";
import { IonButton } from "@ionic/react";

import { BlazeFaceModel, BlazeFacePrediction, load, NormalizedFace } from "@tensorflow-models/blazeface";
import * as tf from "@tensorflow/tfjs-node";
import { Tensor1D } from "@tensorflow/tfjs-node";
import { isPropertyName } from "typescript";
import { type } from "os";

import './CameraView.css'

//global.fetch = require('node-fetch')
//const blazeface = require('@tensorflow-models/blazeface');

class CameraView extends React.Component {
	canvasRef: React.RefObject<HTMLCanvasElement> =  React.createRef();
	videoRef: React.RefObject<HTMLVideoElement> = React.createRef();
	cameraOpts = {
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


	async componentDidMount(){
		await this.startCamera().then( res => {
			console.log('started camera')
		}).catch(err => {
			console.log(err)
		})
		

	}

	detectFromVideoFrame = (model: BlazeFaceModel, video: React.RefObject<HTMLVideoElement>) => {
		if(video.current !== null){
			model.estimateFaces(video.current, false).then(predictions => {
				this.showDetections(predictions);
		  
				requestAnimationFrame(() => {
				  this.detectFromVideoFrame(model, video);
				});
			  }, (error) => {
				console.log("Couldn't start the webcam")
				console.error(error)
			  });
		}

	  };



	showDetections = (predictions: NormalizedFace[]) => {
		//console.log(predictions);
		const ctx = (this.canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
		ctx.canvas.width = this.cameraOpts.width;
		ctx.canvas.height = this.cameraOpts.height;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		predictions.forEach(prediction => {
			/* const x = prediction.bbox[0];
			const y = prediction.bbox[1];
			const width = prediction.bbox[2];
			const height = prediction.bbox[3]; */
			//const bbox = [prediction.topLeft[0]]
			const start: [number, number] = (prediction.topLeft as [number, number]);
			const end: [number, number] = (prediction.bottomRight as [number, number]);
			var probability = (prediction.probability as number) ;
			//console.log(probability);

				const size = [end[0] - start[0], end[1] - start[1]];
				// Render a rectangle over each detected face.
				ctx.beginPath();
				ctx.strokeStyle = "green";
				ctx.lineWidth = 4;
				ctx.rect(start[0], start[1], size[0], size[1]);
				ctx.stroke();
				var prob = (probability * 100).toPrecision(5).toString();
				var text = prob + "%";
				ctx.fillStyle = "red";
				ctx.font = "13pt sans-serif";
				ctx.fillText(text, start[0] + 5, start[1] + 20);
			
		})


			//if (typeof(start) === [number, number])
			/*const size = [end[0] - start[0], end[1] - start[1]];
 */
		
	}

	async startCamera() {
		
		if (this.videoRef.current !== null) {
			this.videoRef.current.style.width = String(this.cameraOpts.width);
			this.videoRef.current.style.height = String(this.cameraOpts.height);
			this.videoRef.current.addEventListener(
				"play",
				() => {
					this.draw();
				},
				false
			);
		}

		console.log(navigator.mediaDevices)

		await navigator.mediaDevices
			.getUserMedia({ video: {facingMode: 'environment'}, audio: false })
			.then((stream: MediaStream) => {
				console.log(this.videoRef);
				if (this.videoRef.current !== null) {
					//const cameraPreview = document.getElementById('camera-preview');
					//cameraPreview?.appendChild(this.videoElement)
					this.videoRef.current.srcObject = stream;
					this.videoRef.current.onloadedmetadata = (e) => {
						if (this.videoRef.current !== null) {
							console.log(e);
							console.log(this);
							this.videoRef.current.play();
						}
					};
					console.log(this.videoRef.current);
					//content.appendChild(this.videoElement)
				}
			})
			.catch((err: {}) => {
				console.log(err);
			});
		return new Promise((resolve, reject) => {
			if (
				this.videoRef.current !== null &&
				typeof this.videoRef.current.srcObject !== "undefined"
			) {
				resolve({ value: "success" });
			} else {
				reject("error");
			}
		});
	}

	async draw() {
		console.log("Drawing");

		// This broke everything, it was added because we got the error 'no backend set'
		//console.log('Using TensorFlow backend: ', tf.getBackend());

		//const context = this.canvasRef.current?.getContext("2d");
		const model = await load();
		console.log(model);
		const video = this.videoRef;
		this.detectFromVideoFrame(model, video)

	}
	render() {
		return (
			<div>
				<IonButton onClick={this.startCamera.bind(this)}>
					Start Camera Preview
				</IonButton>
				<video ref={this.videoRef} playsInline autoPlay ></video>
				<canvas ref={this.canvasRef}></canvas>
			</div>
		);
	}
}
export default CameraView;
