import { IonChip } from '@ionic/react';
import React from 'react';
import './NumberChip.css';


interface NumberChipProps {
  majority?: string;
  voteNumber: number;
}


const NumberChip: React.FC<NumberChipProps> = (props: NumberChipProps) => (
  <IonChip className={['number-chip',props.majority].join(' ')}>
  {props.voteNumber}
  </IonChip>
);

export default NumberChip;
