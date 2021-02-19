import {
	IonInput,
	IonContent,
	IonImg,
	IonModal,
	IonFabButton,
	IonPage,
	IonIcon,
	IonPopover,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import CameraView from '../components/CameraView';
import DetectedCandidate from '../components/DetectedCandidate';
import './Discover.css';
import { Candidate } from '../Types';
import SearchResults from '../components/SearchResults';

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
	const [text, setText] = useState<string>('');
	const [showResults, setShowResults] = useState<boolean>(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [searchResults, setSearchResults] = useState<Array<any>>([]);
	const [showCamera, setShowCamera] = useState<boolean>(false);
	const [showPopover, setShowPopover] = useState<boolean>(false);

	// animation for the popover
	/* const popoverAnimation = (baseEl: any) => {
		return createAnimation()
		.addElement(baseEl)
		.duration(500)
		.fromTo("bottom", "-20%", "20%")
	} */

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonModal isOpen={showCamera} cssClass="my-custom-class">
					<IonFabButton
						className="camera-close-button"
						onClick={(): void => setShowCamera(false)}
					>
						<IonIcon icon={closeOutline}></IonIcon>
					</IonFabButton>
					<CameraView setShowPopover={setShowPopover} setCandidate={setCandidate} />
				</IonModal>
				<div className="discover-page">
					<div
						className="camera-icon-background"
						onClick={(): void => setShowCamera(true)}
						onKeyPress={(): void => setShowCamera(true)}
						role="link"
						tabIndex={0}
					>
						<IonImg id="camera-square" src="../assets/icon/camera-square.svg"></IonImg>
						<IonImg id="camera-icon" src="../assets/icon/camera-solid.svg"></IonImg>
					</div>

					<IonInput
						className="search-bar"
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
					<div className="ShowResults">
						{showResults ? <SearchResults results={searchResults} /> : null}
					</div>

					<IonPopover
						isOpen={showPopover}
						cssClass="popover"
						onDidDismiss={(): void => setShowPopover(false)}
						translucent={true}
						id="detected-candidate-popover"
						/* enterAnimation={popoverAnimation} */
					>
						<DetectedCandidate
							setShowPopover={setShowPopover}
							setShowCamera={setShowCamera}
							candidate={candidate}
						/>
					</IonPopover>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Discover;
