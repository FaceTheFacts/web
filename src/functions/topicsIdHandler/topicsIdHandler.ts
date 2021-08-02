
export const topicsIdHandler = (topics: string[]): Array<number> => {
	const topicArray: Array<number> = []
	topics.map((topic: string): void => {
		switch (topic) {
		case 'Digitale Agenda':
			topicArray.push(39, 1, 45);
			break;
		case 'Arbeit und Soziales':
			topicArray.push(14, 2, 25);
			break;
		case 'Bau und Wohnen':
			topicArray.push(18);
			break;
		case 'Bildung und Forschung':
			topicArray.push(3, 49, 15, 51);
			break;
		case 'Europäische Union':
			topicArray.push(4);
			break;
		case 'Ernährung und Landwirtschaft':
			topicArray.push(5);
			break;
		case 'Gesundheit':
			topicArray.push(28);
			break;
		case 'Inneres':
			topicArray.push(23, 38);
			break;
		case 'Kultur und Medien':
			topicArray.push(7, 45);
			break;
		case 'Menschenrechte':
			topicArray.push(25, 11, 43);
			break;
		case 'Recht und Verbraucherschutz':
			topicArray.push(44, 8);
			break;
		case 'Tourismus':
			topicArray.push(47, 12);
			break;
		case 'Umwelt':
			topicArray.push(29, 9, 48, 50);
			break;
		case 'Infrastruktur':
			topicArray.push(40, 1, 10);
			break;
		case 'Wirtschaft und Energie':
			topicArray.push(20, 11, 19);
			break;
		case 'Entwicklung':
			topicArray.push(17);
			break;
		case 'Auswärtiges':
			topicArray.push(21);
			break;
		case 'Finanzen':
			topicArray.push(41, 22);
			break;
		case 'Haushalt':
			topicArray.push(42);
			break;
		case 'Familie':
			topicArray.push(34, 16, 35, 36, 37);
			break;
		case 'Sport':
			topicArray.push(46, 12);
			break;
		case 'Verteidigung':
			topicArray.push(13, 21);
			break;
		case 'Parlamentsangelegenheiten':
			topicArray.push(30, 53, 27);
			break;
		case 'Nachrichtendienste':
			topicArray.push(4197, 4083);
			break;
		default:
			topicArray.push(0);
	}
});
	return topicArray
};
