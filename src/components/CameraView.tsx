import React, { ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import log from 'loglevel';

// import { CameraPreviewOptions } from "@ionic-native/camera-preview";


import { createWorker, createScheduler } from 'tesseract.js';
import Fuse from 'fuse.js';
import '../index.css';
import './CameraView.css';
import { amthor } from '../amthor';
import FeedbackCanvas from './CameraView/FeedbackCanvas';
import DetectionCanvas from './CameraView/DetectionCanvas';
import CameraFeed from './CameraView/CameraFeed';
import FaceDetection from './CameraView/FaceDetection'
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
			cameraReady: false
		}
		this.setCameraReady = this.setCameraReady.bind(this)
	}

	feedbackCanvasRef: React.RefObject<FeedbackCanvas> = React.createRef();

	detectionCanvasRef: React.RefObject<DetectionCanvas> = React.createRef();

	cameraFeedRef: React.RefObject<CameraFeed> = React.createRef();

	faceDetection: FaceDetection = new FaceDetection();

	characterRecognition: CharacterRecognition = new CharacterRecognition(
		[
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
		]
	)


	animationFrameID?: number;

	candidates?: Array<string>;

	cameraOpts = {
		x: 0,
		y: 0,
		width: window.innerWidth,
		height: window.innerWidth * 4 / 3,
		camera: 'rear',
		tapPhoto: true,
		previewDrag: false,
		toBack: true,
		alpha: 1,
	};


	// scheduler = createScheduler();

	async componentDidMount(): Promise<void> {
		
		// load BlazeFaceModel for face detetction
		await this.faceDetection.loadModel();

		// initialise Tesseract for OCR
		await this.characterRecognition.initialise();
	}

	async componentDidUpdate(): Promise<void> {
		this.initCanvas();
		this.cameraFeedRef.current?.ref.current?.addEventListener(
			'play',
			() => {
				this.drawLoop();
			}
		)
	}

	async componentWillUnmount(): Promise<void> {
		log.debug('stopping camera preview');
		await this.stop();
	}


	setCameraReady(): void {
		this.setState({cameraReady: true})
	}

	initCanvas(): void {
		// initialise canvas for drawing

		this.feedbackCanvasRef.current?.init(this.cameraOpts.width, this.cameraOpts.height);

		// initialise canvas for OCR
		this.detectionCanvasRef.current?.init(this.cameraOpts.width, this.cameraOpts.height);

	}

	// initializeTesseract = async (): Promise<void> => {
	// 	for (let i = 0; i < 1; i++) {
	// 		const worker = createWorker({
	// 			logger: (m) => log.debug(m),
	// 		});
	// 		await worker.load();
	// 		await worker.loadLanguage('deu');
	// 		await worker.initialize('deu');
	// 		await worker.setParameters({
	// 			// eslint-disable-next-line @typescript-eslint/camelcase
	// 			tessedit_char_whitelist:
	// 				'abcdefghijklmnopqrstuvwxyzäöüABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ',
	// 		});
	// 		this.scheduler.addWorker(worker);
	// 	}
	// };


	// async recogniseCharacters(): Promise<string[]> {
	// 	//this.drawVideoOnCanvas();
	// 	this.detectionCanvasRef.current?.draw(this.cameraFeedRef.current?.ref.current as HTMLVideoElement, this.cameraOpts.width, this.cameraOpts.height)
	// 	if (this.scheduler.getNumWorkers() === 0) {
	// 		await this.initializeTesseract();
	// 	}

	// 	const result = await this.scheduler.addJob(
	// 		'recognize',
	// 		this.detectionCanvasRef.current?.ref.current as HTMLCanvasElement
	// 		);//this.canvasOCRRef.current);
	// 	const results = result.data.text.split('\n');

	// 	return new Promise((resolve, reject) => {
	// 		if (results.length > 0) {
	// 			resolve(results);
	// 		} else {
	// 			reject('could not detect characters');
	// 		}
	// 	});
	// }

	// async fuseSearchResults(results: string[]): Promise<{ result: {}; query: string; id: number }> {
	// 	const candidates = [
	// 		{
	// 			name: 'philipp amthor',
	// 			id: 1,
	// 		},
	// 		{
	// 			name: 'renate künast',
	// 			id: 2,
	// 		},
	// 		{
	// 			name: 'angela merkel',
	// 			id: 3,
	// 		},
	// 	];
	// 	const options = {
	// 		includeScore: true,
	// 	};
	// 	const fuse = new Fuse(results, options);
	// 	const match = {
	// 		query: '',
	// 		id: 0,
	// 		result: {},
	// 	};

	// 	for (const candidate of candidates) {
	// 		const res = fuse.search(candidate.name as string);
	// 		console.log(res);
	// 		if (res.length > 0) {
	// 			match.result = res;
	// 			match.query = candidate.name;
	// 			match.id = candidate.id;
	// 		}
	// 	}

	// 	return new Promise((resolve, reject) => {
	// 		if (match.query !== '') {
	// 			resolve(match);
	// 		} else {
	// 			reject('no candidate found');
	// 		}
	// 	});
	// }

	// display results
	async drawLoop(): Promise<void> {
		this.detectionCanvasRef.current?.draw(this.cameraFeedRef.current?.ref.current as HTMLVideoElement, this.cameraOpts.width, this.cameraOpts.height)
		// detect faces and draw bbox
		await this.faceDetection.start(this.detectionCanvasRef.current?.ref.current as HTMLCanvasElement)
			.then((predictions) => {
				this.feedbackCanvasRef.current?.draw(predictions)
				//this.showDetections(predictions);
			})
			.catch((err) => {
				log.error(err);
			});

		// recognize characters and show progress

		const results = (await this.characterRecognition.start(this.detectionCanvasRef.current?.ref.current as HTMLCanvasElement)) as string[];

		await this.characterRecognition.matchResults()
			.then((match) => {
				log.debug(`Detected candidate ${match.query}`);
				this.props.setCandidate(amthor);
				this.props.setShowPopover(true);
			})
			.catch((err) => {
				log.debug(err);
			});

		// repeat
		this.animationFrameID = requestAnimationFrame(async () => {
			await this.drawLoop();
		});
	}

	// terminate processes

	async stop(): Promise<void> {
		cancelAnimationFrame(this.animationFrameID as number);

		await this.characterRecognition.stop()
			.then((msg) => {
				log.debug(msg);
			})
			.catch((err) => {
				log.error(err);
			});

		this.faceDetection.stop();
		await this.cameraFeedRef.current?.stop()
			.then((msg) => {
				log.debug(msg);
			})
			.catch((err) => {
				log.error(err);
			});
	}

	// async stopOCR(): Promise<string> {
	// 	log.debug('terminating workers');
	// 	await this.scheduler.terminate();
	// 	return new Promise((resolve, reject) => {
	// 		if (this.scheduler.getNumWorkers.length === 0) {
	// 			resolve('successfully stopped camera stream');
	// 		} else {
	// 			reject('failed to stop camera stream');
	// 		}
	// 	});
	// }


	render(): ReactNode {
		return (
			<div className="camera-container">
				<div className="camera">
					<CameraFeed
						ref={this.cameraFeedRef}
						cameraOpts={this.cameraOpts}
						setCameraReady={this.setCameraReady}
					></CameraFeed>
					<FeedbackCanvas
						ref={this.feedbackCanvasRef}
					></FeedbackCanvas>
					<DetectionCanvas
						ref={this.detectionCanvasRef}
					></DetectionCanvas>
				</div>
			</div>
		);
	}
}

export default withRouter(CameraView);
