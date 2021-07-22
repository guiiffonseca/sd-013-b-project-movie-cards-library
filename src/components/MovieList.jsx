import React from 'react';
import MovieCard from './MovieCard'
class MovieList extends React.Component {
  render() {
    const movies = this.props.allMovies;
    return (
    <div>
      { movies.map((movie) => <MovieCard oneMovie={ movie }/>) }
    </div>
    )
  }
}

export default MovieList;