// implement MovieList component here
// implement Header component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((data) => (
          <MovieCard
            key={ data.title }
            movie={ data }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
