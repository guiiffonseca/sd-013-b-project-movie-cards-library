import React from 'react';
import MovieCart from './MovieCard';

class MovieList extends React.Component {
  render () {
    return (
      this.props.movies.map((movie) => (
        <MovieCart data={ movie }/>
      ))
    );
  }
}

export default MovieList;