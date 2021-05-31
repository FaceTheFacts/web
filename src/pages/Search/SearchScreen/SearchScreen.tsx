import { IonApp, IonContent, IonHeader, IonList, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import SearchResults from '../../../components/SearchResults/SearchResults';
import './SearchScreen.css';

const SearchScreen: React.FC = () => {
	const [searchText, setsearchText] = useState<string>();
	const [showResults, setShowResults] = useState<boolean>(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [searchResults, setSearchResults] = useState<Array<any>>([]);
	return (
		<IonApp>
			<IonHeader className="search-screen-header">
				<IonSearchbar
					className="searchscreen-bar"
					clearIcon="close-sharp"
					value={searchText}
					placeholder=""
					onIonFocus={() => setShowResults(true)}
					onIonChange={async (e): Promise<void> => {
						setsearchText(e.detail.value as string);
						setTimeout(async () => {
							const url =
								'https://www.abgeordnetenwatch.de/api/v2/politicians/?label[cn]=';
							const res = await fetch(`${url}${searchText}&range_end=20`);
							const data = await res.json();
							setSearchResults(data.data);
							setShowResults(true);
						}, 400);
					}}
					onIonClear={() => setShowResults(false)}
				/>
			</IonHeader>
			<IonContent fullscreen>
				<IonList>
					<SearchResults results={searchResults} />
				</IonList>
			</IonContent>
		</IonApp>
	);
};

export default SearchScreen;
