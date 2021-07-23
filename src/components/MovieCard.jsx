// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie illustration.png" />
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <div>{rating}</div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number,
  imagePath: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  rating: 0,
};

export default MovieCard;
