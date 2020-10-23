import React, { useState, useEffect } from 'react';
import './VoteChart.css';
import { HorizontalBar } from 'react-chartjs-2';
import { Poll } from '../Types';
/* 
Register the ChartProps interface so we can pass properties to the component. 
To be more TypeScripty, we should create a vote type which we can reuse throughout the app.
*/
interface ChartProps {
	vote: Poll;
}

/* Create the VoteChart component and pass in the vote property from VoteCard */
const VoteChart: React.FC<ChartProps> = ({ vote }: ChartProps) => {
	/*imports: [
        ChartsModule
      ]*/
	const [chartData, setChartData] = useState({});

	/* 
	Settings for the chart. For reference see:
	 React wrapper for chart.js https://www.npmjs.com/package/react-chartjs-2 
	 Chart.js documentation: https://www.chartjs.org/docs/latest/

	 There is a small difference in implementation between vanilla javascript and the react library, but it should become clear from the documentation

	 */
	const chartOptions = {
		title: {
			display: false, // hide the title, we add this manually in VoteCard.tsx
		},
		scales: {
			xAxes: [
				{
					ticks: {
						display: false, //hide the horizontal axis and it's values
						//set the max so the chart always fills the whole bar
						max:
							vote.result.total.yes +
							vote.result.total.no +
							vote.result.total.abstain +
							vote.result.total.none,
					},
					gridLines: {
						// hide gridlines
						display: false,
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
					},
					stacked: true, //stack the datasets into a single bar
				},
			],
			yAxes: [
				{
					gridLines: {
						// hide gridlines
						display: false,
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
					},
					stacked: true, //stack the charts
				},
			],
		},
		legend: {
			display: false, // do not display the legend, we built this ourselves in VoteCard.tsx
		},
	};
	const loadData = (vote: Poll): void => {
		setChartData({
			//labels: [vote.name],
			datasets: [
				{
					label: `Ja: ${vote.result.total.yes}`,
					backgroundColor: '#14B83A',
					borderWidth: 0,
					hoverBackgroundColor: '#14B83A',
					data: [vote.result.total.yes],
				},
				{
					label: 'Nein',
					backgroundColor: '#DE2B5E',
					borderWidth: 0,
					hoverBackgroundColor: '#DE2B5E',
					data: [vote.result.total.no],
				},
				{
					label: 'Enthalten',
					backgroundColor: '#16A6CA',
					borderWidth: 0,
					hoverBackgroundColor: '#16A6CA',
					data: [vote.result.total.abstain],
				},
				{
					label: 'Nicht abg.',
					backgroundColor: '#808080',
					borderWidth: 0,
					hoverBackgroundColor: '#808080',
					data: [vote.result.total.none],
				},
			],
		});
	};

	/* 
	UseState and UseEffect are React functions for state management.
	UseEffect is basically a way to call functions and change data inside a component without having to write a separate class for it
	More information here: https://reactjs.org/docs/hooks-effect.html
	*/
	useEffect(() => {
		loadData(vote);
	}, [vote]);

	return (
		<div className="bar-chart">
			{/* HorizontalBar is a component from the Chart.js library, we only have to pass data and options to it */}
			<HorizontalBar data={chartData} options={chartOptions} />
		</div>
	);
};

export default VoteChart;
