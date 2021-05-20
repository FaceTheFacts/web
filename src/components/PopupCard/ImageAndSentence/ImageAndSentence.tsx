import React from 'react';

import './ImageAndSentence.css';

interface ImageAndSentenceProps {
  image: string;
  width: string;
  height: string;
  imageAlt: string;
  sentence: string;
}

const ImageAndSentence: React.FC <ImageAndSentenceProps> = (props: ImageAndSentenceProps)=> (
  <div className='img-sentence-container'>
    <img width = {props.width} height= {props.height} src ={props.image} alt = {props.imageAlt}/>
    <div className='img-sentence'>
      {props.sentence}
    </div>
  </div>
);

export default ImageAndSentence;
