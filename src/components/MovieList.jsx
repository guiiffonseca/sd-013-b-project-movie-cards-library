import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movies.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
