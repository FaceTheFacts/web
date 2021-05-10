import * as React from 'react';

interface PreviewProps {
  title: string;
  content: string;
}
const Preview: React.FC <PreviewProps> = (props: PreviewProps) => (
  <div>
    <div>{props.title}</div>
    <div>{props.content}</div>
  </div>
)
export default Preview;