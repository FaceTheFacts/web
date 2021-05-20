import React from 'react';
import PopupCard from '../PopupCard';
import './FirstVotePopup.css';
import personLogo from '../../../assets/images/person.svg'

const FirstVotePopup: React.FC = () => (
  <PopupCard title='Wie funktioniert die Erststimme?'>
    <div>
      <img width = '30px' height= '20px' src ={personLogo} alt ='person'/>
      <div>
        Mit der Erststimme wählst du eine Kandidat:in deines Wahlkreises direkt in den Bundestag. 
      </div>
    </div>
  </PopupCard>

);

export default FirstVotePopup;