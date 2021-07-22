import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { movies.map(({ title, subtitle, storyline, rating, imagePath }) => (<MovieCard
          key={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
        />))}
      </div>
    );
  }
}

export default MovieList;
