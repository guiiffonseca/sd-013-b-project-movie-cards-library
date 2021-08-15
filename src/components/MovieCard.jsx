import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <li className="movie-card-body">
          <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Rating rating={ movie.rating } />
        </li>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.objectOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      subtitle: propTypes.string.isRequired,
      storyline: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
      imagePath: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieCard;
