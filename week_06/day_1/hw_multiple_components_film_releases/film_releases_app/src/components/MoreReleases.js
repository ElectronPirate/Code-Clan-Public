import React from 'react';
import './MoreReleases.css';

const MoreButton = (props) => {
  return (
    <div className='more-releases'>
      <a href={'http://www.imdb.com/calendar/?region=gb'}>
        View more upcoming releases >>
      </a>
    </div>
  );
}


export default MoreButton;
