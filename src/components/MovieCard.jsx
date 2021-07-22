import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    } = this.props;
    return (
      <div className="movie-card">
        <li className="movie-card-body">
          <img
            src={ imagePath }
            alt={ title }
            className="movie-card-image"
          />
          <h2 className="movie-card-title">{ title }</h2>
          <h3 className="movie-card-subtitle">{ subtitle }</h3>
          <p className="movie-card-storyline">{ storyline }</p>
          <Rating rating={ rating } />
        </li>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  imagePath: propTypes.string.isRequired,
};

export default MovieCard;
