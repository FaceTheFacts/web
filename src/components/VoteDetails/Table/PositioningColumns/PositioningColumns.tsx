import * as React from 'react';
import Positioning from '../../../Positioning';
import './PositioningColumns.css';

const positionings = ['yes', 'no', 'abstain', 'absent'];

const PositioningColumns: React.FC = () => (
	<div className="positioning-columns-container">
		{positionings.map((position, index) => (
			<div key={`positioning-column-${index}`} className="positioning-columns">
				<Positioning positioning={position} />
			</div>
		))}
	</div>
);
export default PositioningColumns;
