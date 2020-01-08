import React from 'react';
import Photo from './Photo';
import CategorySelectContainer from './CategorySelectContainer.js';
import './PhotoList.css';

const PhotoList = (props) => {

  const createPhotos = () => {
    return props.photosData.map((photoData) => {
      return <Photo
        onLiked={ (e) => props.photoLiked(e.target.value) }
        url={ photoData.url }
        category={ photoData.category }
        liked={ photoData.liked }
        id={ photoData.id }
        key={ photoData.id } />
    });
  }

  return (
    <>
      <CategorySelectContainer />
      <div className="photo-list">
        { createPhotos() }
      </div>
    </>
  );

}


export default PhotoList;
