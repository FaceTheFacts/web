import * as React from 'react';
import PartyChip from './PartyChip/PartyChip';
import './PartyChips.css';

interface PartyChipsProps {
  parties: string[];
}

const PartyChips: React.FC<PartyChipsProps> = (props: PartyChipsProps) => (
  <div className='party-chips-container'>
    <PartyChip party= 'gesamt'/>
    <div className='party-chips'>
      {props.parties.map((party, index)=>(
        <PartyChip key={`party-chip-${index}`} party={party}/>
      ))}
    </div>

  </div>

);

export default PartyChips;