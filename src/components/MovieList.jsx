import React from 'react';
import MovieCard from './MovieCard';
import movies from './data'

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list"><MovieCard /></div>
    );
  }
}

export default MovieList;
