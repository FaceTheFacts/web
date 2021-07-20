import React, { useState } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { topicFilterHandler } from '../../../../functions/topicFilterHandler';
import className from 'classnames';
import './TopicFilter.css';

// const topics =['Arbeit und Soziales', 'Auswärtiges', 'Bau und Wohnen','Bildung und Forschung', 'Digitale Agenda', 'Entwicklung','Ernährung und Landwirtschaft','Europäische Union', 'Familie', 'Finanzen', 'Gesundheit','Haushalt','Inneres', 'Kultur und Medien', 'Menschenrechte', 'Nachrichtendienste', 'Parlamentsangelegenheiten','Recht und Verbraucherschutz', 'Sport', 'Tourismus', 'Umwelt', 'Infrastruktur', 'Verteidigung','Wirtschaft und Energie']

const Topic: React.FC  = () =>  {
  const [topic, setTopic] = useState(false)
  const topicChange = () => {
    setTopic(!topic)
  }
  const topicClassName = className('topic', topic?'topic-clicked':'')
  return (
    <IonChip className = {topicClassName} onClick ={topicChange}>
      <IonLabel>
        {topicFilterHandler("Nachrichtendienste")}
      </IonLabel>
    </IonChip>
  );
}

export default Topic