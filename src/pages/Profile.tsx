import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
	IonButtons,
	IonMenuButton,
	IonFab,
	IonFabButton,
} from "@ionic/react";
import React from "react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { useParams } from "react-router";
import "./Page.css";
import ExploreContainer from "../components/ExploreContainer";
import TopicFilter from "../components/TopicFilter";
import SubHeading from "../components/SubHeading";
import Menu from "../components/Menu";
import PartyMatch from "../components/PartyMatch";
import VoteCard from "../components/VoteCard";
import ProfileImg from "../components/ProfileImg";
import FabMenuButton from "../components/FabMenuButton";
import "./Profile.css";



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
	}
]



	

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Profile: React.FC = () => {
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
				
					{" "}
					{/* Toolbar tag, this is the title bar / top bar */}
					

					{/* ProfileImg component that holds all the images of the politicians. 
					Right now the name property is not being used, maybe it's an idea to dynamically pass in images 
					to make our life easier when we add the profiles images of new politicians.
					The politicans name is included on the ProfileImg */}
					<ProfileImg name={name} />

					{/* Here we include the Fab menu button */}
					<IonFab vertical="top" horizontal="end">
						<FabMenuButton/>
					</IonFab>
					
					
					

					<IonTitle>
						{/* Add a page title */}

					</IonTitle>
				
			</IonHeader>

			{/* Here the content of our page starts */}
			<IonContent fullscreen>


				{/* Pass name to the Subheading component to be in control of the sub heading text */}
				<SubHeading name="Abstimmungsverhalten >" />

				{/* For each vote in votes, render a VoteCard component */}
				{votes.map((vote, index) => {
					return <VoteCard vote={vote} />;
				})}

				<SubHeading name="Kontroversen" />

				<SubHeading name="Bekannte Nebentätigkeiten" />
			</IonContent>
		</IonPage>
	);
};

export default Profile;