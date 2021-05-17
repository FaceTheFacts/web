import React from 'react';
import InfoText from './InfoText/Infotext';
import Middlebar from './Middlebar/Middlebar';
import Preview from './Preview/Preview';
import { ColumnType } from './Table/Content/Columns/Column/Column';
import { TotalColumnType } from './Table/Content/Columns/TotalColumn/TotalColumn';
import Table from './Table/Table';
import VoteDetailsToolbar from './VotesDetailsToolbar/VoteDetailsToolbar';

interface VoteDetailsProps {
	title: string;
	content: string;
	positioning: string;
	result: string;
	totalVote: TotalColumnType;
	partyVote: Array<ColumnType>;
}

const VoteDetails: React.FC<VoteDetailsProps> = (props: VoteDetailsProps) => (
	<div>
		<VoteDetailsToolbar />
		<Preview title={props.title} content={props.content} />
		<Middlebar postioning={props.positioning} result={props.result} />
		<InfoText />
		<Table totalVote={props.totalVote} partyVote={props.partyVote} />
	</div>
);

export default VoteDetails;
