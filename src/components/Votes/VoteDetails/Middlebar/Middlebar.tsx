import * as React from 'react';
import Positioning from '../../../Positioning';

import './Middlebar.css';

interface MiddlebarProps {
	postioning: string;
	result: string;
}

const Middlebar: React.FC<MiddlebarProps> = (props: MiddlebarProps) => (
	<div className="middlebar-container">
		<div className="middlebar-vote-container">
			<div className="middlebar-vote-item">Kandidat:in stimmte mit </div>
			<Positioning positioning={props.postioning} />
		</div>
		<div className="middlebar-border"></div>
		<div className="middlebar-result">{props.result}</div>
	</div>
);

export default Middlebar;
