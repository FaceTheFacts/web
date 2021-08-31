import Wiki from '../assets/images/wikimedia.svg';
import UpdateDeutschland from '../assets/images/updateDeutschland.svg';
import Aw from '../assets/images/aw.svg';
import PrototypeFund from '../assets/images/prototypeFund.svg';
import AppStoreLogo from '../assets/images/app-store-logo.svg';
import PlayStoreLogo from '../assets/images/google-play-badge.png'

import Mockup from '../components/Mockup';
import HomeHeaderFooter from '../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './Home.css';
import { IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import AppStoreButton from '../components/AppStoreButton';

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
				<div className="appstore-button-container">
					<AppStoreButton source={AppStoreLogo} link="https://apps.apple.com/de/app/face-the-facts/id1579513133?l=en"/>
					<AppStoreButton source={PlayStoreLogo} link="https://play.google.com/store/apps/details?id=com.facethefacts" />
				</div>
			</div>
			<div className="mockup">
				<Mockup />
			</div>
		</div>
		<div className="partners">
			<h2>Partner</h2>
			<div className="partner-logo-grid-container">
				<img src={Wiki} alt="wikimedia" />
				<img src={UpdateDeutschland} alt="Update-Deutschland" />
				<img src={Aw} alt="Abgeordnetenwatch" />
				<img src={PrototypeFund} alt="Protype-Fund" />
			</div>
		</div>
		<SignUp />
	</HomeHeaderFooter>
);

export default Home;
