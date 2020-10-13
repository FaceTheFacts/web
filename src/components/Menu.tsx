import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
	searchOutline,
	searchSharp,
	bookmarkOutline,
	homeOutline,
	homeSharp,
	cameraOutline,
	cameraSharp,
} from "ionicons/icons";
import "./Menu.css";

/* Interface is how types are defined in typescript. This should appear throughout the app and makes it typesafe */
interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

/* Hardcoded app pages, this might not need to change. */
const appPages: AppPage[] = [
	{
		title: "Scan",
		url: "/discover",
		iosIcon: cameraOutline,
		mdIcon: cameraSharp,
	},
	{
		title: "Search",
		url: "/discover",
		iosIcon: searchOutline,
		mdIcon: searchSharp,
	},
	{
		title: "Profile",
		url: "/politician/1/profile",
		iosIcon: homeOutline,
		mdIcon: homeSharp,
	},
	{
		title: "Votes",
		url: "/politician/1/votes",
		iosIcon: homeOutline,
		mdIcon: homeSharp,
	},
	/* {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Outbox',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  } */
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

/* Menu component. */
const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu side="end" contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Face the Facts</IonListHeader>
					{/* <IonNote>hi@ionicframework.com</IonNote> */}

					{/* For each appPage, create an entry in the menu */}
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									/* Hightlight selected page */
									className={
										location.pathname === appPage.url
											? "selected"
											: ""
									}
									/* connect to router from App.tsx */
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									{/* Add the icon */}
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									{/* Name */}
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>

				{/*  <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
