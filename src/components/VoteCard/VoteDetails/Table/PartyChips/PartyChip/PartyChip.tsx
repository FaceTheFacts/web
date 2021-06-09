import { IonChip } from '@ionic/react';
import * as React from 'react';
import className from 'classnames';
import './PartyChip.css';
interface PartyChipProps {
	party?: string;
}

const PartyChip: React.FC<PartyChipProps> = (props: PartyChipProps) => {
	const partyClassName = props.party?.toLowerCase().replace(/\s/g, '');
	const partyChipClass = className('party-chip', partyClassName, '-1');

	return <IonChip className={partyChipClass}>{props.party}</IonChip>;
};

export default PartyChip;
