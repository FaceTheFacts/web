import * as React from 'react';
import NumberChip from './NumberChip/NumberChip';
import './NumberChips.css';

export type VoteNumbers = {
  ja: number;
  nein: number;
  enthalten: number;
  abwesend: number;
}

interface NumberChipsProps {
  votes: VoteNumbers;
  majority: string;
}


const NumberChips: React.FC<NumberChipsProps> = (props: NumberChipsProps) => (
  <div className='number-chips-container'>
    <div className='number-chips-item'>
      <NumberChip voteNumber={props.votes.ja} majority={props.majority==='ja'?'ja':''}/>
    </div>
    <div className='number-chips-item'>
      <NumberChip voteNumber={props.votes.nein} majority={props.majority==='nein'?'nein':''}/>
    </div>
    <div className='number-chips-item'>
      <NumberChip voteNumber={props.votes.enthalten} majority={props.majority==='enthalten'?'enthalten':''}/>
    </div>
    <div className='number-chips-item'>
      <NumberChip voteNumber={props.votes.abwesend} majority={props.majority==='abwesend'?'abwesend':''}/>
    </div>
  </div>
)

export default NumberChips