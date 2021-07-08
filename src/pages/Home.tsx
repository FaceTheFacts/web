import { IonApp, IonButton, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';
import React from 'react';
import HomeFooter from '../components/HomeFooter';
import HomeHeader from '../components/HomeHeader';
import Mockup from '../components/Mockup';
import SignUp from '../components/SignUp/SignUp';
import './Home.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Home: React.FC = () => {
	/* This is returned when using this component */

	return (
		<IonApp>
			<HomeHeader />
			<IonContent>
				<div className="content">
					<div className="text">
						<IonCardTitle className="home-title">
							Wähl nicht
							<br className="breakline-title" /> irgendwen.
						</IonCardTitle>
						<IonCardSubtitle className="home-subtitle">
							Mit Face the Facts Wahlplakate scannen und <br />
							herausfinden wofür Politiker:innen wirklich stehen.
						</IonCardSubtitle>
						<IonButton href="/search" className="home-button">
							zur Demo
						</IonButton>
					</div>
					<div className="mockup">
						<Mockup />
					</div>
				</div>
				<SignUp />
				<HomeFooter />
			</IonContent>
		</IonApp>
	);
};

export default Home;
