import { BlazeFaceModel, load, NormalizedFace } from '@tensorflow-models/blazeface';
import log from 'loglevel';

interface FaceDetectionInterface {
    model?: BlazeFaceModel;
    loadModel(): Promise<BlazeFaceModel>;
    start(imageSource: HTMLCanvasElement): Promise<NormalizedFace[]>;
    stop(): void;

}
class FaceDetection implements FaceDetectionInterface {
    model?: BlazeFaceModel;

    async loadModel(): Promise<BlazeFaceModel> {
        try {
            this.model = await load();
        }
        catch(err) {
            log.debug(err)
        }
        
        return new Promise((resolve, reject) => {
            if(typeof this.model === typeof BlazeFaceModel){
                resolve(this.model)
            } else {
                reject()
            }
        })
    }

    async start(imageSource: HTMLCanvasElement): Promise<NormalizedFace[]> {
		if (this.model === undefined) {
			log.debug('Loading BlazeFace Model');
			this.model = await load();
		}

		const predictions = await this.model.estimateFaces(
			imageSource as HTMLCanvasElement,
			false
		);

		return new Promise<NormalizedFace[]>((resolve, reject) => {
			// maybe only resolve if predictions.length > 0
			if (predictions !== undefined) {
				resolve(predictions);
			} else {
				reject('could not detect faces');
			}
		});
    }

    stop(){
        delete this.model;
    }
}

export default FaceDetection;