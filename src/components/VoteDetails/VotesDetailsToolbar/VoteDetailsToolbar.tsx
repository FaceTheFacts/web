import React from 'react';

import CrossImage from '../../../assets/images/cross.svg';
import './VoteDetailsToolbar.css'
const VoteDetailsToolbar: React.FC = () => (
  <div className='details-toolbar-container'>
    <div data-testid='votes-details-toolbar-title' >Gesetzesentwurf</div>
    <div><img src = {CrossImage} alt = 'cross'/></div>
  </div>

);

export default VoteDetailsToolbar