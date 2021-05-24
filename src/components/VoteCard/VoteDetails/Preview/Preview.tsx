import * as React from 'react';

import './Preview.css';

interface PreviewProps {
	title: string;
	content: string;
}
const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
	const [isReadMore, setIsReadMore] = React.useState('readmore-short');

	const readmoreChange = (): void => {
		if (isReadMore === 'readmore-short') {
			setIsReadMore('readmore-long');
		} else {
			setIsReadMore('readmore-short');
		}
	};

	return (
		<div className="preview-container">
			<div className="preview-title">{props.title}</div>
			<div className={['preview-content', isReadMore].join(' ')}>{props.content}</div>
			<button className="preview-button" onClick={readmoreChange}>
				{isReadMore === 'readmore-short' ? 'mehr lesen' : 'weniger lesen'}
			</button>
		</div>
	);
};

export default Preview;
