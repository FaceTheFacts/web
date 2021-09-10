import styles from './Quote.module.css';
import * as React from 'react';

interface QuoteProps {
	content: string;
	name: string;
}

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => (
	<div className={styles.container}>
		<div>{props.content}</div>
		<div className={styles.name}>{props.name}</div>
	</div>
);

export default Quote;
