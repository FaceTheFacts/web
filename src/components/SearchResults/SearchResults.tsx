import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
import './SearchResults.css';
import { chevronForwardOutline } from 'ionicons/icons';

interface SearchResultsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	results: Array<any>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }: SearchResultsProps) => {
	return (
		<div id="search-results">
			{results.map((result, index) => {
				return (
					<IonCard
						className="search-result-card"
						key={`result-${index}`}
						button={true}
						href={`politician/${result.id}/profile`}
					>
						<IonCardHeader>
							<IonCardTitle className="search-result-title">
								{result.label}
							</IonCardTitle>
							<IonCardSubtitle>{result.party.label}</IonCardSubtitle>
						</IonCardHeader>
					</IonCard>
				);
			})}
		</div>
	);
};

export default SearchResults;
