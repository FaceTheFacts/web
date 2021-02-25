import React from 'react';
import {IonPage, IonContent} from '@ionic/react'

import './SecondVote.css';
import {Candidate} from '../Types';
import SecondVoteCard from '../components/SecondVoteCard';
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

// 'List will be sorted'
// => percentage per seat; 


// const sortCandidateHandler = (electionResult: Array<any>) => {
//   const sortedCandidates = electionResult.sort ((a,b) => {
//     return b.electionChance - a.electionChance
//   });
//   return sortedCandidates
// }

// const sortedSecondVote = sortCandidateHandler (secondVote);

const SecondVote: React.FC<ProfileProps> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className = "secondvote-black-back">
          {/* <SecondVoteCard results = {sortedSecondVote}/> */}
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
