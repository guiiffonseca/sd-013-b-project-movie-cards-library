import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies, rating } = this.props;
    return (
      <div>
        <MovieCard movies={ movies } rating={ rating } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string,
  rating: PropTypes.number,
};

MovieList.defaultProps = {
  movies: 'Movie Title 1',
  rating: '5',
};

export default MovieList;
