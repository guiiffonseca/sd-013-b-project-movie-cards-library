// implement MovieList component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">

        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
