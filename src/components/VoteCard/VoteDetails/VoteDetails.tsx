import React from 'react';
import Middlebar from './Middlebar/Middlebar';
import Preview from './Preview/Preview';
import Table from './Table/Table';
import VoteDetailsToolbar from './VotesDetailsToolbar/VoteDetailsToolbar';

import './VoteDetails.css';

interface VoteDetailsProps {
	clicked: Function;
	title: string;
	content: string;
	positioning: string;
	result: string;
	totalVote: Array<number>;
	partyVote: Array<Array<number>>;
}

const VoteDetails: React.FC<VoteDetailsProps> = (props: VoteDetailsProps) => (
	<div className="vote-details-background">
		<VoteDetailsToolbar clicked={props.clicked} />
		<Preview title={props.title} content={props.content} />
		<Middlebar postioning={props.positioning} result={props.result} />
		<Table totalVote={props.totalVote} partyVote={props.partyVote} />
	</div>
);

export default VoteDetails;
