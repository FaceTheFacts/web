import React from 'react';
import NumberChips, { VoteNumbers } from '../../../NumberChips/NumberChips';
import PartyChip from '../../../PartyChips/PartyChip/PartyChip';
import './Column.css';

export type ColumnType = {
	party: string;
	votes: VoteNumbers;
	majority: string;
};

interface ColumnProps {
	party: string;
	votes: VoteNumbers;
	majority: string;
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => (
	<div>
		<div className="column-party">
			<PartyChip party={props.party} />
		</div>
		<div className="column-numbers">
			<NumberChips votes={props.votes} majority={props.majority} />
		</div>
	</div>
);

export default Column;
