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
	partyVote: voteResult;
}

interface voteResult {
	partyName: string,
	yes: number,
	no: number,
	abstain: number,
	none: number
	partyTotal: string
}

const PartyVoteChart: React.FC<ChartProps> = ({ partyVote }) => {
	console.log(partyVote)
	return (
		<div>
			<PieChart
				data = {[
					{ title: 'yes', value: partyVote.yes, color: '#14b83a' },
					{ title: 'no', value: partyVote.no, color: '#de2b5e' },
					{ title: 'abstain', value: partyVote.abstain, color: '#19ace6' },
					{ title: 'none', value: partyVote.none, color: '#c4c4c4' }
				]}

				radius = {45}
				lineWidth = {30}
				lengthAngle = {-360}
				startAngle = {180}
			/>;	


		</div>
	);
};

export default PartyVoteChart;