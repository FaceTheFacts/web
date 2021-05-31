import { IonContent, IonImg, IonPage, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import './Search.css';
import logo2021 from '../../assets/images/logo2021.svg';
import SearchScreen from './SearchScreen/SearchScreen';

const Search: React.FC = () => {
	const [showScreen, setShowScreen] = useState<boolean>(false);
	return (
		<IonPage>
			{showScreen === false ? (
				<IonContent fullscreen>
					<div className="search-page">
						<IonImg
							className="search-logo"
							id="logo2021"
							src={logo2021}
							alt="logo2021"
						/>
						<IonSearchbar
							className="search-bar"
							clearIcon="close-sharp"
							placeholder="Nach Kandidat:innen suchen"
							onIonFocus={(): void => setShowScreen(true)}
						></IonSearchbar>
					</div>
				</IonContent>
			) : null}

			{showScreen ? <SearchScreen /> : null}
		</IonPage>
	);
};

export default Search;
