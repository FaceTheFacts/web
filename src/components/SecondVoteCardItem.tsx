import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'

import './SecondVoteCardItem.css';

interface CandidateInfoProps {
  candidateInfo: {
    name: string;
    electionChance: number;
    rank: number;//Pass the index from sorted array => rank = index+1
  };
  //These props can be changed by state
  cardColor: 'clear'|'faded';//Whether a card font color is clear (white) or not
  screenPosition: 'away'|'touched';//Whether a user touches the card or not
  lastCandidate: 'notlast'|'last';// if a politician is the last candidate, the politician's card should be blueish
}

const SecondVoteCardItem: React.FC<CandidateInfoProps> = ({candidateInfo, cardColor, screenPosition, lastCandidate}: CandidateInfoProps) => {
  return (
    <div className = {["secondvote-carditem-frame", screenPosition].join(" ")}>
      <IonCard
        className = {["secondvote-carditem", lastCandidate].join(" ")}
        key = {`rank=${candidateInfo.rank}`}>
        <IonCardHeader
          className = "secondvote-carditem-header">
            <IonCardTitle
              className = {["secondvote-carditem-name", cardColor].join(" ")}>
              #{candidateInfo.rank+1}  {candidateInfo.name}
            </IonCardTitle>
            {
            screenPosition === "touched"?
              <IonCardTitle
                className = "secondvote-carditem-chance">
                {candidateInfo.electionChance}%
              </IonCardTitle> :null
            }
        </IonCardHeader>
      </IonCard>   
    </div>
  )
};
export default SecondVoteCardItem;
