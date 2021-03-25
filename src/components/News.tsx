import React from 'react';
import { Candidate, NewsInput } from '../Types';
import TitleHeader from './TitleHeader';

import NewsCard from './NewsCard';

interface NewsProps {
	candidate: Candidate;
	news: Array<NewsInput>;
}

const News: React.FC<NewsProps> = ({ candidate, news }: NewsProps) => (
	<React.Fragment>
		<div className="black-back">
			<TitleHeader title="kontroversen" />
			{/* {candidate.controversies.map((kontro, index) => {
				return <KontroCard kontro={kontro} key={index} />;
			})} */}
			{news.map((newsItem, index) => {
				const key = `${newsItem.newsTitle}-${index}`;
				return <NewsCard key={key} newsData={newsItem} />;
			})}
		</div>
	</React.Fragment>
);
export default News;
