import React from 'react';
import './Positioning.css';

interface PositioningProps {
	positioning: string;
}

const Positioning: React.FC<PositioningProps> = ({ positioning }: PositioningProps) => (
	<div className={`positioning positioning-${positioning}`}>{positioning}</div>
);

export default Positioning;
