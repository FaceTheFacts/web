import { IonChip } from '@ionic/react';
import * as React from 'react';
import './PositioningChip.css';
interface PositioningChipProps {
	positioning: string;
}

const PositioningChip: React.FC<PositioningChipProps> = (props: PositioningChipProps) => (
	<IonChip className={['positioning-chip', props.positioning].join(' ')}>
		{props.positioning}
	</IonChip>
);

export default PositioningChip;
