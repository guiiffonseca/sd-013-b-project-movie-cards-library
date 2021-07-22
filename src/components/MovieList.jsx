import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movieData } = this.props;

    return (
      <ul className="movie-list">
        {movieData.map((movie, index) => (
          <MovieCard
            key={ index }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
            rating={ movie.rating }
            imagePath={ movie.imagePath }
          />
        ))}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movieData: propTypes.arrayOf({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
  }).isRequired,
};

export default MovieList;
