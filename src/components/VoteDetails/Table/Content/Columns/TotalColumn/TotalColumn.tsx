import React from 'react';
import Column from '../Column/Column';
import {VoteNumbers} from '../../../NumberChips/NumberChips';

interface TotalColumnProps {
  votes: VoteNumbers;
  majority: string;
}

const TotalColumn: React.FC<TotalColumnProps> = (props: TotalColumnProps) => (
  <Column party='gesamt' votes = {props.votes} majority = {props.majority}/>
);

export default TotalColumn;
