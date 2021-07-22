import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
}

export default MovieList;
