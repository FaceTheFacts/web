import { IonInput, IonContent, IonPage } from '@ionic/react';

import React, { useState } from 'react';
import { Candidate } from '../Types';
import SearchResults from '../components/SearchResults';
import './SearchScreen.css';

interface DiscoverProps {
	candidate: Candidate;
	setCandidate: Function;
}

type SearchResult = {
	id: number;
	entity_type: 'politician';
	label: string;
	api_url: string;
	abgeordnetenwatch_url: string;
	first_name: string;
	last_name: string;
	birth_name: string | null;
	sex: 'm' | 'f' | 'd';
	year_of_birth: number;
	party: {
		id: number;
		entity_type: 'party';
		label: string;
		api_url: string;
	};
	party_past: null;
	deceased: null;
	deceased_date: null;
	education: null;
	residence: string;
	occupation: string;
	statistic_questions: null;
	statistic_questions_answered: null;
	qid_wikidata: null;
	field_title: null;
};

const SearchScreen: React.FC<DiscoverProps> = ({ candidate, setCandidate }: DiscoverProps) => {
	const [text, setText] = useState<string>('');
	const [showResults, setShowResults] = useState<boolean>(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [searchResults, setSearchResults] = useState<Array<any>>([]);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className="searchScreen-header">
					<IonInput
						className="searchScreen-bar"
						value={text}
						placeholder="Kandidat:in, PLZ oder Ort suchen"
						disabled={false}
						clearInput={true}
						debounce={250}
						onIonChange={async (e): Promise<void> => {
							const query = e.detail.value;
							setText(e.detail.value as string);
							console.log(e.detail.value);
							if (e.detail.value !== undefined && e.detail.value !== '') {
								console.log(text);
								const url =
									'https://www.abgeordnetenwatch.de/api/v2/politicians/?label[cn]=';
								const res = await fetch(`${url}${query}&range_end=20`);
								const data = await res.json();
								setSearchResults(data.data);
								setShowResults(true);
							} else {
								setShowResults(false);
							}
						}}
					></IonInput>
				</div>
				<div className="searchScreen-showResults">
					{showResults ? <SearchResults results={searchResults} /> : null}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default SearchScreen;
