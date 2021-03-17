import React from 'react';
import { Candidate } from '../Types';
import TitleHeader from './TitleHeader';
import KontroCard from './KontroCard';

interface NewsProps {
	candidate: Candidate;
}
const News: React.FC<NewsProps> = ({ candidate }: NewsProps) => (
	<React.Fragment>
		<div className="black-back">
			<TitleHeader title="kontroversen" />
			{candidate.controversies.map((kontro, index) => {
				return <KontroCard kontro={kontro} key={index} />;
			})}
		</div>
	</React.Fragment>
);
export default News;
