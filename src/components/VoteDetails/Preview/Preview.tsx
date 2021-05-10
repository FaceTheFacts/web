import * as React from 'react';

import './Preview.css';

interface PreviewProps {
  title: string;
  content: string;
}
const Preview: React.FC <PreviewProps> = (props: PreviewProps) => (
  <div className='preview-container'>
    <div className='preview-title'>{props.title}</div>
    <div className='preview-content'>{props.content}</div>
  </div>
)
export default Preview;