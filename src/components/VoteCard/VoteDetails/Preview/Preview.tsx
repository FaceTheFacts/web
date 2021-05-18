import * as React from 'react';

import './Preview.css';

interface PreviewProps {
	title: string;
	content: string;
}
const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
	const [isReadMore, setIsReadMore] = React.useState(true);
	const [readMoreClass, setReadMoreClass] = React.useState('readmore-shrinked');
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
		if (isReadMore === false) {
			setReadMoreClass('readmore-shrinked');
		} else {
			setReadMoreClass('readmore-extended');
		}
	};

	return (
		<div className="preview-container">
			<div className="preview-title">{props.title}</div>
			<div className={['preview-content', readMoreClass].join(' ')}>{props.content}</div>
			<button className="preview-button" onClick={toggleReadMore}>
				{isReadMore ? 'mehr lesen' : 'weniger lesen'}
			</button>
		</div>
	);
};

export default Preview;
