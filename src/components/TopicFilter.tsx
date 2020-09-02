import React from 'react';
import './TopicFilter.css';
interface ContainerProps {
  name: string;
}

const TopicFilter: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Topics</p>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default TopicFilter;
