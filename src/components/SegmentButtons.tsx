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
			<IonSegment value={props.tab}>
				<IonSegmentButton value="0" onClick={(e) => props.setTab('0')}>
					Erststimme
				</IonSegmentButton>
				<IonSegmentButton value="1" onClick={(e) => props.setTab('1')}>
					Zweitstimme
				</IonSegmentButton>
				<IonSegmentButton value="2" onClick={(e) => props.setTab('2')}>
					Wahlkreis
				</IonSegmentButton>
			</IonSegment>
		</IonToolbar>
	);
};

export default SegmentButtons;
