import React from 'react';
import Columns from './Columns/Columns';

import TotalColumn from './Columns/TotalColumn/TotalColumn';

import './Content.css';

interface ContentProps {
	totalVote: Array<number>;
	partyVote: Array<Array<number>>;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => (
	<div className="content-container">
		<TotalColumn votes={props.totalVote} />
		<div className="content-line"></div>
		<Columns votes={props.partyVote} />
	</div>
);

export default Content;
