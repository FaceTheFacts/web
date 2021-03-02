import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import './SecondVoteCard.css';

interface CandidateInfoProps {
  candidateName: string;
  electionChance: number;
  rank: number;
  cardColor: 'clear'|'faded';
  setFixedPosition: any;
  lastCandidate: 'notlast'|'last';
}

const SecondVoteCard: React.FC<CandidateInfoProps> = ({candidateName,electionChance,rank, cardColor, setFixedPosition, lastCandidate}: CandidateInfoProps) => {
  return (
    <div className = {"secondvote-cards"} id="second-vote-card">
      <IonCard
        className = {["secondvote-card", lastCandidate].join(" ")}
        key = {`rank=${rank}`}>
        <IonCardHeader
          className = "secondvote-card-header">
            <IonCardTitle
              className = {["secondvote-card-name", cardColor].join(" ")}>
              #{rank}  {candidateName}
            </IonCardTitle>
            {setFixedPosition === rank ? <IonCardTitle
                className = "secondvote-card-chance">
                {electionChance}%
            </IonCardTitle> :null}   
        </IonCardHeader>
      </IonCard>   
    </div>
  )
};
export default SecondVoteCard;
