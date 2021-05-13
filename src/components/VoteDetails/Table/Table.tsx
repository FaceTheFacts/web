import React from 'react';
import { VoteResult } from '../../../Types';
import Positioning from '../../Positioning';
import './Table.css';
import PartyChip from './Table/PartyChips/PartyChip/PartyChip';
import PartyChips from './Table/PartyChips/PartyChips';

interface TableProps {
  result: VoteResult;
}

const Table: React.FC = () => (
  <div className='table'>
    <div>
      <PartyChips parties = {['cdu', 'spd','fdp', 'grüne']}/>
    </div>
    <div className='table-content-frame'>
      <div className='table-column-container'>
        <Positioning positioning = 'yes'/>
        <Positioning positioning = 'no'/>
        <Positioning positioning = 'abstain'/>
        <Positioning positioning = 'absent'/>
      </div>
    </div>
  </div>
);

export default Table;