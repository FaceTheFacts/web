import { germanTranslator } from './germanTranslator';
test("If the input is 'yes', it should return 'ja'.", () => {
	expect(germanTranslator('yes')).toBe('ja');
});
test("If the input is 'no', it should return 'nein'.", () => {
	expect(germanTranslator('no')).toBe('nein');
});
test("If the input is 'abstain', it should return 'enthalten'.", () => {
	expect(germanTranslator('abstain')).toBe('enthalten');
});
test("If the input is 'none', it should return 'nicht abg'.", () => {
	expect(germanTranslator('none')).toBe('nicht abg');
});
test("If the input is 'something', it should return 'undefined'.", () => {
	expect(germanTranslator('something')).toBe('undefined');
});
