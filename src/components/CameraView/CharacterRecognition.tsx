import { createWorker, createScheduler, Scheduler } from 'tesseract.js';
import log from 'loglevel';
import Fuse from 'fuse.js';

interface CharacterRecognitionInterface {
    scheduler: Scheduler;
    candidates: {name: string, id: number}[];
    results?: string[]
    initialise(): Promise<void>;
    start(imageSource: HTMLCanvasElement): Promise<string[]>;
    matchResults(): Promise<{ result: {}; query: string; id: number }>;
    stop(): Promise<string>;
}

class CharacterRecognition implements CharacterRecognitionInterface {
    constructor(candidates: {name: string, id: number}[]){
        this.candidates = candidates
    }

    candidates: {name: string, id: number}[];
    scheduler: Scheduler = createScheduler();
    results: string[] = []

    initialise = async (): Promise<void> => {
		for (let i = 0; i < 1; i++) {
			const worker = createWorker({
				logger: (m) => log.debug(m),
			});
			await worker.load();
			await worker.loadLanguage('deu');
			await worker.initialize('deu');
			await worker.setParameters({
				// eslint-disable-next-line @typescript-eslint/camelcase
				tessedit_char_whitelist:
					'abcdefghijklmnopqrstuvwxyzäöüABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ',
			});
			this.scheduler.addWorker(worker);
		}
    };
    
    async start(imageSource: HTMLCanvasElement): Promise<string[]> {
		//this.drawVideoOnCanvas();
		//this.detectionCanvasRef.current?.draw(this.cameraFeedRef.current?.ref.current as HTMLVideoElement, this.cameraOpts.width, this.cameraOpts.height)
		if (this.scheduler.getNumWorkers() === 0) {
			await this.initialise();
		}

		const result = await this.scheduler.addJob(
			'recognize',
			imageSource
            );//this.canvasOCRRef.current);
            
		this.results = result.data.text.split('\n');

		return new Promise((resolve, reject) => {
			if (this.results.length > 0) {
				resolve(this.results);
			} else {
				reject('could not detect characters');
			}
		});
    }
    
    async matchResults(): Promise<{ result: {}; query: string; id: number }> {
        
		const options = {
			includeScore: true,
		};
		const fuse = new Fuse(this.results, options);
		const match = {
			query: '',
			id: 0,
			result: {},
		};

		for (const candidate of this.candidates) {
			const res = fuse.search(candidate.name as string);
			console.log(res);
			if (res.length > 0) {
				match.result = res;
				match.query = candidate.name;
				match.id = candidate.id;
			}
		}

		return new Promise((resolve, reject) => {
			if (match.query !== '') {
				resolve(match);
			} else {
				reject('no candidate found');
			}
		});
    }
    
    async stop(): Promise<string> {
		log.debug('terminating workers');
		await this.scheduler.terminate();
		return new Promise((resolve, reject) => {
			if (this.scheduler.getNumWorkers.length === 0) {
				resolve('successfully stopped camera stream');
			} else {
				reject('failed to stop camera stream');
			}
		});
	}
}

export default CharacterRecognition