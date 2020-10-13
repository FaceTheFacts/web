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

// Hardcoded votes until we connect to our API
const votes = [
	{
		subtitle: "Beschlussempfehlung",
		title: "Bundeswehreinsatz in Afghanistan",
		candidateVote: "yes",
		chip: "Auswärtiges",
		abstract: "Beschlussempfehlung des Auswärtigen Ausschusses (3. Ausschuss) zum Antrag der Bundesregierung: Fortsetzung der Beteiligung bewaffneter deutscher Streitkräfte am NATO-geführten Einsatz Resolute Support für die Ausbildung, Beratung und Unterstützung der afghanischen nationalen Verteidigungs- und Sicherheitskräfte in Afghanistan.",
		reason: "Dem Beschluss wird zugestimmt, da ein strategisches Interesse vorliegt. Zudem stärkt der Einsatz der Bundeswehr die Demokratie in der Region.",
		result: {
			total: {
				yes: 356,
				no: 159,
				abstain: 21,
				none: 173,
			},
			partyResults: [
				{
					partyName:  "CDU/CSU",
					yes: 200,
					no: 0,
					abstain: 0,
					none: 46,
				},
			]
		},
	},
	{
		subtitle: "Änderungsantrag",
		title: "Kohleausstiegsgesetz",
		candidateVote: "no",
		result: {
			total: {
				yes: 120,
				no: 539,
				abstain: 0,
				none: 50,
			},
			partyResults: [
				{
					partyName: "CDU/CSU",
					yes: 0,
					no: 234,
					abstain: 0,
					none: 12,
				},
			]
		},
	},
	{
		subtitle: "Beschlussempfehlung",
		title: "Corona-Konjunkturpaket",
		candidateVote: "no",
		result: {
			total: {
				yes: 87,
				no: 580,
				abstain: 3,
				none: 39,
			},
			partyResults: [
				{
					partyName: "CDU/CSU",
					yes: 0,
					no: 237,
					abstain: 0,
					none: 9,
				},
			]
		},
	},
	{
		subtitle: "Beschlussempfehlung",
		title: "Bundeswehreinsatz Libanon (UNIFIL)",
		candidateVote: "none",
		result: {
			total: {
				yes: 515,
				no: 149,
				abstain: 4,
				none: 41,
			},
			partyResults: [
				{
					partyName: "CDU/CSU",
					yes: 246,
					no: 0,
					abstain: 0,
					none: 13,
				},
			]
		},
	},
	
];

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Votes: React.FC = () => {
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
