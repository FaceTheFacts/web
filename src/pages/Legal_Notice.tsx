import { IonApp, IonButton, IonCardSubtitle, IonCardTitle, IonContent, IonTitle } from '@ionic/react';
import React from 'react';
import HomeNavBar from '../components/HomeNavBar'
import './Home.css';


/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Legal_Notice: React.FC = () => {
	/* This is returned when using this component */

	return (
        <IonApp>
		<HomeNavBar />
		<IonContent>
			<div className="content">
				<div className="text">
					<IonCardTitle className="home-title">Wähl nicht irgendwen.</IonCardTitle>
					<IonCardSubtitle className="home-subtitle">Mit Face the Facts Wahlplakate scannen und <br className="linebreak"/>herausfinden wofür Politiker wirklich stehen.</IonCardSubtitle>
					<IonButton href="/politician/1/position" className="home-button">Zur Philipp Amthor Demo</IonButton>
				</div>
			</div>
		</IonContent> 
        </IonApp>
	);
};

export default Legal_Notice;