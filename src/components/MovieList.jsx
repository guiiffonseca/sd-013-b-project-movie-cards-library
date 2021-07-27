// implement MovieList component here

import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';
/* import PropTypes from 'prop-types'; */

class MovieList extends React.Component {
  render() {
    return (
      <div>
      {movies.map((value) => <MovieCard movie={value}/>)}
      </div>
    )  
  }
}

export default MovieList;
