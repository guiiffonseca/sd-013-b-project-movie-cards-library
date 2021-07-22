import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline } = movie;
    return (
      <div className="movie-card">
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieCard;
