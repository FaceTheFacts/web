export const occupationHandler = (occupation: string): string[] => {
	let firstPartIndex: number;
	if (occupation.includes('Bundesministerin für Umwelt, Naturschutz und nukleare Sicherheit')) {
		firstPartIndex = occupation.lastIndexOf(',');
	} else {
		firstPartIndex = occupation.indexOf(',');
	}

	let firstPart: string;
	let secondPart = '';
	const stringHandler = (secondPart: string): string => {
		switch (secondPart) {
		case 'Fraktionsvorsitzender DIE LINKE im Bundestag':
			return 'Fraktionsvorsitzender';
		case 'Fraktionsvorsitzende DIE LINKE im Bundestag':
			return 'Fraktionsvorsitzende';
		case 'Fraktionsvorsitzender SPD im Bundestag':
			return 'Fraktionsvorsitzender';
		case 'Fraktionsvorsitzende BÜNDNIS 90/DIE GRÜNE im Bundestag':
			return 'Fraktionsvorsitzende';
		case 'Fraktionsvorsitzender BÜNDNIS 90/DIE GRÜNE im Bundestag':
			return 'Fraktionsvorsitzender';
		case 'Fraktionsvorsitzender FDP im Bundestag':
			return 'Fraktionsvorsitzender';
		case 'Fraktionsvorsitzender Afd im Bundestag':
			return 'Fraktionsvorsitzender';
		case 'Fraktionsvorsitzende Afd im Bundestag':
			return 'Fraktionsvorsitzende';
		case 'Fraktionsvorsitzender CDU/CSU im Bundestag':
			return 'Fraktionsvorsitzender';
			/* case 'CSU-Landesgruppenchef':
                secondPart = 'Landesgruppenchef'; */
		default:
			return secondPart;
		}
	};

	const ministryHandler = (secondPart: string): string => {
		switch (secondPart) {
		case 'Bundesminister des Auswärtigen':
			return 'Außenminister';
		case 'Bundesminister für Wirtschaft und Energie':
			return 'Bundeswirtschaftsminister';
		case 'Bundesministerin für Justiz und Verbraucherschutz':
			return 'Bundesjustizministerin';
		case 'Bundesminister für Arbeit und Soziales':
			return 'Bundesarbeitsminister';
		case 'Bundesminister für Gesundheit':
			return 'Bundesgesundheitsminister';
		case 'Bundesminister für Verkehr und digitale Infrastruktur':
			return 'Bundesverkehrsminister';
		case 'Bundesministerin für Umwelt, Naturschutz und nukleare Sicherheit':
			return 'Bundesumweltministerin';
		case 'Bundesministerin für Bildung und Forschung':
			return 'Bundesbildungsministerin';
		case 'Bundesminister für wirtschaftliche Zusammenarbeit und Entwicklung':
			return 'Bundesentwicklungshilfeminister';
		case 'Bundesminister für besondere Aufgaben und Chef des Bundeskanzleramts':
			return 'Chef des Bundeskanzleramts';
		default:
			return secondPart;
		}
	};

	const stateHandler = (secondPart: string): string => {
		switch (secondPart) {
		case 'Ministerpräsident NRW':
			return 'Ministerpräsident';
		case 'Regierender Bürgermeister von Berlin':
			return 'Bürgermeister von Berlin';
		default:
			return secondPart;
		}
	};

	const inputHandler = (part: string): string => {
		return stringHandler(ministryHandler(stateHandler(part)));
	};

	if (firstPartIndex !== -1) {
		firstPart = occupation.slice(0, firstPartIndex);
		secondPart = occupation.slice(firstPartIndex + 2);
		const secondPartIndex: number = secondPart.indexOf(',');
		let thirdPart: string;
		let realSecondPart: string;

		if (secondPartIndex !== -1) {
			realSecondPart = secondPart.slice(0, secondPartIndex);
			thirdPart = secondPart.slice(secondPartIndex + 2);
			return [inputHandler(firstPart), inputHandler(realSecondPart), inputHandler(thirdPart)]
		} else {
			return [inputHandler(firstPart), inputHandler(secondPart)]
		}
	} else {
		return [occupation]
	}
};
