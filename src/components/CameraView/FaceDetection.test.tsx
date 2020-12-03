import { BlazeFaceModel } from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs-node';
import FaceDetection from './FaceDetection';
import 'jest-canvas-mock';

let faceDetection: FaceDetection | null;

// beforeEach(() => {
//     // setup new instance of FaceDetection for every test
//     faceDetection = new FaceDetection();
// });

afterEach(() => {
	// cleanup on exiting
	faceDetection = null
});

// it('loads the blazeface model', async () => {
//     expect.assertions(1)
//     // given
//     faceDetection = new FaceDetection();

//     // when
//     const model = await faceDetection.loadModel();
//     console.log(model)
//     //then
//     expect(faceDetection.model).toBeInstanceOf(BlazeFaceModel)
    

// })
// describe('integration test', () => {

        

// })