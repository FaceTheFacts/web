import React from 'react';
import './SegmentButtons.css';
import { IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import '../index.css';

interface SegmentButtonsProps {
	tab: string;
	setTab: Function;
	type: number;
}

const SegmentButtons: React.FC<SegmentButtonsProps> = (props: SegmentButtonsProps) => {
	/* This is returned when using this component */
	if (props.type === 0) {
		return (
			<IonToolbar class="toolbar">
				<IonSegment class="segment" value={props.tab}>
					<IonSegmentButton
						class="segment-button"
						id="ErstStimme"
						value="0"
						onClick={(e): JSX.Element => props.setTab('0')}
					>
						Erststimme
					</IonSegmentButton>
					<IonSegmentButton
						class="segment-button"
						id="ZweitStimme"
						value="1"
						onClick={(e): JSX.Element => props.setTab('1')}
					>
						Zweitstimme
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
	} else {
		return (
			<IonToolbar class="toolbar">
				<IonSegment class="segment" value={props.tab}>
					<IonSegmentButton
						class="segment-button"
						id="Übersicht"
						value="0"
						onClick={(e): JSX.Element => props.setTab('0')}
					>
						Übersicht
					</IonSegmentButton>
					<IonSegmentButton
						class="segment-button"
						id="Lebenslauf"
						value="1"
						onClick={(e): JSX.Element => props.setTab('1')}
					>
						Lebenslauf
					</IonSegmentButton>
					<IonSegmentButton
						class="segment-button"
						value="2"
						id="Weblinks"
						onClick={(e): JSX.Element => props.setTab('2')}
					>
						Weblinks
					</IonSegmentButton>
				</IonSegment>
			</IonToolbar>
		);
	}
};

export default SegmentButtons;
