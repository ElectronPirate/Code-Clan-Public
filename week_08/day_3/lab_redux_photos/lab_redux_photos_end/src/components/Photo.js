import React from 'react';
import './Photo.css';

const Photo = ({url, id, onLiked, category, liked}) => {

  const btnClass = liked ? "liked" : "not-liked";
  
  return (
    <div className="photo">
      <img src={url} alt={category} />
      <button
        onClick={onLiked}
        value={id}
        className={`like-btn ${btnClass}`}
      >
        ❤
      </button>
    </div>
  )
}

export default Photo;
