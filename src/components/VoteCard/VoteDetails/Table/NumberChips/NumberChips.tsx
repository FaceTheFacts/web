import * as React from 'react';
import NumberChip from './NumberChip/NumberChip';
import './NumberChips.css';

export type VoteNumbers = Array<number>;

interface NumberChipsProps {
	votes: Array<number>;
}

const NumberChips: React.FC<NumberChipsProps> = (props: NumberChipsProps) => {
	const majority = Math.max(props.votes[0], props.votes[1], props.votes[2], props.votes[3]);
	return (
		<div className="number-chips-container">
			<div className="number-chips-item">
				<NumberChip
					voteNumber={props.votes[0]}
					majority={majority === props.votes[0] ? 'ja' : ''}
				/>
			</div>
			<div className="number-chips-item">
				<NumberChip
					voteNumber={props.votes[1]}
					majority={majority === props.votes[1] ? 'nein' : ''}
				/>
			</div>
			<div className="number-chips-item">
				<NumberChip
					voteNumber={props.votes[2]}
					majority={majority === props.votes[2] ? 'enthalten' : ''}
				/>
			</div>
			<div className="number-chips-item">
				<NumberChip
					voteNumber={props.votes[3]}
					majority={majority === props.votes[3] ? 'abwesend' : ''}
				/>
			</div>
		</div>
	);
};

export default NumberChips;
