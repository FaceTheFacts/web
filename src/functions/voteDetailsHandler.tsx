interface PollDataHard {
	id: number;
	judge: string;
	Gesamt: Array<number>;
	CDU: Array<number>;
	SPD: Array<number>;
	FDP: Array<number>;
	Grünen: Array<number>;
	LINKE: Array<number>;
	AfD: Array<number>;
	fraktionslos: Array<number>;
}

export const voteDetailsHandler = (id: number | undefined): PollDataHard => {
	const Poll1 = {
		id: 1584,
		judge: 'Antrag angenommen',
		Gesamt: [362, 222, 60, 65],
		CDU: [216, 3, 1, 26],
		SPD: [145, 0, 0, 8],
		FDP: [0, 72, 0, 8],
		Grünen: [1, 61, 0, 5],
		LINKE: [0, 0, 59, 10],
		AfD: [0, 84, 0, 8],
		fraktionslos: [0, 2, 0, 0],
	};

	const Poll2 = {
		id: 1603,
		judge: 'Antrag abgelehnt',
		Gesamt: [250, 475, 1, 83],
		CDU: [0, 224, 0, 22],
		SPD: [0, 136, 0, 16],
		FDP: [74, 0, 0, 6],
		Grünen: [0, 58, 0, 9],
		LINKE: [0, 57, 0, 12],
		AfD: [74, 0, 1, 17],
		fraktionslos: [2, 0, 0, 1],
	};

	const Poll3 = {
		id: 1639,
		judge: 'Antrag abgelehnt',
		Gesamt: [185, 458, 5, 61],
		CDU: [0, 232, 0, 14],
		SPD: [0, 142, 0, 10],
		FDP: [57, 12, 4, 7],
		Grünen: [65, 0, 0, 2],
		LINKE: [62, 0, 0, 7],
		AfD: [1, 72, 0, 18],
		fraktionslos: [0, 0, 1, 3],
	};

	const Poll4 = {
		id: 1758,
		judge: 'Antrag abgelehnt',
		Gesamt: [292, 379, 3, 35],
		CDU: [146, 89, 2, 9],
		SPD: [94, 48, 0, 10],
		FDP: [15, 59, 1, 5],
		Grünen: [7, 60, 0, 0],
		LINKE: [24, 38, 0, 7],
		AfD: [4, 83, 0, 3],
		fraktionslos: [2, 2, 0, 1],
	};

	const Poll5 = {
		id: 3602,
		judge: 'Antrag angenommen',
		Gesamt: [369, 214, 63, 63],
		CDU: [225, 0, 4, 17],
		SPD: [144, 0, 0, 8],
		FDP: [0, 75, 0, 5],
		Grünen: [0, 1, 59, 7],
		LINKE: [0, 57, 0, 12],
		AfD: [0, 79, 0, 10],
		fraktionslos: [0, 2, 0, 4],
	};

	const Poll6 = {
		id: 3936,
		judge: 'Antrag abgelehnt',
		Gesamt: [59, 476, 1, 113],
		CDU: [0, 212, 0, 34],
		SPD: [0, 124, 2, 26],
		FDP: [0, 72, 0, 8],
		Grünen: [1, 0, 58, 8],
		LINKE: [58, 0, 0, 11],
		AfD: [0, 67, 0, 22],
		fraktionslos: [0, 1, 1, 4],
	};

	const Poll7 = {
		id: 4088,
		judge: 'Antrag abgelehnt',
		Gesamt: [118, 382, 67, 141],
		CDU: [0, 209, 0, 35],
		SPD: [0, 119, 0, 33],
		FDP: [0, 53, 0, 27],
		Grünen: [58, 0, 0, 9],
		LINKE: [57, 0, 0, 12],
		AfD: [1, 1, 66, 20],
		fraktionslos: [2, 0, 0, 4],
	};

	const Poll8 = {
		id: 4098,
		judge: 'Antrag angenommen',
		Gesamt: [342, 250, 64, 53],
		CDU: [207, 21, 5, 12],
		SPD: [135, 2, 3, 12],
		FDP: [0, 77, 0, 3],
		Grünen: [0, 1, 56, 10],
		LINKE: [0, 60, 0, 9],
		AfD: [0, 83, 0, 5],
		fraktionslos: [0, 5, 0, 1],
	};

	switch (id) {
	case Poll8.id:
		return Poll8;
	case Poll7.id:
		return Poll7;
	case Poll6.id:
		return Poll6;
	case Poll5.id:
		return Poll5;
	case Poll4.id:
		return Poll4;
	case Poll3.id:
		return Poll3;
	case Poll2.id:
		return Poll2;
	default:
		return Poll1;
	}
};
