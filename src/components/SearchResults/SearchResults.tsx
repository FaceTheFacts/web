import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import './SearchResults.css';
import { chevronForwardOutline } from 'ionicons/icons';
import PartyChip from '../VoteCard/VoteDetails/Table/PartyChips/PartyChip/PartyChip';

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
						<IonCardHeader className="search-result-card-header">
							<div className="search-result-card-container">
								<div className="search-result-card-title">
									<IonCardTitle className="search-result-card-title">
										{result.label}
									</IonCardTitle>
									<PartyChip party={result.party.label.toLowerCase()} />
								</div>
								<IonIcon
									className="search-result-card-icon"
									slot="icon-only"
									icon={chevronForwardOutline}
								/>
							</div>
						</IonCardHeader>
					</IonCard>
				);
			})}
		</div>
	);
};

export default SearchResults;
