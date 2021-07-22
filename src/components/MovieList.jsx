// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }
}

export default MovieList;
