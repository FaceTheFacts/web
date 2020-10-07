import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

//import { CameraPreviewOptions } from "@ionic-native/camera-preview";

import {
	BlazeFaceModel,
	load,
	NormalizedFace,
} from "@tensorflow-models/blazeface";

import { createWorker, createScheduler } from "tesseract.js";
import Fuse from "fuse.js";

import "./CameraView.css";

interface CameraViewProps extends RouteComponentProps {
	setShowPopover: Function;
}
class CameraView extends React.PureComponent<CameraViewProps> {
	constructor(props: CameraViewProps) {
		super(props);
	}
	state = {
		politicianDetected: false,
	};

	canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
	canvasOCRRef: React.RefObject<HTMLCanvasElement> = React.createRef();
	videoRef: React.RefObject<HTMLVideoElement> = React.createRef();
	stream?: MediaStream;
	model?: BlazeFaceModel;
	animationFrameID?: number;

	cameraOpts = {
		x: 0,
		y: 0,
		width: window.screen.width,
		height: window.screen.height,
		camera: "rear",
		tapPhoto: true,
		previewDrag: false,
		toBack: true,
		alpha: 1,
	};

	scheduler = createScheduler();

	async componentDidMount() {
		await this.initialiseCamera()
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});

		// load BlazeFaceModel for face detetction
		this.model = await load();

		// initialise Tesseract for OCR
		await this.initializeTesseract();
	}

	async componentWillUnmount() {
		console.log("stopping");
		await this.stop();
	}

	// Refactored Code starts here
	async initialiseCamera() {
		// get media tracks
		await navigator.mediaDevices
			.getUserMedia({
				video: {
					facingMode: "environment",
					width: this.cameraOpts.width,
					height: this.cameraOpts.height,
				},
				audio: false,
			})
			.then((stream: MediaStream) => {
				this.stream = stream;
				this.initVideo();
				this.initCanvas();
			})
			.catch((err: {}) => {
				console.log(err);
			});

		return new Promise((resolve, reject) => {
			if (this.stream?.getTracks()[0].readyState === "live") {
				resolve("successfully started camera");
			} else {
				reject("error starting camera");
			}
		});
	}

	initVideo() {
		// initialise video element
		if (this.videoRef.current !== null) {
			this.videoRef.current.style.width = String(this.cameraOpts.width);
			this.videoRef.current.style.height = String(this.cameraOpts.height);
			this.videoRef.current.srcObject = this.stream as MediaStream;

			// add event listeners for play and onloadedmetadata events
			this.videoRef.current.addEventListener(
				"play",
				() => {
					this.drawLoop();
				},
				false
			);
			this.videoRef.current.onloadedmetadata = (e) => {
				this.videoRef.current?.play();
			};
		}
	}

	initCanvas() {
		// initialise canvas for drawing
		const ctx = this.canvasRef.current?.getContext("2d");
		if (ctx) {
			ctx.canvas.width = this.cameraOpts.width;
			ctx.canvas.height = this.cameraOpts.height;
		}

		// initialise canvas for OCR
		const ctxOCR = this.canvasOCRRef.current?.getContext("2d");
		if (ctxOCR) {
			ctxOCR.canvas.width = this.cameraOpts.width;
			ctxOCR.canvas.height = this.cameraOpts.height;
		}
	}

	initializeTesseract = async () => {
		for (let i = 0; i < 1; i++) {
			const worker = createWorker({
				logger: (m) => console.log(m),
			});
			await worker.load();
			await worker.loadLanguage("deu");
			await worker.initialize("deu");
			await worker.setParameters({
				tessedit_char_whitelist:
					"abcdefghijklmnopqrstuvwxyzäöüABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ",
			});
			this.scheduler.addWorker(worker);
		}
	};

	// detect faces and characters
	async detectFaces() {
		if (this.model === undefined) {
			console.log("Loading BlazeFace Model");
			this.model = await load();
		}

		const predictions = await this.model.estimateFaces(
			this.videoRef.current as HTMLVideoElement,
			false
		);

		return new Promise<NormalizedFace[]>((resolve, reject) => {
			// maybe only resolve if predictions.length > 0
			if (predictions !== undefined) {
				resolve(predictions);
			} else {
				reject("could not detect faces");
			}
		});
	}

	async recogniseCharacters() {
		this.drawVideoOnCanvas();
		if (this.scheduler.getNumWorkers() === 0) {
			await this.initializeTesseract();
		}

		const result = await this.scheduler.addJob(
			"recognize",
			this.canvasOCRRef.current
		);
		const results = result.data.text.split("\n");

		return new Promise((resolve, reject) => {
			if (results.length > 0) {
				resolve(results);
			} else {
				reject("could not detect characters");
			}
		});
	}

	async fuseSearchResults(results: String[]) {
		const candidates = ["philipp amthor", "renate künast", "angela merkel"];
		const options = {
			includeScore: true,
		};
		const fuse = new Fuse(results, options);
		let match = {
			query: "",
			result: {},
		};

		for (const candidate of candidates) {
			const res = fuse.search(candidate as string);
			console.log(res);
			if (res.length > 0) {
				match.result = res;
				match.query = candidate;
			}
		}

		return new Promise((resolve, reject) => {
			if (match.query !== "") {
				console.log(match);
				resolve(match);
			} else {
				reject("no candidate found");
			}
		});
	}

	// display results
	async drawLoop() {
		// detect faces and draw bbox
		await this.detectFaces()
			.then((predictions) => {
				this.showDetections(predictions);
			})
			.catch((err) => {
				console.log(err);
			});

		// recognize characters and show progress
		const results = (await this.recogniseCharacters()) as String[];

		await this.fuseSearchResults(results)
			.then((match) => {
				this.props.setShowPopover(true);
			})
			.catch((err) => {
				console.log(err);
			});

		// repeat
		this.animationFrameID = requestAnimationFrame(async () => {
			await this.drawLoop();
		});
	}

	drawVideoOnCanvas() {
		const ctx = this.canvasOCRRef.current?.getContext("2d");
		ctx?.drawImage(this.videoRef.current as HTMLVideoElement, 0, 0);
	}

	// terminate processes

	async stop() {
		cancelAnimationFrame(this.animationFrameID as number);

		await this.stopOCR()
			.then((msg) => {
				console.log(msg);
			})
			.catch((err) => {
				console.log(err);
			});

		this.stopFaceDetection();
		await this.stopCamera();
	}

	async stopOCR() {
		console.log("terminating workers");
		await this.scheduler.terminate();
		return new Promise((resolve, reject) => {
			if (this.scheduler.getNumWorkers.length === 0) {
				resolve("successfully stopped camera stream");
			} else {
				reject("failed to stop camera stream");
			}
		});
	}

	stopFaceDetection() {
		console.log("stopping face detection");
		delete this.model;
	}
	// Old Code starts here

	async stopCamera() {
		console.log("stopping camera");
		const tracks = this.stream?.getTracks();
		if (tracks !== undefined) {
			for (let track of tracks) {
				track.stop();
			}
		}

		return new Promise((resolve, reject) => {
			if (this.stream?.getTracks()[0].readyState == "ended") {
				console.log("success");
				resolve("successfully stopped camera stream");
			} else {
				console.log("failed");
				reject("failed to stop camera stream");
			}
		});
	}

	showDetections = (predictions: NormalizedFace[]) => {
		const ctx = this.canvasRef.current?.getContext(
			"2d"
		) as CanvasRenderingContext2D;
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			predictions.forEach((prediction) => {
				const start: [number, number] = prediction.topLeft as [
					number,
					number
				];
				const end: [number, number] = prediction.bottomRight as [
					number,
					number
				];
				var probability = prediction.probability as number;

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
			});
		}
	};

	render() {
		return (
			<div>
				<video ref={this.videoRef} playsInline autoPlay></video>
				<canvas ref={this.canvasRef} id="camera-canvas"></canvas>
				<canvas ref={this.canvasOCRRef} id="ocr-canvas"></canvas>
			</div>
		);
	}
}
export default withRouter(CameraView);
