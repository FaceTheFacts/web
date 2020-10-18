import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonBackButton,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import TopicFilter from "../components/TopicFilter";
import PartyMatch from "../components/PartyMatch";
import SubHeading from "../components/SubHeading";
import VoteCard from "../components/VoteCard";
import "./Votes.css";
import {Candidate} from '../Types'

// Hardcoded votes until we connect to our API
const votes = [
	{
		subtitle: 'Beschlussempfehlung',
		title: 'Bundeswehreinsatz in Afghanistan',
		candidateVote: 'yes',
		chip: {
			name: 'Verteidigung',
			icon: 'assets/icon/shield-light.svg'
		},
		abstract: 'Beschlussempfehlung des auswärtigen Ausschusses zum Antrag der Regierung: Fortsetzung der Beteiligung bewaffneter deutscher Streitkräfte am Nato-geführten Einsatz. Support für die Ausbildung, Beratung und Unterstützung der afghanischen Verteidigung- und Sicherheitskräfte im Land.',
		reason: 'Dem Beschluss wird zugestimmt, da ein strategisches Interesse vorliegt. Zudem stärkt der Einsatz der Bundeswehr die Demokratie in der Region.',
		result: {
			total: {
				yes: 356,
				no: 159,
				abstain: 21,
				none: 173,
			},
			partyResult: [
				{
					partyName:  'CDU/CSU',
					yes: 200,
					no: 0,
					abstain: 0,
					none: 46,
					partyTotal: 246
				},
			]
		},
	},
	{
		subtitle: 'Beschlussempfehlung',
		title: 'Geflüchtete aus Moria in Deutschland aufnehmen',
		candidateVote: 'no',
		chip: {
			name: 'Heimat',
			icon: 'assets/icon/landmark-light.svg'
		},
		abstract: 'Antrag der Fraktion DIE LINKE, die Geflüchteten aus dem EU-Hotspot Moria in Deutschland aufzunehmen und sich auf EU-Ebene für die Abschaffung von EU-Hotspots einzusetzen.',
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
					partyName:  'CDU/CSU',
					yes: 0,
					no: 212,
					abstain: 0,
					none: 34,
					partyTotal: 246
				},
			]
		},
	},
	{
		subtitle: '',
		title: 'Finanzielle Entlastung für Kommunen',
		candidateVote: 'yes',
		chip: {
			name: 'Finanzen',
			icon: 'assets/icon/sack-dollar-light.svg'
		},
		abstract: 'Mit einer Änderung des Grundgesetzes beabsichtigen die Regierungsfraktionen CDU/CSU und SPD die stärkere finanzielle Entlastung der Kommunen während der COVID-19-Pandemie.',
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
					partyName:  'CDU/CSU',
					yes: 234,
					no: 0,
					abstain: 0,
					none: 12,
					partyTotal: 246
				},
			]
		},
	},
	{
		subtitle: 'Gesetzesentwurf',
		title: 'Verkleinerung des Bundestages',
		candidateVote: 'no',
		chip: {
			name: 'Justiz',
			icon: 'assets/icon/balance-scale-left-light.svg'
		},
		abstract: 'Gesetzesentwurf von Grünen, Linken und FDP, das Wahlrecht so zu verändern, dass ein weiteres Anwachsen der Abgeordnetenzahl im deutschen Bundestag bei der nächsten Bundestagswahl verhindert werde.',
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
					partyName:  'CDU/CSU',
					yes: 0,
					no: 229,
					abstain: 0,
					none: 17,
					partyTotal: 246
				},
			]
		},
	},
	{
		subtitle: 'Antrag',
		title: 'Regelsatz der Grundsicherung erhöhen',
		candidateVote: 'no',
		chip: {
			name: 'Soziales',
			icon: 'assets/icon/user-friends-light.svg'
		},
		abstract: 'Mit ihrem Antrag fordert die Fraktion Bündnis 90/Die Grünen die Bundesregierung auf, den Regelsatz der Grundsicherung zu erhöhen, um Personen ärmerer Bevölkerungsschichten vor finanziellen Notlagen zu schützen.',
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
					partyName:  'CDU/CSU',
					yes: 0,
					no: 229,
					abstain: 0,
					none: 17,
					partyTotal: 246
				},
			]
		},
	},
	{
		subtitle: 'Gesetzesentwürfe ',
		title: 'Organspenden-Reform: Zustimmungslösung',
		candidateVote: 'no',
		chip: {
			name: 'Gesundheit',
			icon: 'assets/icon/heartbeat-light.svg'
		},
		abstract: 'Überfraktionell Gesetzesentwurf das Organspendemodell in Deutschland zu reformieren. Die Abgeordneten entscheiden über die Einführung einer Widerspruchslösung oder einer Zustimmungslösung.',
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
					partyName:  'CDU/CSU',
					yes: 160,
					no: 66,
					abstain: 9,
					none: 11,
					partyTotal: 246
				},
			]
		},
	},
];

interface VoteProps {
	candidate: Candidate
}
/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Votes: React.FC<VoteProps> = ({candidate}) => {
	/* Here we define the variable 'name' to be used as a parameter in components */
	const { name } = useParams<{ name: string }>();

	/* This is returned when using this component */
	return (
		<IonPage>
			{/* Here the content of our page starts */}
			<IonContent fullscreen>
				<div className="votes-toolbar">
					<IonButtons slot="start">
						<IonBackButton
							className="back-button"
							defaultHref="profile"
							text=""
						/>
					</IonButtons>
					{/* Add a page title */}

					<IonTitle className="page-title">
						ABSTIMMUNGSVERHALTEN
					</IonTitle>
				</div>

				{/* Pass name to the SubHeading component to be in control of the sub heading text */}
				<SubHeading name="Filtern Nach Themen" />

				{/* TopicFilter component that holds all the filters for the topics of polls. 
				Right now the name property is not being used, maybe it's an Idea to dynamically pass in the topics, 
				to make our life easier in case a new topic is added or we want to translate for other countries and languages */}
				<div className="grey-back-scroll">
					<TopicFilter name={name} />
				</div>

				<SubHeading
					name="Übereinstimmung mit anderen Fraktionen"
					icon="infobutton.svg"
				/>

				{/* The PartyMatch component shows how the candidate's votes match with those of the political parties
				Currently the name property is not being used, here we should at the least pass in 
				the politician id so we can retrieve the match percentage from our api */}
				<div className="grey-back-scroll">
					<PartyMatch name={name} />
				</div>

				<SubHeading name="Abstimmungen" />

				{/* For each vote in votes, render a VoteCard component */}
				<div className="last-grey-back">
					{votes.map((vote, index) => {
						return <VoteCard vote={vote} />;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Votes;
