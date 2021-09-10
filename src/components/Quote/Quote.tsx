import * as React from 'react';
import styles from './Quote.module.css';

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
