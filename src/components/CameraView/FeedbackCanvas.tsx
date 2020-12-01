import React from 'react';
import AbstractCanvas from './AbstractCanvas';

import {NormalizedFace} from '@tensorflow-models/blazeface';

class FeedbackCanvas extends AbstractCanvas {
    draw = (predictions: NormalizedFace[]): void => {
		const ua = navigator.userAgent.toLowerCase();
		const isSafari = ua.includes('safari') && ua.indexOf('chrome') === -1;
		const ctx = this.ref.current?.getContext('2d') as CanvasRenderingContext2D;
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			// Render a rectangle over each detected face.
			ctx.beginPath();
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 6;

			// draw full screen clockwise, then face bbox counter clockwise
			// to darken everything but the face
			if (!isSafari) {
				ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
			}

			predictions.forEach((prediction) => {
				const start: [number, number] = prediction.topLeft as [number, number];
				const end: [number, number] = prediction.bottomRight as [number, number];

				/* const probability = prediction.probability as number;
				const prob = (probability * 100).toPrecision(5).toString(); */

				const size = [end[0] - start[0], end[1] - start[1]];

				if (!isSafari) {
					// counter clockwise
					ctx.rect(end[0], start[1], -size[0], size[1]);
				} else {
					ctx.rect(start[0], start[1], size[0], size[1]);
				}
			});
			ctx.stroke();
			if (!isSafari && predictions.length > 0) {
				ctx.fillStyle = 'rgba(0,0,0,0.5)';
				ctx.fill();
			}
		}
	};
    
}

export default FeedbackCanvas;