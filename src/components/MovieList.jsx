import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((filmes) => (
          <MovieCard key={ filmes.title } movie={ filmes } />
        ))}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};
export default MovieList;
