import React, { Component } from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const movie = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } alt="movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
  storyline: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  imagePath: PropType.string.isRequired,
};

export default MovieCard;
