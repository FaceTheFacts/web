import React from 'react';
import { germanTranslator } from '../../../functions/germanTranslator';
import './Positioning.css';

interface PositioningProps {
	positioning: string;
}

const Positioning: React.FC<PositioningProps> = ({ positioning }: PositioningProps) => {
	const translated = germanTranslator(positioning);
	console.log(positioning)
	return (
		<div className={`positioning positioning-${positioning}`} data-testid="positioning">
			{translated}
		</div>
	);
};

export default Positioning;
