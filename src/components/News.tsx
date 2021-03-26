import React from 'react';
import { Candidate, NewsInput } from '../Types';
import TitleHeader from './TitleHeader';
import axios from 'axios';
import cheerio from 'cheerio';
import NewsCard from './NewsCard';

interface NewsProps {
	candidate: Candidate;
	news: Array<NewsInput>;
}

interface ArticleData {
	url: string;
	title: string | undefined;
	imageUrl: string | undefined;
}
const ArticleScraper = async (url: string) => {
	const AxiosInstance = axios.create();
	const response = await AxiosInstance.get(url);
	const html = await response.data;
	const $ = cheerio.load(html);
	const title = $('meta[property="og:title"]').attr('content'); //meta-tag//title
	const imageUrl = $('meta[property="og:image"]').attr('content'); //meta-tag//image
	const ScrapedArticles: ArticleData[] = [];
	ScrapedArticles.push({
		url,
		title,
		imageUrl,
	});
	return ScrapedArticles;
};
const ScrapeHandler = async (url: string) => {
	// const x = myserver.com/article/url
	//We need backend server
	const data = await ArticleScraper(url);
	console.log(data);
};

const News: React.FC<NewsProps> = ({ candidate, news }: NewsProps) => {
	return (
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
				<button onClick={() => ScrapeHandler(news[1].articles[1])}>Test</button>
			</div>
		</React.Fragment>
	);
};
export default News;
