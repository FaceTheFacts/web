import React from 'react';
import './Table.css';
import Content from './Content/Content';
import PositioningColumns from './PositioningColumns/PositioningColumns';

const totalVote = {
  votes:{
    ja: 432,
    nein: 176,
    enthalten: 21,
    abwesend: 79,
  },
  majority:'ja',
};

const partyVoteInputs = [
  {
    party: 'cdu',
    votes:{
    ja: 244,
    nein: 0,
    enthalten: 0,
    abwesend: 20,
  },
  majority:'ja'},
  {
    party: 'spd',
    votes:{
    ja: 126,
    nein: 7,
    enthalten: 2,
    abwesend: 17,
  },
  majority:'ja'},
  {
    party: 'fdp',
    votes:{
    ja: 68,
    nein: 2,
    enthalten: 5,
    abwesend: 5,
  },
  majority:'ja'},
  {
    party: 'grüne',
    votes:{
    ja: 14,
    nein: 32,
    enthalten: 14,
    abwesend: 7,
  },
  majority:'nein'},
]
const tempInput = {
  totalVote,
  partyVoteInputs
}
const Table: React.FC = () => (
  <div className='table'>
    <div className='table-positioning'>
      <PositioningColumns/>
    </div>
    <Content totalVote = {tempInput.totalVote} partyVote={tempInput.partyVoteInputs}/>
  </div>
);

export default Table;