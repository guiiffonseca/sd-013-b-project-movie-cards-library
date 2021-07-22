// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

export class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map(movie => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
