export const germanTranslator = (word: string): string => {
	let translated: string;
	switch (word) {
		// eslint-disable-next-line
		case 'yes':
			translated = 'ja';
			break;
		case 'no':
			translated = 'nein';
			break;
		case 'abstain':
			translated = 'enthalten';
			break;
		case 'none':
			translated = 'nicht abg';
			break;
		default:
			translated = 'undefined';
	}
	return translated;
};
