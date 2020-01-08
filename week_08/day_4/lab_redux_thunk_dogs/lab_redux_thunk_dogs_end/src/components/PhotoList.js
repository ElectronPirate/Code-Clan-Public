import React from 'react';
import Photo from './Photo.js';
import './PhotoList.css';

const PhotoList = (props) => {

  const images = props.photos.map((photoUrl, index) => {
    return <Photo photoUrl={ photoUrl } key={ index } />
  });

  return (
    <div id="photos">
      {images}
    </div>
  );
};

export default PhotoList;
