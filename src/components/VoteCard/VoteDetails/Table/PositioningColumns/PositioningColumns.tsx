import * as React from 'react';
import Positioning from '../../../../Positioning';
import PositioningChip from './PositioningChip/PositioningChip';
import './PositioningColumns.css';

const positionings = ['ja', 'nein', 'enthalten', 'abwesend'];

const PositioningColumns: React.FC = () => (
	<div className="positioning-columns-container">
		{positionings.map((position, index) => (
			<div key={`positioning-column-${index}`} className="positioning-columns">
				<PositioningChip positioning={position} />
			</div>
		))}
	</div>
);
export default PositioningColumns;
