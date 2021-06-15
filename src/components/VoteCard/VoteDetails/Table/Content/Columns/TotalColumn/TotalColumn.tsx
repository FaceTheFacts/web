import React from 'react';
import Column from '../Column/Column';
import { VoteNumbers } from '../../../NumberChips/NumberChips';

export type TotalColumnType = {
	votes: VoteNumbers;
	majority: string;
};

interface TotalColumnProps {
	votes: Array<number>;
}

const TotalColumn: React.FC<TotalColumnProps> = (props: TotalColumnProps) => (
	<Column party="Gesamt" votes={props.votes} />
);

export default TotalColumn;
