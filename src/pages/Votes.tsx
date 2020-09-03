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

const Votes: React.FC = () => {
	const { name } = useParams<{ name: string }>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="votes-header">
					<IonButtons slot="end">
						<IonMenuButton />
					</IonButtons>
					<IonTitle className="page-title">
						Abstimmungsverhalten
					</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<SubHeading name="Filtern Nach Themen" />

				<TopicFilter name={name} />

				<SubHeading name="Übereinstimmung mit anderen Fraktionen" />

				<PartyMatch name={name} />
				<SubHeading name="Abstimmungen" />
				{votes.map((vote, index) => {
					return <VoteCard vote={vote} />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Votes;
