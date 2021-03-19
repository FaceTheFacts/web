import React, { ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import log from 'loglevel'
// import { CameraPreviewOptions } from "@ionic-native/camera-preview";

import '../index.css';
import './CameraView.css';
import { amthor } from '../amthor';
import FeedbackCanvas from './CameraView/FeedbackCanvas';
import DetectionCanvas from './CameraView/DetectionCanvas';
import CameraFeed from './CameraView/CameraFeed';
import FaceDetection from './CameraView/FaceDetection';
import CharacterRecognition from './CameraView/CharacterRecognition';
// import { CameraPreview } from '@ionic-native/camera-preview';

interface CameraViewProps extends RouteComponentProps {
	setShowPopover: Function;
	setCandidate: Function;
}

class CameraView extends React.PureComponent<CameraViewProps> {
	constructor(props: CameraViewProps) {
		super(props);
		this.state = {
			cameraReady: false,
		};
		this.setCameraReady = this.setCameraReady.bind(this);
	}

	feedbackCanvasRef: React.RefObject<FeedbackCanvas> = React.createRef();

	detectionCanvasRef: React.RefObject<DetectionCanvas> = React.createRef();

	cameraFeedRef: React.RefObject<CameraFeed> = React.createRef();

	faceDetection: FaceDetection = new FaceDetection();

	characterRecognition: CharacterRecognition = new CharacterRecognition([
		{
			name: 'philipp amthor',
			id: 1,
		},
		{
			name: 'renate künast',
			id: 2,
		},
		{
			name: 'angela merkel',
			id: 3,
		},
	]);

	animationFrameID?: number;

	candidates?: Array<string>;

	cameraOpts = {
		x: 0,
		y: 0,
		width: window.innerWidth,
		height: (window.innerWidth * 4) / 3,
		camera: 'rear',
		tapPhoto: true,
		previewDrag: false,
		toBack: true,
		alpha: 1,
	};

	async componentDidMount(): Promise<void> {
		// load BlazeFaceModel for face detetction
		await this.faceDetection
			.loadModel()
			.then((res) => {
				log.debug(res);
			})
			.catch((err) => {
				log.debug(err);
			});

		// initialise Tesseract for OCR
		await this.characterRecognition
			.initialise()
			.then((res) => {
				log.debug(res);
			})
			.catch((err) => {
				log.debug(err);
			});
	}

	async componentDidUpdate(): Promise<void> {
		this.initCanvas();
		this.cameraFeedRef.current?.ref.current?.addEventListener('play', () => {
			this.drawLoop();
		});
	}

	async componentWillUnmount(): Promise<void> {
		log.debug('stopping camera preview');
		await this.stop()
			.then((res) => {
				log.debug(res);
			})
			.catch((err) => {
				log.debug(err);
			});
	}

	setCameraReady(): void {
		this.setState({ cameraReady: true });
	}

	initCanvas(): void {
		// initialise canvas for drawing

		this.feedbackCanvasRef.current?.init(this.cameraOpts.width, this.cameraOpts.height);

		// initialise canvas for OCR
		this.detectionCanvasRef.current?.init(this.cameraOpts.width, this.cameraOpts.height);
	}

	// display results
	async drawLoop(): Promise<void> {
		this.detectionCanvasRef.current?.draw(
			this.cameraFeedRef.current?.ref.current as HTMLVideoElement,
			this.cameraOpts.width,
			this.cameraOpts.height
		);
		// detect faces and draw bbox
		await this.faceDetection
			.start(this.detectionCanvasRef.current?.ref.current as HTMLCanvasElement)
			.then((predictions) => {
				this.feedbackCanvasRef.current?.draw(predictions);
			})
			.catch((err) => {
				log.error(err);
			});

		// recognize characters and show progress

		const results = (await this.characterRecognition.start(
			this.detectionCanvasRef.current?.ref.current as HTMLCanvasElement
		)) as string[];
		if (results.length > 0) {
			await this.characterRecognition
				.matchResults()
				.then((match) => {
					log.debug(`Detected candidate ${match.query}`);
					this.props.setCandidate(amthor);
					this.props.setShowPopover(true);
				})
				.catch((err) => {
					log.debug(err);
				});
		}

		// repeat
		this.animationFrameID = requestAnimationFrame(async () => {
			await this.drawLoop()
				.then((res) => {
					log.debug(res);
				})
				.catch((err) => {
					log.debug(err);
				});
		});
	}

	// terminate processes

	async stop(): Promise<void> {
		cancelAnimationFrame(this.animationFrameID as number);

		await this.characterRecognition
			.stop()
			.then((msg) => {
				log.debug(msg);
			})
			.catch((err) => {
				log.error(err);
			});

		this.faceDetection.stop();
		await this.cameraFeedRef.current
			?.stop()
			.then((msg) => {
				log.debug(msg);
			})
			.catch((err) => {
				log.error(err);
			});
	}

	render(): ReactNode {
		return (
			<div className="camera-container">
				<div className="camera">
					<CameraFeed
						ref={this.cameraFeedRef}
						cameraOpts={this.cameraOpts}
						setCameraReady={this.setCameraReady}
					></CameraFeed>
					<FeedbackCanvas ref={this.feedbackCanvasRef}></FeedbackCanvas>
					<DetectionCanvas ref={this.detectionCanvasRef}></DetectionCanvas>
				</div>
			</div>
		);
	}
}

export default withRouter(CameraView);
