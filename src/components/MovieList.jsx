import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, imagePath, rating }, index) => (
          <MovieCard
            key={ index }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
            rating={ rating }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;