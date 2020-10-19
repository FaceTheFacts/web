import { Candidate } from './Types';

export const amthor: Candidate = {
	id: 1,
	name: 'Philipp Amthor',
	chips: ['CDU/CSU', 'Mitglied des Bundestags'],
	image: new URL(
		'https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr'
	),
	party: 'CDU/CSU',
	sideJobs: [
		{
			organisation: 'Sparkasse Uecker-Randow',
			position: 'Mitglied des Verwaltungsrates',
		},
	],
	polls: [
		{
			subtitle: 'Beschlussempfehlung',
			title: 'Bundeswehreinsatz in Afghanistan',
			candidateVote: 'yes' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Verteidigung',
				icon: 'assets/icon/shield-light.svg',
			},
			abstract:
				'Beschlussempfehlung des auswärtigen Ausschusses zum Antrag der Regierung: Fortsetzung der Beteiligung bewaffneter deutscher Streitkräfte am Nato-geführten Einsatz. Support für die Ausbildung, Beratung und Unterstützung der afghanischen Verteidigung- und Sicherheitskräfte im Land.',
			reason:
				'Dem Beschluss wird zugestimmt, da ein strategisches Interesse vorliegt. Zudem stärkt der Einsatz der Bundeswehr die Demokratie in der Region.',
			result: {
				total: {
					yes: 356,
					no: 159,
					abstain: 21,
					none: 173,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 200,
						no: 0,
						abstain: 0,
						none: 46,
						partyTotal: 246,
					},
				],
			},
		},
		{
			subtitle: 'Beschlussempfehlung',
			title: 'Geflüchtete aus Moria in Deutschland aufnehmen',
			candidateVote: 'no' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Heimat',
				icon: 'assets/icon/landmark-light.svg',
			},
			abstract:
				'Antrag der Fraktion DIE LINKE, die Geflüchteten aus dem EU-Hotspot Moria in Deutschland aufzunehmen und sich auf EU-Ebene für die Abschaffung von EU-Hotspots einzusetzen.',
			reason: 'keine Begründung',
			result: {
				total: {
					yes: 59,
					no: 476,
					abstain: 61,
					none: 113,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 0,
						no: 212,
						abstain: 0,
						none: 34,
						partyTotal: 246,
					},
				],
			},
		},
		{
			subtitle: '',
			title: 'Finanzielle Entlastung für Kommunen',
			candidateVote: 'yes' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Finanzen',
				icon: 'assets/icon/sack-dollar-light.svg',
			},
			abstract:
				'Mit einer Änderung des Grundgesetzes beabsichtigen die Regierungsfraktionen CDU/CSU und SPD die stärkere finanzielle Entlastung der Kommunen während der COVID-19-Pandemie.',
			reason: 'keine Begründung',
			result: {
				total: {
					yes: 571,
					no: 67,
					abstain: 0,
					none: 71,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 234,
						no: 0,
						abstain: 0,
						none: 12,
						partyTotal: 246,
					},
				],
			},
		},
		{
			subtitle: 'Gesetzesentwurf',
			title: 'Verkleinerung des Bundestages',
			candidateVote: 'no' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Justiz',
				icon: 'assets/icon/balance-scale-left-light.svg',
			},
			abstract:
				'Gesetzesentwurf von Grünen, Linken und FDP, das Wahlrecht so zu verändern, dass ein weiteres Anwachsen der Abgeordnetenzahl im deutschen Bundestag bei der nächsten Bundestagswahl verhindert werde.',
			reason: 'keine Begründung',
			result: {
				total: {
					yes: 261,
					no: 367,
					abstain: 7,
					none: 74,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 0,
						no: 229,
						abstain: 0,
						none: 17,
						partyTotal: 246,
					},
				],
			},
		},
		{
			subtitle: 'Antrag',
			title: 'Regelsatz der Grundsicherung erhöhen',
			candidateVote: 'no' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Soziales',
				icon: 'assets/icon/user-friends-light.svg',
			},
			abstract:
				'Mit ihrem Antrag fordert die Fraktion Bündnis 90/Die Grünen die Bundesregierung auf, den Regelsatz der Grundsicherung zu erhöhen, um Personen ärmerer Bevölkerungsschichten vor finanziellen Notlagen zu schützen.',
			reason: 'keine Begründung',
			result: {
				total: {
					yes: 128,
					no: 451,
					abstain: 70,
					none: 60,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 0,
						no: 229,
						abstain: 0,
						none: 17,
						partyTotal: 246,
					},
				],
			},
		},
		{
			subtitle: 'Gesetzesentwürfe ',
			title: 'Organspenden-Reform: Zustimmungslösung',
			candidateVote: 'no' as 'yes' | 'no' | 'abstain' | 'none',
			chip: {
				name: 'Gesundheit',
				icon: 'assets/icon/heartbeat-light.svg',
			},
			abstract:
				'Überfraktionell Gesetzesentwurf das Organspendemodell in Deutschland zu reformieren. Die Abgeordneten entscheiden über die Einführung einer Widerspruchslösung oder einer Zustimmungslösung.',
			reason: 'keine Begründung',
			result: {
				total: {
					yes: 432,
					no: 200,
					abstain: 37,
					none: 40,
				},
				partyResult: [
					{
						partyName: 'CDU/CSU',
						yes: 160,
						no: 66,
						abstain: 9,
						none: 11,
						partyTotal: 246,
					},
				],
			},
		},
	],
	controversies: [
		{
			label: 'Lobbyismus-Affäre',
			articles: [
				{
					label: 'Geschäftsführer von Augustus Intelligence lässt Amt ruhen',
					image: new URL(
						'https://cdn.prod.www.spiegel.de/images/e4f16506-cc40-4023-a068-8c33a57bf098_w948_r1.77_fpx39.81_fpy49.98.jpg'
					),
					url: new URL(
						'https://www.spiegel.de/wirtschaft/unternehmen/affaere-um-philipp-amthor-geschaeftsfuehrer-von-augustus-intelligence-laesst-amt-ruhen-a-6577f286-2dc0-4f74-a08c-a2536e86a87d'
					),
					publisher: 'spiegel',
				},
				{
					label: 'Für diese merkwürdige Firma hat sich Philipp Amthor engagiert',
					image: new URL(
						'https://www.handelsblatt.com/images/philipp-amthor/25914394/3-format2020.jpg'
					),
					url: new URL(
						'https://www.handelsblatt.com/politik/deutschland/augustus-intelligence-fuer-diese-merkwuerdige-firma-hat-sich-philipp-amthor-engagiert/25914246.html?ticket=ST-630502-PMl5Lfyb2kItmkRSq1QJ-ap6'
					),
					publisher: 'handelsblatt',
				},
				{
					label: 'Verfahren gegen Philipp Amthor eingestellt',
					image: new URL(
						'https://img.zeit.de/politik/deutschland/2020-07/philipp-amthor-staatsanwaltschaft-lobbyismus-bestechlichkeit-ermittlungen-eingestellt-bild/wide__820x461__desktop'
					),
					url: new URL(
						'https://www.zeit.de/politik/deutschland/2020-07/philipp-amthor-lobby-affaere-staatsanwaltschaft-bestechlichkeit-ermittlungen-eingestellt'
					),
					publisher: 'zeit-online',
				},
			],
		},
		{
			label: '"Hey Rezo, du alter Zerstörer!"',
			articles: [
				{
					label: 'Amthor zur fehlenden Videoantwort der CDU auf Rezo',
					image: new URL('https://i.ytimg.com/vi/DEKzmztBZNI/maxresdefault.jpg'),
					url: new URL('https://www.youtube.com/watch?v=DEKzmztBZNI'),
					publisher: 'tagesschau',
				},
				{
					label: 'CDU-Antwort an YouTuber Rezo doch nicht im Netz',
					image: new URL(
						'https://www.tagesspiegel.de/images/philipp-amthor-mdb-cdu-bundestagsabgeordneter-aus-mecklenburg-vorpommern-fotografiert-im-tunnel-zwischen-reichstag-und-paul-loebe-haus-in-berlin-foto-mike-wolff/25035974/1-format43.jpg'
					),
					url: new URL(
						'https://www.tagesspiegel.de/politik/amthor-bleibt-video-schuldig-cdu-antwort-an-youtuber-rezo-doch-nicht-im-netz/25035964.html'
					),
					publisher: 'tagesspiegel',
				},
				{
					label: 'Amthor verrät Satz aus Video Antwort',
					image: new URL(
						'https://www.zdf.de/assets/philipp-amthor-106~1280x720?cb=1559819231142'
					),
					url: new URL(
						'https://www.zdf.de/nachrichten/heute-sendungen/videos/philipp-amthor-verraet-ersten-satz-aus-antwort-video-an-rezo-bei-markus-lanz-100.html'
					),
					publisher: 'zdf',
				},
				{
					label: 'CDU-Mann Amthor verblüfft mit Blödel-Auftritt',
					image: new URL(
						'https://bilder.t-online.de/b/88/06/90/98/id_88069098/tid_da/der-27-jaehrige-bundestagsabgeordnete-philipp-amthor-galt-als-nachwuchshoffnung-der-cdu-.jpg'
					),
					url: new URL(
						'https://www.bild.de/politik/inland/politik-inland/philipp-amthor-cdu-kuendigt-bei-markus-lanz-antwort-auf-rezo-video-an-aber-64827894.bild.html'
					),
					publisher: 'bild',
				},
				{
					label: 'CDU-Antwort an Rezo doch nicht im Netz',
					image: new URL(
						'https://www.wz.de/imgs/39/6/7/6/2/2/5/8/7/tok_9493083746e31342f0314db3fd137b7f/w1900_h1052_x1985_y745_MDB_2195_116329216-965890a82ac6efee.jpg'
					),
					url: new URL(
						'https://www.wz.de/politik/cdu-antwort-an-rezo-doch-nicht-im-netz-amthor-bleibt-video-schuldig_aid-45960339'
					),
					publisher: 'westdeutsche-zeitung',
				},
			],
		},
	],
	constituency: {
		numberLabel: 'Wahlkreis 016',
		label: 'Mecklenburgische Seenplatte I - Vorpommern-Greifswald II',
		postcodes: ['98559', '99102', '99189', '99310'],
	},
	partyMatches: [
		{
			name: 'CDU',
			image: 'assets/image/cdu.png',
			filter: '',
			percentage: '96%',
		},
		{
			name: 'SPD',
			image: 'assets/image/spd.png',
			filter: '',
			percentage: '96%',
		},
		{
			name: 'FDP',
			image: 'assets/image/fdp.png',
			filter: '',
			percentage: '73%',
		},
		{
			name: 'Die Grünen',
			image: 'assets/image/gruen.png',
			filter: '',
			percentage: '63%',
		},
		{
			name: 'Alternative für Deutschland',
			image: 'assets/image/afd.png',
			filter: '',
			percentage: '3%',
		},
	],
};
