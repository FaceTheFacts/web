import React, {useState, useEffect} from 'react';

import {IonPage, IonContent, useIonViewDidEnter, IonCard, IonCardHeader, IonCardTitle, IonHeader} from '@ionic/react'

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
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
  {
    "name":"Elisabeth Winkelmeier-Becker",
    "electionChance": 9.4
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SecondVote: React.FC<ProfileProps> = () => {
  const [fixedPosition, setFixedPosition] = useState<number|undefined>()
  
  const initialFixedPositionHandler = () => {
    const windowHeight: number | undefined = document.getElementById("second-vote-results")?.clientHeight;
    const cardHeight: number|undefined = document.getElementById("second-vote-card")?.clientHeight;
    console.log(cardHeight, windowHeight)
    if(typeof windowHeight === "number"  && typeof cardHeight === "number"){
      const halfWindowHeight = windowHeight/2;
      const cardNums = Math.round(halfWindowHeight/cardHeight);
      return cardNums + 1
      } 
  }
  
  const setFixedPositionHandler = () => {
    // const y = document.getElementById("second-vote-results")?.scrollTop
    const voteResults = document.getElementById("second-vote-results")
    
    
    if (voteResults !== null){
      const scrollHeight = voteResults.scrollTop 
      const cardHeight = 57;
      const cardblank =10;
      console.log(scrollHeight)
      if (Math.ceil(scrollHeight) === cardHeight + cardblank && fixedPosition) {
        setFixedPosition( fixedPosition +1 );
      }
    }
    

  }
  useIonViewDidEnter(()=>setTimeout(()=>setFixedPosition(initialFixedPositionHandler()),100))
  
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
      <IonContent 
        fullscreen
        >
          <IonContent
           className = "secondvote-black-back" 
           id="second-vote-results"
          
           onScroll = {setFixedPositionHandler}>
            {testingResult}
          </IonContent>
         
      </IonContent>
    </IonPage>
    
  )
};
export default SecondVote;