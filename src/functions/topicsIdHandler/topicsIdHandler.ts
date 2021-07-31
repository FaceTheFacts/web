export const topicsIdHandler = (topic: string): Array<number> => {
	switch (topic) {
		case 'Digitale Agenda':
			return [39, 1, 45];
		case 'Arbeit und Soziales':
			return [14, 2, 25];
		case 'Bau und Wohnen':
			return [18];
		case 'Bildung und Forschung':
			return [3, 49, 15, 51];
		case 'Europäische Union':
			return [4];
		case 'Ernährung und Landwirtschaft':
			return [5];
		case 'Gesundheit':
			return [28];
		case 'Inneres':
			return [23, 38];
		case 'Kultur und Medien':
			return [7, 45];
		case 'Menschenrechte':
			return [25, 11, 43];
		case 'Recht und Verbraucherschutz':
			return [44, 8];
		case 'Tourismus':
			return [47, 12];
		case 'Umwelt':
			return [29, 9, 48, 50];
		case 'Infrastruktur':
			return [40, 1, 10];
		case 'Wirtschaft und Energie':
			return [20, 11, 19];
		case 'Entwicklung':
			return [17];
		case 'Auswärtiges':
			return [21];
		case 'Finanzen':
			return [41, 22];
		case 'Haushalt':
			return [42];
		case 'Familie':
			return [34, 16, 35, 36, 37];
		case 'Sport':
			return [46, 12];
		case 'Verteidigung':
			return [13, 21];
		case 'Parlamentsangelegenheiten':
			return [30, 53, 27];
		case 'Nachrichtendienste':
			return [4197, 4083];
		default:
			return [0];
	}
};
