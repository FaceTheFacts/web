import React from 'react';
import { BlazeFaceModel, load, NormalizedFace } from '@tensorflow-models/blazeface';
import log from 'loglevel';

interface FaceDetectionInterface {
    model?: BlazeFaceModel;
    loadModel(): void;
    detectFaces(imageSource: HTMLCanvasElement): Promise<NormalizedFace[]>;

}
class FaceDetection implements FaceDetectionInterface {
    model?: BlazeFaceModel;

    async loadModel() {
        this.model = await load();
    }

    async detectFaces(imageSource: HTMLCanvasElement): Promise<NormalizedFace[]> {
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
}

export default FaceDetection;