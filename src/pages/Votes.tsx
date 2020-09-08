import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
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
		result: {
			yes: 356,
			no: 159,
			abstain: 21,
			none: 173,
		},
	},
	{
		subtitle: "Beschlussempfehlung",
		title: "Bundeswehreinsatz in Afghanistan",
		candidateVote: "yes",
		result: {
			yes: 50,
			no: 25,
			abstain: 15,
			none: 10,
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
			{" "}
			{/* Page Tag */}
			<IonHeader>
				{" "}
				{/* Header Tag */}
				<IonToolbar className="votes-header">
					{" "}
					{/* Toolbar tag, this is the title bar / top bar */}
					{/* Here we include the menu button */}
					<IonButtons slot="end">
						<IonMenuButton />
					</IonButtons>
					{/* Add a page title */}
					<IonTitle className="page-title">
						Abstimmungsverhalten
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			{/* Here the content of our page starts */}
			<IonContent fullscreen>
				{/* Pass name to the Subheading component to be in control of the sub heading text */}
				<SubHeading name="Filtern Nach Themen" />

				{/* TopicFilter component that holds all the filters for the topics of polls. 
				Right now the name property is not being used, maybe it's an Idea to dynamically pass in the topics, 
				to make our life easier in case a new topic is added or we want to translate for other countries and languages */}
				<TopicFilter name={name} />

				<SubHeading name="Übereinstimmung mit anderen Fraktionen" />

				{/* The PartyMatch component shows how the candidate's votes match with those of the political parties
				Currently the name property is not being used, here we should at the least pass in 
				the politician id so we can retrieve the match percentage from our api */}
				<PartyMatch name={name} />

				<SubHeading name="Abstimmungen" />

				{/* For each vote in votes, render a VoteCard component */}
				{votes.map((vote, index) => {
					return <VoteCard vote={vote} />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Votes;
