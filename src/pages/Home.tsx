import Mockup from '../components/Mockup';
import SignUp from '../components/SignUp/SignUp';
import HomeHeaderFooter from '../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './Home.css';
import { IonButton, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Home: React.FC = () => (
	<HomeHeaderFooter>
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
		<div className='partners'>
			<h2>Partner</h2>
			<div className='partner-logo-content'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<SignUp />
	</HomeHeaderFooter>
);

export default Home;
