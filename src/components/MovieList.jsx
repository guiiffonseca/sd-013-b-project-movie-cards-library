// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {
          movies.forEach((movie, index) => (<MovieCard movie={ movie } key={ index } />))
        }
      </section>
    );
  }
}

export default MovieList;
