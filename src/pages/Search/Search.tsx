import { IonInput, IonContent, IonImg, IonPage, IonPopover } from '@ionic/react';
import React, { useState } from 'react';
import './Search.css';
import { Candidate } from '../../Types';
import SearchResults from '../../components/SearchResults';
import logo2021 from '../../assets/images/logo2021.svg';

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
const Discover: React.FC<DiscoverProps> = ({ candidate, setCandidate }: DiscoverProps) => {
	const [text, setText] = useState<string>();
	const [showResults, setShowResults] = useState<boolean>(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [searchResults, setSearchResults] = useState<Array<any>>([]);
	const [showPopover, setShowPopover] = useState<boolean>(false);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className="discover-page">
					<IonImg id="logo2021" src={logo2021} alt="logo2021"></IonImg>

					<IonInput
						className="search-bar"
						value={text}
						placeholder="Nach Kandidat:innen suchen"
						disabled={false}
						onIonChange={async (e): Promise<void> => {
							setText(e.detail.value as string);
							setTimeout(async () => {
								const url =
									'https://www.abgeordnetenwatch.de/api/v2/politicians/?label[cn]=';
								const res = await fetch(`${url}${text}&range_end=20`);
								const data = await res.json();
								console.log(data.data);
								setSearchResults(data.data);
								setShowResults(true);
							}, 400);
						}}
					></IonInput>
					{showResults ? <SearchResults results={searchResults} /> : null}

					<IonPopover
						isOpen={showPopover}
						cssClass="popover"
						onDidDismiss={(): void => setShowPopover(false)}
						translucent={true}
						id="detected-candidate-popover"
						/* enterAnimation={popoverAnimation} */
					></IonPopover>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Discover;
