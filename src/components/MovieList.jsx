import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />
        ))}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
