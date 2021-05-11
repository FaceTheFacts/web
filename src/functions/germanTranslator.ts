export const germanTranslator = (word: string): string => {
	let translated: string;
	switch (word) {
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
	case 'absent':
		translated = 'abwesend';
		break;
	default:
		translated = 'undefined';
	}
	return translated;
};
