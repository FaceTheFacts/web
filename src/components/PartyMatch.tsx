import React from 'react';
import { IonThumbnail, IonLabel } from '@ionic/react';
import './PartyMatch.css';
import { PartyMatchType } from '../Types';
import '../index.css';

interface PartyMatchProps {
	parties: Array<PartyMatchType>;
}
/* The PartyMatch component. The property name is also not being used currently. 
It would make sense to pass politician ID into this component so we can load results from db */
const PartyMatch: React.FC<PartyMatchProps> = ({ parties }: PartyMatchProps) => {
	return (
		<div className="party-matches">
			<div className="party-match-row">
				{/* For each party create a thumbnail with a percentage underneath  */}
				{parties.map((party, index) => {
					return (
						<div className="party-item" key={`party-match-${index}`}>
							<IonThumbnail className="party-thumbnail">
								<img src={String(party.image)} alt={party.name}></img>
							</IonThumbnail>
							<IonLabel className="party-percentage">{party.percentage}</IonLabel>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PartyMatch;
