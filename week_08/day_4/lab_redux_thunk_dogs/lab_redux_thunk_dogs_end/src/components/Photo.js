import React from 'react';
import './Photo.css';

const Photo = ({ photoUrl }) => {
  return (
    <div className="photo">
      <img src={photoUrl} />
    </div>
  );
};

export default Photo;
