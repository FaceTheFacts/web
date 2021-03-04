import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';

interface SearchResultsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	results: Array<any>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }: SearchResultsProps) => {
	return (
		<div id="search-results">
			{results.map((result, index) => {
				return (
					<IonCard key={`result-${index}`}>
						<IonCardHeader>
							<IonCardSubtitle>{result.party.label}</IonCardSubtitle>
							<IonCardTitle>{result.label}</IonCardTitle>
						</IonCardHeader>
					</IonCard>
				);
			})}
		</div>
	);
};

export default SearchResults;
