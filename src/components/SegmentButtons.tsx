import React from 'react';
import './SegmentButtons.css';
import { IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import '../index.css';

interface SegmentButtonsProps {
	tab: string;
	setTab: Function;
}

const SegmentButtons: React.FC<SegmentButtonsProps> = (props: SegmentButtonsProps) => {
	/* This is returned when using this component */
	return (
		<IonToolbar class="toolbar">
			<IonSegment class="segment" value={props.tab}>
				<IonSegmentButton
					class="segment-button"
					value="0"
					onClick={(e) => props.setTab('0')}
				>
					Erststimme
				</IonSegmentButton>
				<IonSegmentButton
					class="segment-button"
					value="1"
					onClick={(e) => props.setTab('1')}
				>
					Zweitstimme
				</IonSegmentButton>
				<IonSegmentButton
					class="segment-button"
					value="2"
					onClick={(e) => props.setTab('2')}
				>
					Wahlkreis
				</IonSegmentButton>
			</IonSegment>
		</IonToolbar>
	);
};

export default SegmentButtons;
