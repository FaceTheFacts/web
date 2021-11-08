import React, { useState, useEffect } from 'react';
import './VoteChart.css';
import { HorizontalBar } from 'react-chartjs-2';
import '../../../index.css';

/* 
Register the ChartProps interface so we can pass properties to the component. 
To be more TypeScripty, we should create a vote type which we can reuse throughout the app.
*/
interface ChartProps {
	totalvotes: [number, number, number, number];
}

/* Create the VoteChart component and pass in the vote property from VoteCard */
const VoteChart: React.FC<ChartProps> = ({ totalvotes }: ChartProps) => {
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
						max: totalvotes[0] + totalvotes[1] + totalvotes[2] + totalvotes[3],
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
	const loadData = (totalvotes: [number, number, number, number]): void => {
		setChartData({
			//labels: [vote.name],
			datasets: [
				{
					label: `Ja: ${totalvotes[0]}`,
					backgroundColor: '#6FAD5A',
					borderWidth: 0,
					hoverBackgroundColor: '#6FAD5A',
					data: [totalvotes[0]],
					borderRadius: 12,
				},
				{
					label: 'Nein',
					backgroundColor: '#D74769',
					borderWidth: 0,
					hoverBackgroundColor: '#D74769',
					data: [totalvotes[1]],
					borderRadius: 12,
				},
				{
					label: 'Enthalten',
					backgroundColor: '#3969F5',
					borderWidth: 0,
					hoverBackgroundColor: '#3969F5',
					data: [totalvotes[2]],
					borderRadius: 12,
				},
				{
					label: 'Nicht abg.',
					backgroundColor: 'rgba(248, 248, 248, 0.12)',
					borderWidth: 0,
					hoverBackgroundColor: 'rgba(248, 248, 248, 0.12)',
					data: [totalvotes[3]],
					borderRadius: 12,
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
		loadData(totalvotes);
	}, [totalvotes]);

	return (
		<div className="bar-chart">
			{/* HorizontalBar is a component from the Chart.js library, we only have to pass data and options to it */}
			<HorizontalBar data={chartData} options={chartOptions} />
		</div>
	);
};

export default VoteChart;
