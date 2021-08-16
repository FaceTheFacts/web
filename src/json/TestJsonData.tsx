export interface TotalData {
  [key: string]: TotalDataObj;
}

export interface TotalDataObj {
  name: string;
  party: string;
  electoral_data: Electoraldata;
  occupation: string[];
  cv: Cv|[];
  weblinks: string[];
  committees?: string|null;
  sidejobs?: Sidejob[]|null;
  votes?: Vote[]|null;
}
//Electoraldata
interface Electoraldata {
  state?: string;
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

//Cv
interface Cv {
  Raw: string;
  ShortDescription: string;
  Steps: Step[];
}
interface Step {
  Raw: string;
  Label: string;
  Date: string;
}
//Sidejobs
interface Sidejob {
  label: string;
  income_level: string;
  date: string;
  organisation: string;
  interval: string;
}
//Votes
interface Vote {
  poll_id: number;
  vote: string;
}

export const Partialdata: TotalData = {
	"177393": {
		"name": "Ulrika Sch\u00f6llner",
		"party": "Einzelbewerbung",
		"electoral_data": {
			"constituency": {
				"id": 10210,
				"label": "153 - Leipzig II",
				"result": [
					{
						"id": 146117,
						"label": "S\u00f6ren Pellmann",
						"party": "DIE LINKE",
						"result": 25.3
					},
					{
						"id": 78874,
						"label": "Thomas Feist",
						"party": "CDU",
						"result": 24.6
					},
					{
						"id": 31286,
						"label": "Siegbert Droese",
						"party": "AfD",
						"result": 15
					},
					{
						"id": 146819,
						"label": "Jens Katzek",
						"party": "SPD",
						"result": 13.7
					},
					{
						"id": 79204,
						"label": "Monika Lazar",
						"party": "Die Gr\u00fcnen",
						"result": 9.9
					},
					{
						"id": 146354,
						"label": "Friedrich Vosberg",
						"party": "FDP",
						"result": 5.8
					},
					{
						"id": 121690,
						"label": "Mathias Haschke",
						"party": "Die PARTEI",
						"result": 3
					},
					{
						"id": 31315,
						"label": "Karsten Kietz",
						"party": "FREIE W\u00c4HLER",
						"result": 1.2
					},
					{
						"id": 146741,
						"label": "Ute Elisabeth Gabelmann",
						"party": "PIRATEN",
						"result": 0.8
					},
					{
						"id": 148489,
						"label": "Frank Roeder",
						"party": "Einzelbewerbung",
						"result": 0.3
					},
					{
						"id": 148410,
						"label": "Gudrun Kimmerle",
						"party": "MLPD",
						"result": 0.2
					},
					{
						"id": 29648,
						"label": "Karsten Werner",
						"party": "B\u00fcSo",
						"result": 0.2
					}
				]
			}
		},
		"occupation": [],
		"cv": [],
		"weblinks": []
	},
	"177390": {
		"name": "Kilian Moser",
		"party": "Einzelbewerbung",
		"electoral_data": {
			"constituency": {
				"id": 10139,
				"label": "82 - Berlin-Neuk\u00f6lln",
				"result": [
					{
						"id": 79392,
						"label": "Fritz Felgentreu",
						"party": "SPD",
						"result": 26.8
					},
					{
						"id": 79002,
						"label": "Christina Schwarzer",
						"party": "CDU",
						"result": 24.5
					},
					{
						"id": 146082,
						"label": "Judith Benda",
						"party": "DIE LINKE",
						"result": 16.4
					},
					{
						"id": 117456,
						"label": "Susanna Kahlefeld",
						"party": "Die Gr\u00fcnen",
						"result": 11
					},
					{
						"id": 123047,
						"label": "Frank-Christian Hansel",
						"party": "AfD",
						"result": 10.7
					},
					{
						"id": 123307,
						"label": "Marcus Jensen",
						"party": "FDP",
						"result": 5.1
					},
					{
						"id": 146214,
						"label": "Antonietta Miro",
						"party": "Die PARTEI",
						"result": 3.6
					},
					{
						"id": 148381,
						"label": "Wolfgang R\u00fchlmann",
						"party": "GRAUE",
						"result": 0.8
					},
					{
						"id": 148384,
						"label": "J\u00f6rg Lang",
						"party": "Mieterpartei",
						"result": 0.5
					},
					{
						"id": 148452,
						"label": "Jens Irgang",
						"party": "NPD",
						"result": 0.2
					},
					{
						"id": 148312,
						"label": "Leona Meyer-Kasai",
						"party": "B\u00fcSo",
						"result": 0.2
					},
					{
						"id": 29139,
						"label": "Andrew Schl\u00fcter",
						"party": "MLPD",
						"result": 0.2
					}
				]
			}
		},
		"occupation": [],
		"cv": [],
		"weblinks": []
	},
	"177392": {
		"name": "Kai Hemsteeg",
		"party": "FREIE W\u00c4HLER",
		"electoral_data": {
			"state": "Nordrhein-Westfalen",
			"constituency": {
				"id": 10177,
				"label": "120 - Essen III",
				"result": [
					{
						"id": 79322,
						"label": "Matthias Hauer",
						"party": "CDU",
						"result": 37.1
					},
					{
						"id": 146810,
						"label": "Gereon Wolters",
						"party": "SPD",
						"result": 30.8
					},
					{
						"id": 146339,
						"label": "Tim Wortmann",
						"party": "FDP",
						"result": 8.3
					},
					{
						"id": 79358,
						"label": "Kai Gehring",
						"party": "Die Gr\u00fcnen",
						"result": 8.2
					},
					{
						"id": 147331,
						"label": "Stefan Keuter",
						"party": "AfD",
						"result": 8.1
					},
					{
						"id": 120901,
						"label": "Ayten Kaplan",
						"party": "DIE LINKE",
						"result": 6.5
					},
					{
						"id": 146605,
						"label": "Serge Nsibu-Nsibu",
						"party": "Einzelbewerbung",
						"result": 0.8
					},
					{
						"id": 147819,
						"label": "Martina Stalleicken",
						"party": "MLPD",
						"result": 0.1
					},
					{
						"id": 130462,
						"label": "Diana Kummer",
						"party": "DKP",
						"result": 0.1
					}
				]
			}
		},
		"occupation": [],
		"cv": [],
		"weblinks": []
	},
	"122141": {
		"name": "Wilfried Adamy",
		"party": "FREIE W\u00c4HLER",
		"electoral_data": {
			"constituency": {
				"id": 10176,
				"label": "119 - Essen II",
				"result": [
					{
						"id": 79313,
						"label": "Dirk Heidenblut",
						"party": "SPD",
						"result": 37.3
					},
					{
						"id": 79406,
						"label": "Jutta Eckenbach",
						"party": "CDU",
						"result": 26.6
					},
					{
						"id": 131165,
						"label": "Guido Reil",
						"party": "AfD",
						"result": 15.8
					},
					{
						"id": 146101,
						"label": "Daniel Kerekes",
						"party": "DIE LINKE",
						"result": 7.9
					},
					{
						"id": 146338,
						"label": "Thomas Spilker",
						"party": "FDP",
						"result": 6.6
					},
					{
						"id": 85448,
						"label": "G\u00f6n\u00fcl Eglence",
						"party": "Die Gr\u00fcnen",
						"result": 5.4
					},
					{
						"id": 118754,
						"label": "Horst Dotten",
						"party": "MLPD",
						"result": 0.2
					},
					{
						"id": 29715,
						"label": "Peter K\u00f6ster",
						"party": "DKP",
						"result": 0.2
					}
				]
			}
		},
		"occupation": [],
		"cv": [],
		"weblinks": []
	},
  "120155": {
    "name": "Johannes Vogel",
    "party": "FDP",
    "electoral_data": {
      "constituency": {
        "id": 10206,
        "label": "149 - Olpe - M\u00e4rkischer Kreis I",
        "result": [
          {
            "id": 79314,
            "label": "Matthias Heider",
            "party": "CDU",
            "result": 47.9
          },
          {
            "id": 146817,
            "label": "Nezahat Baradari",
            "party": "SPD",
            "result": 26.3
          },
          {
            "id": 147246,
            "label": "Klaus Heger",
            "party": "AfD",
            "result": 8.8
          },
          {
            "id": 120155,
            "label": "Johannes Vogel",
            "party": "FDP",
            "result": 8.8
          },
          {
            "id": 130373,
            "label": "Ingeborg Mohr-Simeonidis",
            "party": "DIE LINKE",
            "result": 4.8
          },
          {
            "id": 145974,
            "label": "Christian Hohn",
            "party": "Die Gr\u00fcnen",
            "result": 3.4
          }
        ]
      }
    },
    "occupation": [
      "MdB"
    ],
    "cv": {
      "Raw": "Zivildienst als ausgebildeter Rettungssanit\u00e4ter, Studium der Politikwissenschaft, Geschichte und des V\u00f6lkerrechts in Bonn, Abschluss Magister Artium 2009. Seit 2014 F\u00fchrungskraft bei der Bundesagentur f\u00fcr Arbeit, unter anderem Leiter Strategie- und Gesch\u00e4ftsentwicklung der Internationalen Abteilung (ZAV) und Gesch\u00e4ftsf\u00fchrer der Arbeitsagentur Wuppertal-Solingen.Bundesvorsitzender der Jungen Liberalen 2005 bis 2010. Mitglied des Deutschen Bundestags und arbeitsmarktpolitischer Sprecher der FDP-Bundestagsfraktion 2009 bis 2013. Seit 2007 Mitglied des FDP-Bundesvorstandes. Seit 2014 Generalsekret\u00e4r der Freien Demokraten NRW.\u00a0Seit 2021 stellvertretender Bundesvorsitzender der FDP. ",
      "ShortDescription": "Geboren am 29. April 1982\u00a0in Wermelskirchen;\u00a0evangelisch;\u00a0verheiratet.",
      "Steps": [
        {
          "Raw": "Studium der Politikwissenschaft",
          "Label": "Studium der Politikwissenschaft",
          "Date": ""
        },
        {
          "Raw": "Abschluss Magister Artium 2009",
          "Label": "Abschluss Magister Artium",
          "Date": "2009"
        },
        {
          "Raw": "Seit 2014 F\u00fchrungskraft bei der Bundesagentur f\u00fcr Arbeit",
          "Label": "F\u00fchrungskraft bei der Bundesagentur f\u00fcr Arbeit",
          "Date": "seit 2014"
        },
        {
          "Raw": "Mitglied des Deutschen Bundestags und arbeitsmarktpolitischer Sprecher der FDP-Bundestagsfraktion 2009 bis 2013",
          "Label": "Mitglied des Deutschen Bundestags und arbeitsmarktpolitischer Sprecher der FDP-Bundestagsfraktion 2009 bis 2013",
          "Date": "und 2009 bis 2013"
        },
        {
          "Raw": "Seit 2007 Mitglied des FDP-Bundesvorstandes",
          "Label": "Mitglied des FDP-Bundesvorstandes",
          "Date": "seit 2007"
        },
        {
          "Raw": "Seit 2014 Generalsekret\u00e4r der Freien Demokraten NRW",
          "Label": "Generalsekret\u00e4r der Freien Demokraten NRW",
          "Date": "seit 2014"
        },
        {
          "Raw": "Seit 2021 stellvertretender Bundesvorsitzender der FDP",
          "Label": "stellvertretender Bundesvorsitzender der FDP",
          "Date": "seit 2021"
        }
      ]
    },
    "weblinks": [
      "http://www.johannes-vogel.de",
      "https://www.facebook.com/johannesvogel",
      "https://twitter.com/johannesvogel",
      "https://www.instagram.com/johannesvogel/"
    ],
    "committees": "Ausw\u00e4rtiger Ausschuss",
    "sidejobs": [
      {
        "label": "Vortrag - European Union Study Group",
        "income_level": "1",
        "date": "2019-07-25",
        "organisation": "Harvard Universit\u00e4t, Center for European Studies",
        "interval": "einmalig"
      },
      {
        "label": "Vortrag - Modis Launch Event (DIS AG D\u00fcsseldorf)",
        "income_level": "1",
        "date": "2018-08-22",
        "organisation": "Prologo GmbH",
        "interval": "einmalig"
      }
    ],
    "votes": [
      {
        "poll_id": 4197,
        "vote": "no"
      },
      {
        "poll_id": 4198,
        "vote": "no"
      },
      {
        "poll_id": 4193,
        "vote": "yes"
      },
      {
        "poll_id": 4146,
        "vote": "abstain"
      },
      {
        "poll_id": 4199,
        "vote": "no"
      },
      {
        "poll_id": 4209,
        "vote": "no"
      },
      {
        "poll_id": 4140,
        "vote": "yes"
      },
      {
        "poll_id": 4142,
        "vote": "yes"
      },
      {
        "poll_id": 4123,
        "vote": "no"
      },
      {
        "poll_id": 4126,
        "vote": "abstain"
      },
      {
        "poll_id": 4098,
        "vote": "no"
      },
      {
        "poll_id": 4122,
        "vote": "no"
      },
      {
        "poll_id": 4097,
        "vote": "yes"
      },
      {
        "poll_id": 4124,
        "vote": "abstain"
      },
      {
        "poll_id": 4096,
        "vote": "yes"
      },
      {
        "poll_id": 4119,
        "vote": "yes"
      },
      {
        "poll_id": 4099,
        "vote": "abstain"
      },
      {
        "poll_id": 4085,
        "vote": "yes"
      },
      {
        "poll_id": 4083,
        "vote": "yes"
      },
      {
        "poll_id": 4018,
        "vote": "no"
      },
      {
        "poll_id": 3973,
        "vote": "no"
      },
      {
        "poll_id": 4082,
        "vote": "yes"
      },
      {
        "poll_id": 4034,
        "vote": "yes"
      },
      {
        "poll_id": 4027,
        "vote": "yes"
      },
      {
        "poll_id": 3959,
        "vote": "yes"
      },
      {
        "poll_id": 3957,
        "vote": "yes"
      },
      {
        "poll_id": 3965,
        "vote": "no"
      },
      {
        "poll_id": 3947,
        "vote": "yes"
      },
      {
        "poll_id": 3950,
        "vote": "no"
      },
      {
        "poll_id": 3942,
        "vote": "no"
      },
      {
        "poll_id": 3769,
        "vote": "yes"
      },
      {
        "poll_id": 3760,
        "vote": "no"
      },
      {
        "poll_id": 3710,
        "vote": "yes"
      },
      {
        "poll_id": 3714,
        "vote": "no"
      },
      {
        "poll_id": 3749,
        "vote": "no"
      },
      {
        "poll_id": 3667,
        "vote": "yes"
      },
      {
        "poll_id": 3669,
        "vote": "yes"
      },
      {
        "poll_id": 3631,
        "vote": "abstain"
      },
      {
        "poll_id": 3629,
        "vote": "abstain"
      },
      {
        "poll_id": 3599,
        "vote": "yes"
      },
      {
        "poll_id": 1762,
        "vote": "no"
      },
      {
        "poll_id": 3571,
        "vote": "yes"
      },
      {
        "poll_id": 3568,
        "vote": "yes"
      },
      {
        "poll_id": 3572,
        "vote": "yes"
      },
      {
        "poll_id": 3558,
        "vote": "no"
      },
      {
        "poll_id": 1761,
        "vote": "yes"
      },
      {
        "poll_id": 1769,
        "vote": "no"
      },
      {
        "poll_id": 1758,
        "vote": "no"
      },
      {
        "poll_id": 1754,
        "vote": "no"
      },
      {
        "poll_id": 1752,
        "vote": "no"
      },
      {
        "poll_id": 1753,
        "vote": "yes"
      },
      {
        "poll_id": 1745,
        "vote": "no"
      },
      {
        "poll_id": 1743,
        "vote": "no"
      },
      {
        "poll_id": 1737,
        "vote": "yes"
      },
      {
        "poll_id": 1738,
        "vote": "yes"
      },
      {
        "poll_id": 1735,
        "vote": "no"
      },
      {
        "poll_id": 1736,
        "vote": "no"
      },
      {
        "poll_id": 1734,
        "vote": "yes"
      },
      {
        "poll_id": 1724,
        "vote": "no"
      },
      {
        "poll_id": 1728,
        "vote": "yes"
      },
      {
        "poll_id": 1725,
        "vote": "no"
      },
      {
        "poll_id": 1727,
        "vote": "no"
      },
      {
        "poll_id": 1715,
        "vote": "yes"
      },
      {
        "poll_id": 1716,
        "vote": "yes"
      },
      {
        "poll_id": 1726,
        "vote": "yes"
      },
      {
        "poll_id": 1717,
        "vote": "no"
      },
      {
        "poll_id": 1713,
        "vote": "yes"
      },
      {
        "poll_id": 1706,
        "vote": "abstain"
      },
      {
        "poll_id": 1707,
        "vote": "no"
      },
      {
        "poll_id": 1689,
        "vote": "yes"
      },
      {
        "poll_id": 1688,
        "vote": "yes"
      },
      {
        "poll_id": 1686,
        "vote": "no"
      },
      {
        "poll_id": 1685,
        "vote": "abstain"
      },
      {
        "poll_id": 1684,
        "vote": "abstain"
      },
      {
        "poll_id": 1687,
        "vote": "yes"
      },
      {
        "poll_id": 1683,
        "vote": "no"
      },
      {
        "poll_id": 1680,
        "vote": "no"
      },
      {
        "poll_id": 1681,
        "vote": "abstain"
      },
      {
        "poll_id": 1679,
        "vote": "yes"
      },
      {
        "poll_id": 1678,
        "vote": "yes"
      },
      {
        "poll_id": 1677,
        "vote": "yes"
      },
      {
        "poll_id": 1671,
        "vote": "no"
      },
      {
        "poll_id": 1637,
        "vote": "no"
      },
      {
        "poll_id": 1639,
        "vote": "yes"
      },
      {
        "poll_id": 1640,
        "vote": "yes"
      },
      {
        "poll_id": 1638,
        "vote": "no"
      },
      {
        "poll_id": 1641,
        "vote": "yes"
      },
      {
        "poll_id": 1636,
        "vote": "yes"
      },
      {
        "poll_id": 1627,
        "vote": "yes"
      },
      {
        "poll_id": 1600,
        "vote": "no"
      },
      {
        "poll_id": 1599,
        "vote": "no"
      },
      {
        "poll_id": 1604,
        "vote": "yes"
      },
      {
        "poll_id": 1597,
        "vote": "abstain"
      },
      {
        "poll_id": 1598,
        "vote": "abstain"
      },
      {
        "poll_id": 1596,
        "vote": "yes"
      },
      {
        "poll_id": 1593,
        "vote": "no"
      },
      {
        "poll_id": 1592,
        "vote": "yes"
      },
      {
        "poll_id": 1591,
        "vote": "no"
      },
      {
        "poll_id": 1587,
        "vote": "yes"
      },
      {
        "poll_id": 1585,
        "vote": "no"
      },
      {
        "poll_id": 1586,
        "vote": "no"
      },
      {
        "poll_id": 1584,
        "vote": "no"
      },
      {
        "poll_id": 1572,
        "vote": "no"
      },
      {
        "poll_id": 1571,
        "vote": "no"
      },
      {
        "poll_id": 1570,
        "vote": "no"
      },
      {
        "poll_id": 1568,
        "vote": "abstain"
      },
      {
        "poll_id": 1569,
        "vote": "no"
      },
      {
        "poll_id": 1565,
        "vote": "yes"
      },
      {
        "poll_id": 1530,
        "vote": "no"
      },
      {
        "poll_id": 1525,
        "vote": "no"
      },
      {
        "poll_id": 1524,
        "vote": "no"
      },
      {
        "poll_id": 1507,
        "vote": "no"
      },
      {
        "poll_id": 1510,
        "vote": "no"
      },
      {
        "poll_id": 1506,
        "vote": "yes"
      },
      {
        "poll_id": 1509,
        "vote": "yes"
      },
      {
        "poll_id": 1505,
        "vote": "yes"
      },
      {
        "poll_id": 1508,
        "vote": "yes"
      },
      {
        "poll_id": 1354,
        "vote": "no"
      },
      {
        "poll_id": 1307,
        "vote": "yes"
      },
      {
        "poll_id": 1306,
        "vote": "yes"
      },
      {
        "poll_id": 1284,
        "vote": "yes"
      },
      {
        "poll_id": 1286,
        "vote": "yes"
      },
      {
        "poll_id": 1287,
        "vote": "yes"
      },
      {
        "poll_id": 1285,
        "vote": "yes"
      },
      {
        "poll_id": 1283,
        "vote": "abstain"
      },
      {
        "poll_id": 1282,
        "vote": "no"
      },
      {
        "poll_id": 1279,
        "vote": "no"
      },
      {
        "poll_id": 1262,
        "vote": "no"
      },
      {
        "poll_id": 1263,
        "vote": "no"
      },
      {
        "poll_id": 1261,
        "vote": "no"
      },
      {
        "poll_id": 1246,
        "vote": "yes"
      },
      {
        "poll_id": 1245,
        "vote": "yes"
      },
      {
        "poll_id": 1239,
        "vote": "yes"
      },
      {
        "poll_id": 1238,
        "vote": "yes"
      },
      {
        "poll_id": 1237,
        "vote": "yes"
      },
      {
        "poll_id": 1240,
        "vote": "yes"
      },
      {
        "poll_id": 1244,
        "vote": "yes"
      },
      {
        "poll_id": 1241,
        "vote": "yes"
      }
    ]
  }
}
