import React from 'react';
import Column, { ColumnType } from './Column/Column';
import './Columns.css';

interface ColumnsProps {
  votes: Array<ColumnType>;
}

const Columns: React.FC<ColumnsProps> = (props: ColumnsProps) => (
  <div className = 'columns-container'>
    {
      props.votes.map((vote, index)=>(
        <div key = {`columns-${index}`} >
          <Column party={vote.party} votes = {vote.votes} majority = {vote.majority}/>
        </div>
      ))
    }
  </div>
);

export default Columns;