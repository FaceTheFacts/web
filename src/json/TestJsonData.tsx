interface TotalData {
  [key: string]: TotalDataObj;
}

interface TotalDataObj {
  name: string;
  party: string;
  electoral_data: Electoraldata|Electoraldata2;
  occupation: any[];
  cv: any[];
  weblinks: any[];
}

interface Electoraldata {
  constituency: Constituency;
}

interface Electoraldata2 {
  state: string;
  constituency: Constituency;
}

interface Constituency {
  id: number;
  label: string;
  result: Result[];
}

interface Result {
  id: number;
  label: string;
  party: string;
  result: number;
}


export const Partialdata: TotalData = {
	'177393': {
		'name': 'Ulrika Sch\u00f6llner',
		'party': 'Einzelbewerbung',
		'electoral_data': {
			'constituency': {
				'id': 10210,
				'label': '153 - Leipzig II',
				'result': [
					{
						'id': 146117,
						'label': 'S\u00f6ren Pellmann',
						'party': 'DIE LINKE',
						'result': 25.3
					},
					{
						'id': 78874,
						'label': 'Thomas Feist',
						'party': 'CDU',
						'result': 24.6
					},
					{
						'id': 31286,
						'label': 'Siegbert Droese',
						'party': 'AfD',
						'result': 15
					},
					{
						'id': 146819,
						'label': 'Jens Katzek',
						'party': 'SPD',
						'result': 13.7
					},
					{
						'id': 79204,
						'label': 'Monika Lazar',
						'party': 'Die Gr\u00fcnen',
						'result': 9.9
					},
					{
						'id': 146354,
						'label': 'Friedrich Vosberg',
						'party': 'FDP',
						'result': 5.8
					},
					{
						'id': 121690,
						'label': 'Mathias Haschke',
						'party': 'Die PARTEI',
						'result': 3
					},
					{
						'id': 31315,
						'label': 'Karsten Kietz',
						'party': 'FREIE W\u00c4HLER',
						'result': 1.2
					},
					{
						'id': 146741,
						'label': 'Ute Elisabeth Gabelmann',
						'party': 'PIRATEN',
						'result': 0.8
					},
					{
						'id': 148489,
						'label': 'Frank Roeder',
						'party': 'Einzelbewerbung',
						'result': 0.3
					},
					{
						'id': 148410,
						'label': 'Gudrun Kimmerle',
						'party': 'MLPD',
						'result': 0.2
					},
					{
						'id': 29648,
						'label': 'Karsten Werner',
						'party': 'B\u00fcSo',
						'result': 0.2
					}
				]
			}
		},
		'occupation': [],
		'cv': [],
		'weblinks': []
	},
	'177390': {
		'name': 'Kilian Moser',
		'party': 'Einzelbewerbung',
		'electoral_data': {
			'constituency': {
				'id': 10139,
				'label': '82 - Berlin-Neuk\u00f6lln',
				'result': [
					{
						'id': 79392,
						'label': 'Fritz Felgentreu',
						'party': 'SPD',
						'result': 26.8
					},
					{
						'id': 79002,
						'label': 'Christina Schwarzer',
						'party': 'CDU',
						'result': 24.5
					},
					{
						'id': 146082,
						'label': 'Judith Benda',
						'party': 'DIE LINKE',
						'result': 16.4
					},
					{
						'id': 117456,
						'label': 'Susanna Kahlefeld',
						'party': 'Die Gr\u00fcnen',
						'result': 11
					},
					{
						'id': 123047,
						'label': 'Frank-Christian Hansel',
						'party': 'AfD',
						'result': 10.7
					},
					{
						'id': 123307,
						'label': 'Marcus Jensen',
						'party': 'FDP',
						'result': 5.1
					},
					{
						'id': 146214,
						'label': 'Antonietta Miro',
						'party': 'Die PARTEI',
						'result': 3.6
					},
					{
						'id': 148381,
						'label': 'Wolfgang R\u00fchlmann',
						'party': 'GRAUE',
						'result': 0.8
					},
					{
						'id': 148384,
						'label': 'J\u00f6rg Lang',
						'party': 'Mieterpartei',
						'result': 0.5
					},
					{
						'id': 148452,
						'label': 'Jens Irgang',
						'party': 'NPD',
						'result': 0.2
					},
					{
						'id': 148312,
						'label': 'Leona Meyer-Kasai',
						'party': 'B\u00fcSo',
						'result': 0.2
					},
					{
						'id': 29139,
						'label': 'Andrew Schl\u00fcter',
						'party': 'MLPD',
						'result': 0.2
					}
				]
			}
		},
		'occupation': [],
		'cv': [],
		'weblinks': []
	},
	'177392': {
		'name': 'Kai Hemsteeg',
		'party': 'FREIE W\u00c4HLER',
		'electoral_data': {
			'state': 'Nordrhein-Westfalen',
			'constituency': {
				'id': 10177,
				'label': '120 - Essen III',
				'result': [
					{
						'id': 79322,
						'label': 'Matthias Hauer',
						'party': 'CDU',
						'result': 37.1
					},
					{
						'id': 146810,
						'label': 'Gereon Wolters',
						'party': 'SPD',
						'result': 30.8
					},
					{
						'id': 146339,
						'label': 'Tim Wortmann',
						'party': 'FDP',
						'result': 8.3
					},
					{
						'id': 79358,
						'label': 'Kai Gehring',
						'party': 'Die Gr\u00fcnen',
						'result': 8.2
					},
					{
						'id': 147331,
						'label': 'Stefan Keuter',
						'party': 'AfD',
						'result': 8.1
					},
					{
						'id': 120901,
						'label': 'Ayten Kaplan',
						'party': 'DIE LINKE',
						'result': 6.5
					},
					{
						'id': 146605,
						'label': 'Serge Nsibu-Nsibu',
						'party': 'Einzelbewerbung',
						'result': 0.8
					},
					{
						'id': 147819,
						'label': 'Martina Stalleicken',
						'party': 'MLPD',
						'result': 0.1
					},
					{
						'id': 130462,
						'label': 'Diana Kummer',
						'party': 'DKP',
						'result': 0.1
					}
				]
			}
		},
		'occupation': [],
		'cv': [],
		'weblinks': []
	},
	'122141': {
		'name': 'Wilfried Adamy',
		'party': 'FREIE W\u00c4HLER',
		'electoral_data': {
			'constituency': {
				'id': 10176,
				'label': '119 - Essen II',
				'result': [
					{
						'id': 79313,
						'label': 'Dirk Heidenblut',
						'party': 'SPD',
						'result': 37.3
					},
					{
						'id': 79406,
						'label': 'Jutta Eckenbach',
						'party': 'CDU',
						'result': 26.6
					},
					{
						'id': 131165,
						'label': 'Guido Reil',
						'party': 'AfD',
						'result': 15.8
					},
					{
						'id': 146101,
						'label': 'Daniel Kerekes',
						'party': 'DIE LINKE',
						'result': 7.9
					},
					{
						'id': 146338,
						'label': 'Thomas Spilker',
						'party': 'FDP',
						'result': 6.6
					},
					{
						'id': 85448,
						'label': 'G\u00f6n\u00fcl Eglence',
						'party': 'Die Gr\u00fcnen',
						'result': 5.4
					},
					{
						'id': 118754,
						'label': 'Horst Dotten',
						'party': 'MLPD',
						'result': 0.2
					},
					{
						'id': 29715,
						'label': 'Peter K\u00f6ster',
						'party': 'DKP',
						'result': 0.2
					}
				]
			}
		},
		'occupation': [],
		'cv': [],
		'weblinks': []
	}
}
