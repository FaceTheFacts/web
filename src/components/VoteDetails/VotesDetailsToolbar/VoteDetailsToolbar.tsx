import React from 'react';

import CrossImage from '../../../assets/images/cross.svg';

const VoteDetailsToolbar: React.FC = () => (
  <div>
    <div>Gesetzesentwurf</div>
    <div><img src = {CrossImage} alt = 'cross'/></div>
  </div>

);

export default VoteDetailsToolbar