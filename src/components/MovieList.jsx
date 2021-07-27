import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map(({ title, subtitle, storyline, imagePath, rating }, index) => (
          <MovieCard
            key={ index }
            // title={ title }
            // subtitle={ subtitle }
            // storyline={ storyline }
            // imagePath={ imagePath }
            // rating={ rating }
            movie={ {
              title,
              subtitle,
              storyline,
              imagePath,
              rating,
            } }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
