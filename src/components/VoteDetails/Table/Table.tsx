import React from 'react';
import { VoteResult } from '../../../Types';
import Positioning from '../../Positioning';
import './Table.css';

interface TableProps {
  result: VoteResult;
}

const Table: React.FC = () => (
  <div className='table-frame'>
    <div className='table-column-container'>
      <Positioning positioning = 'yes'/>
      <Positioning positioning = 'no'/>
      <Positioning positioning = 'abstain'/>
      <Positioning positioning = 'absent'/>
    </div>
  </div>

);

export default Table;