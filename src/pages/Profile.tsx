import React from "react";
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
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { useParams } from "react-router";
import "./Page.css";
import ExploreContainer from "../components/ExploreContainer";
import TopicFilter from "../components/TopicFilter";
import SubHeading from "../components/SubHeading";
import Menu from "../components/Menu";

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

const Profile: React.FC = () => {
	const { name } = useParams<{ name: string }>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className = 'profile-picture'>
					<IonButtons slot="end">
						<IonMenuButton />
					</IonButtons>
					<IonTitle className="page-title">
						Philipp Amthor
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<SubHeading name="Abstimmungsverhalten >" />

				<SubHeading name="Kontroversen" />

				<SubHeading name="Bekannte Nebentätigkeiten" />
			</IonContent>
		</IonPage>
	);
};

export default Profile;
