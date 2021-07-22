import React, { Component } from 'react';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      {movies.map((movie, index) => {
        <MovieList 
        key={ index }
        />
      })}
    )
  }
}

export default MovieList;
