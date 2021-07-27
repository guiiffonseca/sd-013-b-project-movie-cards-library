// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        <MovieCard />
        {/* { this.props.movies } */}
      </section>
    );
  }
}

export default MovieList;
