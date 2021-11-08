import React from 'react';
import { germanTranslator } from '../../../functions/germanTranslator';
import './Positioning.css';

interface PositioningProps {
	positioning: string | undefined;
}

const Positioning: React.FC<PositioningProps> = ({ positioning }: PositioningProps) => {
	const translated = germanTranslator(positioning);
	return (
		<div className={`positioning positioning-${positioning}`} data-testid="positioning">
			{translated}
		</div>
	);
};

export default Positioning;
