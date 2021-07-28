import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
      { movies.map((movie) => {
        return <MovieCard  key={ movie.title } movie={ movie }/>
      })}
      </main>
    )

  }
}

export default MovieList;
