import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      movies.map((movie) => <MovieCard key={ movie.title } moviesInfo={ movie } />)
    );
  }
}

export default MovieList;
