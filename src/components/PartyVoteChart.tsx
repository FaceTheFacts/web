import React from 'react';
import './VoteChart.css';
import { PieChart } from 'react-minimal-pie-chart';
import { PartyVoteResult } from '../Types';
import '../index.css';

/* 
Register the ChartProps interface so we can pass properties to the component. 
To be more TypeScripty, we should create a vote type which we can reuse throughout the app.
*/
interface ChartProps {
	partyVote: PartyVoteResult;
}

const PartyVoteChart: React.FC<ChartProps> = ({ partyVote }: ChartProps) => {
	return (
		<div>
			<PieChart
				data={[
					{ title: 'yes', value: partyVote.yes, color: '#14b83a' },
					{ title: 'no', value: partyVote.no, color: '#de2b5e' },
					{ title: 'abstain', value: partyVote.abstain, color: '#19ace6' },
					{ title: 'none', value: partyVote.none, color: '#c4c4c4' },
				]}
				radius={45}
				lineWidth={30}
				lengthAngle={-360}
				startAngle={180}
			/>
			;
		</div>
	);
};

export default PartyVoteChart;
