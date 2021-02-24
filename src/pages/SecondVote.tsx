import React from 'react';
import {IonPage, IonContent} from '@ionic/react'

import './SecondVote.css';
import {Candidate} from '../Types';
import SecondVoteCard from '../components/SecondVoteCard';

interface ProfileProps {
  candidate: Candidate;
}

const secondVoteResults = [
  {
    "Name":"Thomas Racheal",
    "electionChance":9.4
  },
  {
    "Name":"Dr.Günter Krings",
    "electionChance":19.4
  },
  {
    "Name":"Hermann Gröhe",
    "electionChance":66.4
  },
  {
    "Name":"Oliver Wittke",
    "electionChance":36.6
  },
  {
    "Name":"Micheala Noll",
    "electionChance":24.4
  },
  {
    "Name":"Karl-Josef Laumann",
    "electionChance":54.4
  },
  {
    "Name":"Elisabeth Winkelmeier-Becker",
    "electionChance":40.6
  },
]

const SecondVote: React.FC<ProfileProps> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className = "secondvote-black-back">
          <SecondVoteCard results = {secondVoteResults}/>
        </div>
      </IonContent>
    </IonPage>
    
  )
};
export default SecondVote;
