// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="Foto filme" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;
