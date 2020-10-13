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
import { PieChart } from 'react-minimal-pie-chart';




/* 
Register the ChartProps interface so we can pass properties to the component. 
To be more TypeScripty, we should create a vote type which we can reuse throughout the app.
*/
interface ChartProps {
	partyVote: any;
}



const PartyVoteChart: React.FC<ChartProps> = ({ partyVote }) => {

	return (
		<div>
			<PieChart className="donut-chart"
				data = {[
					{ title: 'One', value: 10, color: '#E38627' },
					{ title: 'Two', value: 15, color: '#C13C37' },
					{ title: 'Three', value: 20, color: '#6A2135' },
				]}
				viewBoxSize = {[200, 120]}
				center = {[50, 54]}
				radius = {45}
				lineWidth = {20}
			/>;	

		</div>
	);
};

export default PartyVoteChart;