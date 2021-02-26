import React, {useState} from 'react';
import {IonPage, IonContent} from '@ionic/react'

import './SecondVote.css';
import {Candidate} from '../Types';

import SecondVoteCardItem from '../components/SecondVoteCardItem';

//Add Scroll Event listener

interface ProfileProps {
  candidate: Candidate;
}

const secondVote = [
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

//Just for meeting
const candidateOne = {
  name:'Thomas Racheal',
  electionChance: 56,
  rank:0,
}
const candidateTwo = {
  name:'Dr.Günter Krings',
  electionChance: 40,
  rank:1,
}
const candidateThree = {
  name:'Hermann Gröhe',
  electionChance: 30,
  rank:2,
}
const candidateFour = {
  name:'Oliver Wittke',
  electionChance: 29,
  rank:3,
}
const candidateFive = {
  name:'Micheala Noll',
  electionChance: 28.8,
  rank:4,
}
const candidateSix = {
  name:'Karl-Josef Laumann',
  electionChance: 25.6,
  rank:5,
}
const candidateSeven = {
  name:'Elisabeth Winkelmeier-Becker',
  electionChance: 19.0,
  rank:6,
}
const candidateEight = {
  name:'Ralph Brinkhaus',
  electionChance: 9.4,
  rank:7,
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SecondVote: React.FC<ProfileProps> = () => {
  const [swipePosition, setswipePosition] = useState<number|undefined>(function initialSwipePositionHandler(){
    const windowHeight: number | undefined = document.getElementById("second-vote-results")?.clientHeight;
    const cardHeight: number|undefined = document.getElementById("second-vote-card")?.clientHeight;
    if(typeof windowHeight === "number"  && typeof cardHeight === "number"){
      const halfWindowHeight = windowHeight/2;
      const cardNums = Math.round(halfWindowHeight/cardHeight);
      //pass it as an index
      return cardNums 
   } 
  });
  // const initialSwipePositionHandler = () => {
  //   const windowHeight: number | undefined = document.getElementById("second-vote-results")?.clientHeight;
  //   const cardHeight: number|undefined = document.getElementById("second-vote-card")?.clientHeight;
  //   if(typeof windowHeight === "number"  && typeof cardHeight === "number"){
  //     const halfWindowHeight = windowHeight/2;
  //     const cardNums = Math.round(halfWindowHeight/cardHeight);
  //     //pass it as an index
  //     return cardNums 
  //  }
  // };
  const testHandler = () => {
    console.log(setswipePosition)
  }
  
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <button onClick = {testHandler}>Click</button>
        <h1>{setswipePosition}</h1>
        <div className = "secondvote-black-back" id="second-vote-results">
          <SecondVoteCardItem candidateInfo = {candidateOne} cardColor = "clear" screenPosition = "away" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateTwo} cardColor = "clear" screenPosition = "away" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateThree} cardColor = "clear" screenPosition = "away" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateFour} cardColor = "clear" screenPosition = "away" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateFive} cardColor = "clear" screenPosition = "away" lastCandidate= "last"/>
          <SecondVoteCardItem candidateInfo = {candidateSix} cardColor = "clear" screenPosition = "touched" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateSeven} cardColor = "faded" screenPosition = "away" lastCandidate= "notlast"/>
          <SecondVoteCardItem candidateInfo = {candidateEight} cardColor = "faded" screenPosition = "away" lastCandidate= "notlast"/>
        </div>
      </IonContent>
    </IonPage>
    
  )
};
export default SecondVote;
