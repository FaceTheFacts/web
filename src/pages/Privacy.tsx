import { IonApp, IonContent } from '@ionic/react';
import React from 'react';
/* import HomeNavBar from '../components/HomeNavBar'; */
import './Privacy.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Privacy: React.FC = () => {
	/* This is returned when using this component */

	return (
		<IonApp>
			{/* <HomeNavBar /> */}
			<IonContent>
				<div className="privacy">
					<h1 className="privacy-header">Datenschutz</h1>
					<h2>
						Sorry, hier gibt es keine Cookies. <br />
						Wir sammeln nur Fakten über Politiker:innen.
					</h2>
				</div>
			</IonContent>
		</IonApp>
	);
};

export default Privacy;
