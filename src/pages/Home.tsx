import Wiki from '../assets/images/unlock.png';
import UpdateDeutschland from '../assets/images/updateDeutschland.svg';
import Aw from '../assets/images/aw.png';
import PrototypeFund from '../assets/images/prototypeFund.png';
import bmbfLogo from '../assets/images/bmbf.jpeg'
import AppStoreLogo from '../assets/images/app-store-logo.svg';
import PlayStoreLogo from '../assets/images/google-play-badge.png'

import Mockup from '../components/Mockup';
import HomeHeaderFooter from '../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './Home.css';
import { IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import AppStoreButton from '../components/AppStoreButton';
import Quote from '../components/Quote/Quote';

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
		<div className="quote-container">
			<Quote content ={'„Wahlplakate durchschauen: Diese App weiß alles über die Politiker“'} name = {'FOCUS Online'}/>
			<Quote content ={'“Die Idee hinter der App Face the Facts ist darum so genial wie einfach…“'} name = {'chip.de'}/>
			<Quote content ={'„Unter den Bildungsapps von Apple hat sie es inzwischen schon unter die Top 60 Bildungsapps geschaﬀt.“'} name = {'Business Insider Deutschland'}/>
			<Quote content ={'„Studenten entwickeln App, die jedem Wähler hilft“'} name = {'t-online.de'}/>
		</div>
		<div className="partners">
			<h2>Partner</h2>
			<div className="partner-logo-grid-container">
				<img id="bmbf" src={bmbfLogo} alt="gefördert vom Bundesministerium für Bildung und Forschung" />
				<img id="update" src={UpdateDeutschland} alt="Update-Deutschland" />
				<img id="proto" src={PrototypeFund} alt="Protype-Fund" />
				<img id="aw" src={Aw} alt="Abgeordnetenwatch" />
				<img id="wiki" src={Wiki} alt="wikimedia" />
			</div>
		</div>
		<SignUp />
	</HomeHeaderFooter>
);

export default Home;
