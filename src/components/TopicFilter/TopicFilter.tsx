import React, { useState } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { politicalFocusHandler } from '../../functions/politicalFocusHandler';
import className from 'classnames';
import './TopicFilter.css';

// interface TopicFilterProps {
//   topic: string;
// }

// const TopicFilter: React.FC <TopicFilterProps> = (props) =>  (
//   <IonChip>
//     <IonLabel>
//       {politicalFocusHandler(props.topic)}
//     </IonLabel>
//   </IonChip>
// );

// export default TopicFilter


const TopicFilter: React.FC  = () =>  {
  const [filter, setFilter] = useState(false)
  const filterChange = () => {
    setFilter(!filter)
  }
  const topicClassName = className('topic-filter', filter?'topic-clicked':'')
  return (
    <IonChip className = {topicClassName} onClick ={filterChange}>
      <IonLabel>
        {politicalFocusHandler("Ausschuss Digitale Agenda")}
      </IonLabel>
    </IonChip>
  );
}


export default TopicFilter