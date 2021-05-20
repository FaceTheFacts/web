import React from 'react';
import PopupCard from '../PopupCard';
import './FirstVotePopup.css';
import personLogo from '../../../assets/images/person.svg';
import firstVote from '../../../assets/images/first-vote.svg';
import ImageAndSentence from '../ImageAndSentence/ImageAndSentence';

const FirstVotePopup: React.FC = () => (
  <PopupCard title='Wie funktioniert die Erststimme?' bottomContent={['Gewählte Direktkandidat:innen ziehen auf jeden Fall in den Bundestag ein, selbst wenn ihre Partei nicht über die 5% der Stimmen gekommen ist.']}>
    <div>
      <ImageAndSentence image = {personLogo} imageAlt='person' sentence = 'Mit der Erststimme wählst du eine Kandidat:in deines Wahlkreises direkt in den Bundestag.'/>
      <ImageAndSentence image = {firstVote} imageAlt='first-vote' sentence = 'Es gewinnt die Person mit den meisten Stimmen im jeweiligen Wahlkreis.'/>
    </div>
  </PopupCard>

);

export default FirstVotePopup;