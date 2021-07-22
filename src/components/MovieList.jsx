import React from 'react';
import MovieCard from './MovieCard'
class MovieList extends React.Component {
  render() {
    const movies = this.props.allMovies;
    return (
      <div className='movie-list'>
        { movies.map((movie) => <MovieCard oneMovie={ movie } key={ movie.title }/>) }
      </div>
    )
  }
}

export default MovieList;