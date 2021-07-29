import React from 'react';
import NumberChips, { VoteNumbers } from '../../../NumberChips/NumberChips';
import PartyChip from '../../../PartyChips/PartyChip/PartyChip';
import './Column.css';

export type ColumnType = {
	party?: string;
	votes: VoteNumbers;
	majority: string;
};

interface ColumnProps {
	votes: VoteNumbers;
	party: string;
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
	const partyNameHandler = (index: string): string => {
		switch (index) {
		case '0':
			return 'CDU';
		case '1':
			return 'CSU';
		case '2':
			return 'SPD';
		case '3':
			return 'FDP';
		case '4':
			return 'Grünen';
		case '5':
			return 'Die LINKE';
		case '6':
			return 'AfD';
		case '7':
			return 'fraktionslos';
		default:
			return 'Gesamt';
		}
	};

	return (
		<div>
			<div className="column-party">
				<PartyChip party={partyNameHandler(props.party)} />
			</div>
			<div className="column-numbers">
				<NumberChips votes={props.votes} />
			</div>
		</div>
	);
};

export default Column;
