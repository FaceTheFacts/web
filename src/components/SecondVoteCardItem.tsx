import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'

import './SecondVoteCardItem.css';

interface CandidateInfoProps {
  candidateInfo: {
    name: string;
    electionChance: number;
    rank: number;//Pass the index from sorted array
    // touchPosition: boolean;//Position that a user is touching
  };
  screenPosition: 'away'|'touched';//Whether a user touches the card or not
}

const SecondVoteCardItem: React.FC<CandidateInfoProps> = ({candidateInfo, screenPosition}: CandidateInfoProps) => {
  return (
    <div className = {["secondvote-carditem", screenPosition].join(" ")}>
      <IonCard
        key = {`rank=${candidateInfo.rank}`}>
        <IonCardHeader>
            <IonCardTitle>
              #{candidateInfo.rank+1}  {candidateInfo.name}
            </IonCardTitle>
            <IonCardTitle>
              {candidateInfo.electionChance}%
            </IonCardTitle>        
        </IonCardHeader>
      </IonCard>   
    </div>
  )
};
export default SecondVoteCardItem;
