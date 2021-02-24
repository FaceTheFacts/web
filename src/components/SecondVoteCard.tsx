import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'

interface VoteResultsProps {
  results: Array<any>;
};

const SecondVoteCard: React.FC<VoteResultsProps> = ({results}:VoteResultsProps) => {
  return (
    <div>
      {results.map( (result,index) =>{
        return(
          <IonCard key = {`result=${index}`}>
            <IonCardHeader>
                <IonCardTitle>
                  #{index+1}  {result.Name}
                </IonCardTitle>
                <IonCardTitle>
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
