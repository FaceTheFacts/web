import { IonApp, IonButton, IonCardSubtitle, IonCardTitle, IonContent, IonTitle } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar'
import Logo from '../components/Logo'
import Mockup from '../components/Mockup'
import './Home.css';


/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Home: React.FC = () => {
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
				<div className="mockup">
					<Mockup />
				</div>
			</div>
			<div className="links-bottom">
				<NavLink
				id="legal-notice-bottom"
				to={'/legal-notice'}
				className="navbar"
                activeClassName="navbar activ"
                >
					Impressum
				</NavLink>
				<NavLink
					id="privacy-bottom"
					to={`/privacy`}
					className="navbar"
					activeClassName="navbar activ"
				>
					Datenschutz
				</NavLink>
			</div>
		</IonContent> 
        </IonApp>
	);
};

export default Home;