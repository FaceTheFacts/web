import CharacterRecognition from './CharacterRecognition';
import 'tesseract.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let characterRecognition: CharacterRecognition | null = null;

beforeEach(() => {
	const candidates = [
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
	];

	characterRecognition = new CharacterRecognition(candidates);
});

describe('unittest', () => {
	it('receives the right candidates', () => {
		// given
		const candidates = [{ name: 'test', id: 22 }];

		// when
		const charRec = new CharacterRecognition(candidates);

		// then
		expect(charRec.candidates).toEqual(candidates);
	});
});
// describe('integration test', () => {
//     it('creates the tesseract scheduler', () => {
//         expect(characterRecognition?.scheduler).not.toBe(undefined);
//     });
//     it('creates the tesseract workers', async () => {
//         // given
//         expect.assertions(1);

//         // when
//         const res = await characterRecognition?.initialise();
//         await characterRecognition?.initialise().then((res) => {
//             // then
//             expect(res).toEqual('successfully initialised Tesseract');
//             expect(characterRecognition?.scheduler.getNumWorkers()).toStrictEqual(1);
//         });

//         // then
//         expect(res).toEqual('successfully initialised Tesseract');
//     });
// });
