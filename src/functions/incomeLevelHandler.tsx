export const incomeLevelHandler = (level: string): string => {
	switch (level) {
		case '1':
			return '1.000 € bis 3.500 €';
		case '2':
			return '3.500 € bis 7.000 €';
		case '3':
			return '7.000 € bis 15.000 €';
		case '4':
			return '15.000 € bis 30.000 €';
		case '5':
			return '30.000 € bis 50.000 €';
		case '6':
			return '50.000 € bis 75.000 €';
		case '7':
			return '75.000 € bis 100.000 €';
		case '8':
			return '100.000 € bis 150.000 €';
		case '9':
			return '150.000 € bis 250.000 €';
		case '10':
			return 'ab 250.000 €';
		default:
			return '';
	}
};
