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
import SubHeadingInfo from "../components/SubHeadingInfo";
import SubHeading from "../components/SubHeading";
import VoteCard from "../components/VoteCard";
import "./Votes.css";

// Hardcoded votes until we connect to our API
const votes = [
	{
		subtitle: "Beschlussempfehlung",
		title: "Bundeswehreinsatz in Afghanistan",
		candidateVote: "JA",
		result: {
			yes: 356,
			no: 159,
			abstain: 21,
			none: 173,
		},
	},
	{
		subtitle: "Änderungsantrag",
		title: "Kohleausstiegsgesetz",
		candidateVote: "NEIN",
		result: {
			yes: 120,
			no: 539,
			abstain: 0,
			none: 50,
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
