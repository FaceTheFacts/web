import React, {useState, useEffect} from 'react';

import {IonPage, IonContent} from '@ionic/react'

import './SecondVote.css';
import {Candidate} from '../Types';

import SecondVoteCardItem from '../components/SecondVoteCardItem';

//Add Scroll Event listener

interface ProfileProps {
  candidate: Candidate;
}

//Just for testing
const secondVote = [
  {
    "name":"Thomas Racheal",
    "electionChance":60.4
  },
  {
    "name":"Dr.Günter Krings",
    "electionChance":50.4
  },
  {
    "name":"Hermann Gröhe",
    "electionChance":30.4
  },
  {
    "name":"Oliver Wittke",
    "electionChance":28.6
  },
  {
    "name":"Micheala Noll",
    "electionChance":19.6
  },
  {
    "name":"Karl-Josef Laumann",
    "electionChance":12.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SecondVote: React.FC<ProfileProps> = () => {
  
  const initialSwipePositionHandler = () => {
    const windowHeight: number | undefined = document.getElementById("second-vote-results")?.clientHeight;
    const cardHeight: number|undefined = document.getElementById("second-vote-card")?.clientHeight;
    console.log(cardHeight, windowHeight)
    if(typeof windowHeight === "number"  && typeof cardHeight === "number"){
      const halfWindowHeight = windowHeight/2;
      const cardNums = Math.round(halfWindowHeight/cardHeight);
      return cardNums 
      } 
  }
  const [fixedPosition, setFixedPosition] = useState<number|undefined>()
  useEffect(()=>{
    console.log('mounted');
    const delayedFixedPosition = setTimeout(()=>setFixedPosition(initialSwipePositionHandler()),100);
  },[])
  
  const testingResult = secondVote.map((candidate, index) => {
    return(
      <SecondVoteCardItem
      key = {`secondvote-${index}`} 
      candidateName = {candidate.name} 
      electionChance = {candidate.electionChance}
      rank = {index + 1}
      cardColor = "clear"
      setFixedPosition = {fixedPosition}
      lastCandidate = 'notlast' 
      />
    )
  })
 
  return (
    <IonPage>
      <IonContent fullscreen>
        <button onClick = {initialSwipePositionHandler}>Click</button>
        <div className = "secondvote-black-back" id="second-vote-results">
          {testingResult}  
        </div>
      </IonContent>
    </IonPage>
    
  )
};
export default SecondVote;