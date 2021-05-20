import React from 'react';
import PopupCard from '../PopupCard';
import './FirstVotePopup.css';
import personLogo from '../../../assets/images/person.svg'
import ImageAndSentence from '../ImageAndSentence/ImageAndSentence';

const FirstVotePopup: React.FC = () => (
  <PopupCard title='Wie funktioniert die Erststimme?'>
    <div>
      <ImageAndSentence image = {personLogo} width='30px' height='20px' imageAlt='person' sentence = 'Mit der Erststimme wählst du eine Kandidat:in deines Wahlkreises direkt in den Bundestag.'/>
    </div>
  </PopupCard>

);

export default FirstVotePopup;