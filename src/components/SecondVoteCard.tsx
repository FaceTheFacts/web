import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'

import './SecondVoteCard.css';

interface VoteResultsProps {
  results: Array<any>;
}

const SecondVoteCard: React.FC<VoteResultsProps> = ({results}: VoteResultsProps) => {
  return (
    <div>
      {results.map( (result,index) =>{
        return(
          <IonCard
            className = "secondvote-card"
            key = {`result=${index}`}>
            <IonCardHeader
              className = "secondvote-header">
                <IonCardTitle
                  className = "secondvote-title">
                  #{index+1}  {result.Name}
                </IonCardTitle>
                <IonCardTitle
                  className = "secondvote-title">
                  {result.electionChance}%
                </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        )
      })}
    </div>
  )
};
export default SecondVoteCard;
