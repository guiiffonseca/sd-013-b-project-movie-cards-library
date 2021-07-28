import React, { Component } from 'react';

import Rating from './Rating';
import PropTypes from 'prop-types';

import '../App.css';


class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <div className="movie-card">
      <img className="movie-card-image" src={ imagePath } alt={ title } />
      <h4 className="movie-card-title">{ title }</h4>
      <h5 className="movie-card-subtitle">{ subtitle }</h5>
      <p className="movie-card-storyline">{ storyline }</p>
      <Rating rating={ rating } />
    </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
