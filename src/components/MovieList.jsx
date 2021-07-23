import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { movies.map(({ title, subtitle, storyline, rating, imagePath }, index) => (
          <MovieCard
            key={ index }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
            imagePath={ imagePath }
          />
        )) }
      </section>
    );
  }
}

export default MovieList;
