import React from 'react';
import { ColumnType } from './Columns/Column/Column';
import Columns from './Columns/Columns';

import TotalColumn, { TotalColumnType } from './Columns/TotalColumn/TotalColumn';

import './Content.css';

interface ContentProps {
	totalVote: TotalColumnType;
	partyVote: Array<ColumnType>;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => (
	<div className="content-container">
		<TotalColumn votes={props.totalVote.votes} majority={props.totalVote.majority} />
		<div className="content-line"></div>
		<Columns votes={props.partyVote} />
	</div>
);

export default Content;
