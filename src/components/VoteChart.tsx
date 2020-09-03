import React, { useState, useEffect } from "react";
import "./VoteChart.css";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
	ViewStacks,
	useIonViewWillEnter,
} from "@ionic/react";
import { HorizontalBar } from "react-chartjs-2";

interface ChartProps {
	vote: any;
}

const VoteChart: React.FC<ChartProps> = ({ vote }) => {
	/*imports: [
        ChartsModule
      ]*/
	const [chartData, setChartData] = useState({});
	const chartOptions = {
		title: {
			display: false,
		},
		scales: {
			xAxes: [
				{
					ticks: {
						display: false,
						max:
							vote.result.yes +
							vote.result.no +
							vote.result.abstain +
							vote.result.none,
					},
					gridLines: {
						display: false,
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
					},
					stacked: true,
				},
			],
			yAxes: [
				{
					gridLines: {
						display: false,
						drawBorder: false,
					},
					scaleLabel: {
						display: false,
					},
					stacked: true,
				},
			],
		},
		legend: {
			display: false,
		},
	};
	const loadData = (vote: any) => {
		setChartData({
			//labels: [vote.name],
			datasets: [
				{
					label: `Ja: ${vote.result.yes}`,
					backgroundColor: "#14B83A",
					borderWidth: 0,
					hoverBackgroundColor: "#14B83A",
					data: [vote.result.yes],
				},
				{
					label: "Nein",
					backgroundColor: "#DE2B5E",
					borderWidth: 0,
					hoverBackgroundColor: "#DE2B5E",
					data: [vote.result.no],
				},
				{
					label: "Enthalten",
					backgroundColor: "#16A6CA",
					borderWidth: 0,
					hoverBackgroundColor: "#16A6CA",
					data: [vote.result.abstain],
				},
				{
					label: "Nicht abg.",
					backgroundColor: "#808080",
					borderWidth: 0,
					hoverBackgroundColor: "#808080",
					data: [vote.result.none],
				},
			],
		});
	};
	useEffect(() => {
		loadData(vote);
	}, []);
	/*      useIonViewWillEnter(() => {
        console.log('ionViewWillEnter event fired');
        const ctx = new CanvasRenderingContext2D();
        var stackedBar = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
      });  */
	return (
		<div className="bar-chart">
			<HorizontalBar data={chartData} options={chartOptions} />
		</div>
	);
};

export default VoteChart;
