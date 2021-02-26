import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'

import './SecondVoteCardItem.css';

// interface sortedCandidatesProps {
//   name: string;
//   rank: number;
// }

interface CandidateInfoProps {
  candidateName: string;
  electionChance: number;
  rank: number;//Pass the index from sorted array => rank = index+1
  //These props can be changed by state
  cardColor: 'clear'|'faded';//Whether a card font color is clear (white) or not
  // screenPosition: 'away'|'touched';//Whether a user touches the card or not
  setFixedPosition: any;//Whether a user touches the card or not
  lastCandidate: 'notlast'|'last';// if a politician is the last candidate, the politician's card should be blueish
}

const SecondVoteCardItem: React.FC<CandidateInfoProps> = ({candidateName,electionChance,rank, cardColor, setFixedPosition, lastCandidate}: CandidateInfoProps) => {
  return (
    <div className = {["secondvote-carditem-frame"].join(" ")} id="second-vote-card">
      <IonCard
        className = {["secondvote-carditem", lastCandidate].join(" ")}
        key = {`rank=${rank}`}>
        <IonCardHeader
          className = "secondvote-carditem-header">
            <IonCardTitle
              className = {["secondvote-carditem-name", cardColor].join(" ")}>
              #{rank}  {candidateName}
            </IonCardTitle>
            {setFixedPosition === rank ? <IonCardTitle
                className = "secondvote-carditem-chance">
                {electionChance}%
              </IonCardTitle> :null}
            {/* <IonCardTitle
                className = "secondvote-carditem-chance">
                {setFixedPosition}%
              </IonCardTitle>  */}
         
        </IonCardHeader>
      </IonCard>   
    </div>
  )
};
export default SecondVoteCardItem;
