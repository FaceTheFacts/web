import * as React from 'react';

import './Preview.css';

interface PreviewProps {
	title: string;
	content: string;
}
const Preview: React.FC<PreviewProps> = (props: PreviewProps) => (
	<div className="preview-container">
		<div className="preview-title">{props.title}</div>
		<div className="preview-content">{props.content}</div>
		<button className="preview-button">mehr lesen</button>
	</div>
);
export default Preview;
