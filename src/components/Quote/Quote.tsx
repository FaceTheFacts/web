import styles from './Quote.module.css';
import * as React from 'react';

interface QuoteProps {
	content: string;
	url: string;
	name: string;
}

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => (
	<div className={styles.container}>
		<a href={props.url} className={styles.link}>
			{props.content}
		</a>
		<div className={styles.name}>{props.name}</div>
	</div>
);

export default Quote;
