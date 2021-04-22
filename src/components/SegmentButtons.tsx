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
					id="ErstStimme"
					value="0"
					onClick={(e): JSX.Element => props.setTab('0')}
				>
					ERSTSTIMME
				</IonSegmentButton>
				<IonSegmentButton
					class="segment-button"
					id="ZweitStimme"
					value="1"
					onClick={(e): JSX.Element => props.setTab('1')}
				>
					ZWEITSTIMME
				</IonSegmentButton>

				{/* Wahlkreis Feature currently not part of MVP
				<IonSegmentButton
					class="segment-button"
					value="2"
					onClick={(e): JSX.Element => props.setTab('2')}
				>
					Wahlkreis
				</IonSegmentButton> */}
			</IonSegment>
		</IonToolbar>
	);
};

export default SegmentButtons;
