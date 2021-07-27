// implement MovieList component here

import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';
/* import PropTypes from 'prop-types'; */

class MovieList extends React.Component {
  render() {
    return (

      movies.map((value, index) => <MovieCard key={ index } movie={ value } />)

    );
  }
}

export default MovieList;
