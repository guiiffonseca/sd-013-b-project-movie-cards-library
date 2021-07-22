import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        {movies.map(({ imagePath, title, subtitle, storyline, rating }, index) => (
          <MovieCard
            key={ index }
            imagePath={ imagePath }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
          />
        ))}
      </main>
    );
  }
}

export default MovieList;
