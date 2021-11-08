import React from 'react';
import './Table.css';
import Content from './Content/Content';
import PositioningColumns from './PositioningColumns/PositioningColumns';

interface TableProps {
	totalVote: Array<number>;
	partyVote: Array<Array<number>>;
}

const Table: React.FC<TableProps> = (props: TableProps) => (
	<div className="table">
		<div className="table-positioning">
			<PositioningColumns />
		</div>
		<Content totalVote={props.totalVote} partyVote={props.partyVote} />
	</div>
);

export default Table;
