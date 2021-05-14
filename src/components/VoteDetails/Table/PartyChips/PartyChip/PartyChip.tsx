import { IonChip } from '@ionic/react';
import * as React from 'react';
import './PartyChip.css';
interface PartyChipProps {
	party: string;
}

const PartyChip: React.FC<PartyChipProps> = (props: PartyChipProps) => (
	<IonChip className={['party-chip', props.party].join(' ')}>{props.party}</IonChip>
);

export default PartyChip;
