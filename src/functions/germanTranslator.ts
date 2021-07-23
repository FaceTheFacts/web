export const germanTranslator = (word: string|undefined): string|undefined => {
	let translated: string|undefined;
	switch (word) {
	case 'yes':
		translated = 'ja';
		break;
	case 'no':
		translated = 'nein';
		break;
	case 'abstain':
		translated = 'enth';
		break;
	case 'none':
		translated = 'nicht abg';
		break;
	case 'no_show':
		translated = 'abwesend';
		break;
	default:
		translated = undefined;
	}
	return translated;
};
