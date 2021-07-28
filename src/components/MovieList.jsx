import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // const { movies } = this.props;
    return (
      <div>
        {/** verificar a nescessidade dessa div depois */}
        {movies.map(({ title }) => (
          <MovieCard key={ title } />
        ))}
      </div>
    );
  }
}

export default MovieList;
