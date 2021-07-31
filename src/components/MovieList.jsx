// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((title, index) => (
          <MovieCard key={ movies[index].title } movies={ movies } />))}
      </section>
    );
  }
}

export default MovieList;
