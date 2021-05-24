import { IonApp, IonButton, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeFooter from '../components/HomeFooter';
import Mockup from '../components/Mockup';
import SignUp from '../components/SignUp/SignUp';
import './Home.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Home: React.FC = () => {
	/* This is returned when using this component */

	return (
		<IonApp>
			<HomeFooter />
			<IonContent>
				<div className="content">
					<div className="text">
						<IonCardTitle className="home-title">Wähl nicht irgendwen.</IonCardTitle>
						<IonCardSubtitle className="home-subtitle">
							Mit Face the Facts Wahlplakate scannen und <br />
							herausfinden wofür Politiker:innen wirklich stehen.
						</IonCardSubtitle>
						<IonButton href="/search" className="home-button">
							Zur Demo
						</IonButton>
					</div>
					<div className="mockup">
						<Mockup />
					</div>
				</div>
				<SignUp />
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
						to={'/privacy'}
						className="navbar"
						activeClassName="navbar activ"
					>
						Datenschutz
					</NavLink>
				</div>
				<HomeFooter />
			</IonContent>
		</IonApp>
	);
};

export default Home;
