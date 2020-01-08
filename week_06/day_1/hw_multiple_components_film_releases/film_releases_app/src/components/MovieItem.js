import React from 'react';
import './MovieItem.css';
import PropTypes from 'prop-types';

const MovieItem = (props) => {
  return (
    <li className='movie-item'>
      <a href={props.movie.url}>{props.movie.name}</a>
    </li>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired
};

export default MovieItem;
