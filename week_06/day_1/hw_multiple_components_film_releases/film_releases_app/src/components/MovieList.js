import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';
import PropTypes from 'prop-types';

const MovieList = (props) => {

  const movieItems = props.movies.map((movie) => {
    return <MovieItem movie={movie} key={movie.id}/>;
  });

  return (
    <div className='movie-list'>
      <ul>
        {movieItems}
      </ul>
    </div>
  );

}

MovieList.defaultProps = {
  movies: []
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
};

export default MovieList;
