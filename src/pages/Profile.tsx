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
import SubHeading from "../components/SubHeading";
import Menu from "../components/Menu";
import VoteCard from "../components/VoteCard";
import MenuButton from "../components/MenuButton";
import NebenCard from "../components/NebenCard";
import KontroCard from "../components/KontroCard";
import PoliticianProfile from "../components/PoliticianProfile";
import "./Profile.css";

// Hardcoded Kontroversen until we connect to our API
const kontros = [
	{
		label: "Lobbyismus-Affäre",
		articles: [
			{
				label:
					"Geschäftsführer von Augustus Intelligence lässt Amt ruhen",
				image:
					"https://cdn.prod.www.spiegel.de/images/e4f16506-cc40-4023-a068-8c33a57bf098_w948_r1.77_fpx39.81_fpy49.98.jpg",
				url:
					"https://www.spiegel.de/wirtschaft/unternehmen/affaere-um-philipp-amthor-geschaeftsfuehrer-von-augustus-intelligence-laesst-amt-ruhen-a-6577f286-2dc0-4f74-a08c-a2536e86a87d",
				publisher: "spiegel",
			},
			{
				label:
					"Für diese merkwürdige Firma hat sich Philipp Amthor engagiert",
				image:
					"https://www.handelsblatt.com/images/philipp-amthor/25914394/3-format2020.jpg",
				url:
					"https://www.handelsblatt.com/politik/deutschland/augustus-intelligence-fuer-diese-merkwuerdige-firma-hat-sich-philipp-amthor-engagiert/25914246.html?ticket=ST-630502-PMl5Lfyb2kItmkRSq1QJ-ap6",
				publisher: "handelsblatt",
			},
			{
				label: "Verfahren gegen Philipp Amthor eingestellt",
				image:
					"https://img.zeit.de/politik/deutschland/2020-07/philipp-amthor-staatsanwaltschaft-lobbyismus-bestechlichkeit-ermittlungen-eingestellt-bild/wide__820x461__desktop",
				url:
					"https://www.zeit.de/politik/deutschland/2020-07/philipp-amthor-lobby-affaere-staatsanwaltschaft-bestechlichkeit-ermittlungen-eingestellt",
				publisher: "zeit-online",
			},
		],
	},
	{
		label: '"Hey Rezo, du alter Zerstörer!"',
		articles: [
			{
				label: "Article 1",
				image: "Image url",
				url: "article url",
				publisher: "spiegel",
			},
		],
	},
];

/*Hardcoded politician header for now*/
const politician = {
	name: "Philipp Amthor",
	chips: ["CDU/CSU", "Mitglied des Bundestags"],
	image:
		"https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr",
};

{
	/* Hardcoded for now until passed in from the API */
}
const nebens = [
	{
		subtitle: "Mitglied des Verwaltungsrates",
		title: "Sparkasse Uecker-Randow",
	},
];

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
];

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
				{/* Header Tag */}{" "}
				{/* Toolbar tag, this is the title bar / top bar */}
			</IonHeader>
			{/* Here the content of our page starts */}
			<IonContent>
				{/* ProfileImg component that holds all the images of the politicians. 
				Right now the name property is not being used, maybe it's an idea to dynamically pass in images 
				to make our life easier when we add the profiles images of new politicians.
				The politicans name is included on the ProfileImg */}
				<div className="profile-header">
					<PoliticianProfile politician={politician} />

					{/* Here we include the Fab menu button */}
					<IonFab vertical="top" horizontal="end">
						<MenuButton />
					</IonFab>
				</div>

				{/* Subheading-button created by using a div for the background color and placing a button over part of it*/}

				<div className="subheading-button-underlay">
					<SubHeading
						name="Abstimmungsverhalten >"
						icon="infobutton.svg"
						buttonAction="votes"
					/>
				</div>

				<div className="grey-back">
					{/* For each vote in votes, render a VoteCard component */}
					{votes.map((vote, index) => {
						return <VoteCard vote={vote} key={index} />;
					})}

				</div>

				{/* Pass name to Subheading to be in control of the sub heading text */}

				<div>
					<SubHeading name="Kontroversen" icon="infobutton.svg" />
				</div>

				<div className="grey-back">
					{/* For each item in kontro, render a KontroCard component */}
					{kontros.map((kontro, index) => {
						return <KontroCard kontro={kontro} key={index} />;
					})}
				</div>

				<div>
					<SubHeading
						name="Bekannte Nebentätigkeiten"
						icon="infobutton.svg"
					/>
				</div>

				<div className="last-grey-back">
					{/* For each item in title, render a NebenCard component */}
					{nebens.map((neben, index) => {
						return <NebenCard neben={neben} key={index} />;
					})}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
