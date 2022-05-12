import AppStoreLogo from '../assets/images/app-store-logo.svg';
import Aw from '../assets/images/aw.png';
import bmbfLogo from '../assets/images/bmbf.jpeg';
import PlayStoreLogo from '../assets/images/google-play-badge.png';
import PrototypeFund from '../assets/images/prototypeFund.png';
import APKLogo from '../assets/images/apk-btn.svg';
import Politrack from '../assets/images/politrack.png';
import Wiki from '../assets/images/unlock.png';
import UpdateDeutschland from '../assets/images/updateDeutschland.png';
import AppStoreButton from '../components/AppStoreButton';
import Mockup from '../components/Mockup';
import Quote from '../components/Quote/Quote';
import HomeHeaderFooter from '../hoc/HomeHeaderFooter/HomeHeaderFooter';
import './Home.css';
import { IonCardSubtitle, IonCardTitle } from '@ionic/react';
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
					Alle wichtigen Infos über Politiker:innen in einer App.
				</IonCardSubtitle>
				<div className="appstore-button-container">
					<AppStoreButton
						source={AppStoreLogo}
						link="https://apps.apple.com/de/app/face-the-facts/id1579513133?l=en"
					/>
					<AppStoreButton
						source={PlayStoreLogo}
						link="https://play.google.com/store/apps/details?id=com.facethefacts"
					/>
					<AppStoreButton
						source={APKLogo}
						link="https://facethefacts-database.s3.eu-central-1.amazonaws.com/FaceTheFacts.apk"
					/>
				</div>
			</div>
			<div className="mockup">
				<Mockup />
			</div>
		</div>
		<div className="quote-grid-container">
			<Quote
				url="https://www.focus.de/politik/die-wahrheit-ueber-politiker-neue-app-scannt-wahlplakate-und-zeigt-harte-fakten_id_21297268.html"
				content={'„Wahlplakate durchschauen: Diese App weiß alles über die Politiker“'}
				name={'FOCUS Online'}
			/>
			<Quote
				url="https://www.chip.de/news/Face-the-Facts-App-zeigt-Fakten-hinter-Wahlplakaten_183810010.html"
				content={
					'“Die Idee hinter der App Face the Facts ist darum so genial wie einfach…“'
				}
				name={'chip.de'}
			/>
			<Quote
				url="https://www.businessinsider.de/politik/deutschland/diese-app-scannt-wahlplakate-und-verraet-euch-lebenslaeufe-und-nebentaetigkeiten-von-bundestagskandidaten/"
				content={
					'„Unter den Bildungsapps von Apple hat sie es inzwischen schon unter die Top 60 Bildungsapps geschaﬀt.“'
				}
				name={'Business Insider Deutschland'}
			/>
			<Quote
				url="https://www.t-online.de/nachrichten/deutschland/bundestagswahl/id_90770982/facethefact-app-von-studenten-hilft-am-wahlplakat-jedem-waehler.html"
				content={'„Studenten entwickeln App, die jedem Wähler hilft“'}
				name={'t-online.de'}
			/>
		</div>
		<div className="partners">
			<h2>Partner</h2>
			<div className="partner-logo-grid-container">
				<a id="bmbf" href="https://www.bmbf.de/bmbf/de/home/home_node.html">
					<img
						src={bmbfLogo}
						alt="gefördert vom Bundesministerium für Bildung und Forschung"
					/>
				</a>
				<a id="update" href="https://updatedeutschland.org/">
					<img src={UpdateDeutschland} alt="Update-Deutschland" />
				</a>
				<a id="proto" href="https://prototypefund.de/">
					<img src={PrototypeFund} alt="Protype-Fund" />
				</a>
				<a id="aw" href="https://www.abgeordnetenwatch.de/">
					<img src={Aw} alt="Abgeordnetenwatch" />
				</a>
				<a id="wiki" href="https://www.wikimedia.de/unlock/">
					<img src={Wiki} alt="wikimedia" />
				</a>
				<a id="politrack" href="https://politrack.org/#/">
					<img src={Politrack} alt="Politrack" />
				</a>
			</div>
		</div>
	</HomeHeaderFooter>
);

export default Home;
