import React from 'react';
import Column from './Column/Column';
import './Columns.css';

interface ColumnsProps {
	votes: Array<Array<number>>;
}

const Columns: React.FC<ColumnsProps> = (props: ColumnsProps) => (
	<div className="columns-container">
		{props.votes.map((vote, index) => (
			<div key={`columns-${index}`}>
				<Column party={`${index}`} votes={vote} />
			</div>
		))}
	</div>
);

export default Columns;
