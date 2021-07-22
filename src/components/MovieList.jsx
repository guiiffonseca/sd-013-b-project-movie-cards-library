// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, imagePath }) => (
          <MovieCard
            key={ title }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
