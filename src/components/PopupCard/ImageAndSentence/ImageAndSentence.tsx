import React from 'react';

import './ImageAndSentence.css';

interface ImageAndSentenceProps {
  image: string;
  imageAlt: string;
  sentence: string;
}

const ImageAndSentence: React.FC <ImageAndSentenceProps> = (props: ImageAndSentenceProps)=> (
  <div className='img-sentence-container'>
    <div className='img-sentence-img'>
      <img src ={props.image} alt = {props.imageAlt}/>
    </div>
    <div className='img-sentence'>
      {props.sentence}
    </div>
  </div>
);

export default ImageAndSentence;
