import React from 'react';
import {IonPage, IonContent} from '@ionic/react'

import './SecondVote.css';
import {Candidate} from '../Types';

interface ProfileProps {
  candidate: Candidate;
}

const SecondVote: React.FC<ProfileProps> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className = "secondvote-black-back">
    
        </div>
      </IonContent>
    </IonPage>
    
  )
};
export default SecondVote;
