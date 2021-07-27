import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={ index }
            movie={ movie }
            className=""
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
