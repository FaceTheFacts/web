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
import ProfileImage from "../components/ProfileImage";
import MenuButton from "../components/MenuButton";
import ProfileChip from "../components/ProfileChip";
import ProfileName from "../components/ProfileName";
import NebenCard from "../components/NebenCard";
import SubHeadingButton from "../components/SubHeadingButton";
import KontroCard from "../components/KontroCard";
import "./Profile.css";

// Hardcoded chips until we connect to our API
const chips = ["CDU/CSU", "Mitglied des Bundestags"];

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

						{/* ProfileImage needs a gradient overlay added! */}
						<ProfileImage name={name} />
						<ProfileName name={name} />
						{/* For each vote in votes, render a VoteCard component */}
						{chips.map((chip, index) => {
							return <ProfileChip chip={chip} />;
						})}	

						{/* Here we include the Fab menu button */}
						<IonFab vertical="top" horizontal="end">
							<MenuButton/>
						</IonFab>
		
				</IonHeader>

			{/* Here the content of our page starts */}
			<IonContent fullscreen>


				{/* Subheading-button created by using a div for the background color and placing a button over part of it*/}
				
				<div className="subheading-button-underlay">
					<SubHeadingButton name ="Abstimmungsverhalten >" />
				</div>
						
					{/* For each vote in votes, render a VoteCard component */}
					{votes.map((vote, index) => {
						return <VoteCard vote={vote} />;
					})}

				{/* Pass name to Subheading to be in control of the sub heading text */}

				<SubHeading name="Kontroversen" />

					{/* Hardcoded for now until passed in from the API */}
					<KontroCard title='"Hey Reto du alter Zerstörer"'/>

				<SubHeading name="Bekannte Nebentätigkeiten" />

					{/* Hardcoded for now until passed in from the API */}
					<NebenCard title="Sparkasse Uecker-Randow" subtitle="Mitglied des Verwaltungsrates"/>


				

			</IonContent>
			
		</IonPage>
	);
};

export default Profile;