import * as React from 'react';

import './Preview.css';

interface PreviewProps {
	title: string;
	content: string;
}
const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
	const [isReadMore, setIsReadMore] = React.useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	const wordLimit = (text: string, limit: number) => {
		const split = text.split(' ');
		return split.slice(0, limit).join(' ');
	};

	return (
		<div className="preview-container">
			<div className="preview-title">{props.title}</div>
			<div className="preview-content">
				{isReadMore ? wordLimit(props.content, 40) : props.content}
			</div>
			<button className="preview-button" onClick={toggleReadMore}>
				{isReadMore ? 'mehr lesen' : 'weniger lesen'}
			</button>
		</div>
	);
};

export default Preview;
