import React from 'react';
import { VoteResult } from '../../../Types';
import Positioning from '../../Positioning';
import './Table.css';
import PartyChips from './PartyChips/PartyChips';
import NumberChip from './NumberChips/NumberChip/NumberChip';
import NumberChips from './NumberChips/NumberChips';

interface TableProps {
  result: VoteResult;
}

const temporalInput = {
  votes:{
    ja: 432,
    nein: 176,
    enthalten: 21,
    abwesend: 79,
  },
  majority:'ja'
}

const Table: React.FC = () => (
  <div className='table'>
    <div className='table-row'>
      <PartyChips parties = {['cdu', 'spd','fdp', 'grüne']}/>
    </div>
    <div className='table-content-frame'>
      <div className='table-column-container'>
        <Positioning positioning = 'yes'/>
        <Positioning positioning = 'no'/>
        <Positioning positioning = 'abstain'/>
        <Positioning positioning = 'absent'/>
      </div>
      <div className='table-column-total'>
        <NumberChips votes = {temporalInput.votes} majority={temporalInput.majority}/>
      </div>
    </div>
  </div>
);

export default Table;