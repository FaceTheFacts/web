import * as React from 'react';
import { getMobileOperatingSystem } from '../../../../functions/getMobileOperatingSystem/getMobileOperatingSystem';
import Positioning from '../../../PositionCards/Positioning/Positioning';

import './Middlebar.css';

interface MiddlebarProps {
	postioning: string;
	result: string;
}

const Middlebar: React.FC<MiddlebarProps> = (props: MiddlebarProps) => {
	return (
		<div className="middlebar-container">
			{/* left */}
			<div className="middlebar-left">
				<div className="middlebar-left-sentence">Kandidat:in stimmte mit</div>
				<div className="middlebar-left-positioning">
					<Positioning positioning={props.postioning} />
				</div>
			</div>
			{/* border bar */}
			<div className="middlebar-border"></div>
			{/* right */}
			<div className="middlebar-right">{props.result}</div>
		</div>
	);
};

export default Middlebar;
